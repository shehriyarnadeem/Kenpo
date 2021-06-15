import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { apiClient } from '../apiClient';
import { Card, Title } from 'react-native-paper';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import NinjaBoy from '../../assets/images/ninjaboy.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { UserContext } from '../context';
import IAP from 'react-native-iap';
import Utils from '../utils';
// Platform select will allow you to use a different array of product ids based on the platform
const items = Platform.select({
  ios: [],
  android: ['kenpo_100_1m'],
});

let purchaseUpdateSubscription;
let purchaseErrorSubscription;

const Subscription = ({ navigation }) => {
  const [purchased, setPurchased] = useState(false); //set to true if the user has active subscription
  const [products, setProducts] = useState(null); //used to store list of products
  const context = useContext(UserContext);
  const { user, setUser } = context;

  useEffect(() => {
    IAP.initConnection()
      .catch(() => {
        console.log('error connecting to store...');
      })
      .then(() => {
        IAP.getSubscriptions(items)
          .catch(() => {
            console.log('error finding items', items);
          })
          .then((res) => {
            setProducts(res);
          });

        IAP.getPurchaseHistory()
          .catch(() => {})
          .then((res) => {
            try {
              const receipt = res[res.length - 1];
              if (receipt) {
                console.log('Reciept');
              }
            } catch (error) {}
          });
      }, []);

    purchaseErrorSubscription = IAP.purchaseErrorListener((error) => {
      if (!(error['responseCode'] === '2')) {
        console.log(
          'Error',
          'There has been an error with your purchase, error code' + error['code']
        );
      }
    });
    purchaseUpdateSubscription = IAP.purchaseUpdatedListener((purchase) => {
      if (purchase) {
        setPurchased(true);
        updateUser(purchase);
        IAP.finishTransaction(purchase, false);
      }
    });

    return () => {
      try {
        purchaseUpdateSubscription.remove();
      } catch (error) {}
      try {
        purchaseErrorSubscription.remove();
      } catch (error) {}
      try {
        IAP.endConnection();
      } catch (error) {}
    };
  }, []);

  const updateUser = async (purchaseReceipt) => {
    const payload = {
      ...user,
      status: 'paid',
      subscription_expiry_date: Utils.getEndDate(),
      device: 'android',
      subscription_id: purchaseReceipt.transactionId,
    };

    try {
      await apiClient({
        url: '/user/subscription',
        method: 'POST',
        data: { ...payload },
      });
      setUser(payload);
    } catch (e) {
      console.log(e.message);
    }
  };

  const HandleNavigation = () => {
    if (!user) {
      return (
        <TouchableOpacity>
          <Button
            onPress={() => navigation.navigate('Auth', { screen: 'Login' })}
            buttonStyle={styles.membershipCard}
            containerStyle={{ paddingTop: 10 }}
            icon={<Icon name="arrow-right" size={11} color="white" />}
            iconRight
            title="Get Membership"
          />
        </TouchableOpacity>
      );
    } else if (user && user.status === 'pending') {
      if (products) {
        return (
          products &&
          products.map((p) => {
            return (
              <Button
                buttonStyle={styles.membershipCard}
                containerStyle={{ paddingTop: 10 }}
                icon={<Icon name="arrow-right" size={11} color="white" />}
                iconRight
                key={p['productId']}
                title="Get Membership"
                onPress={() => {
                  IAP.requestSubscription(p['productId']);
                }}
              />
            );
          })
        );
      } else {
        return (
          <View>
            <Text>Loading Subscription</Text>
          </View>
        );
      }
    } else {
      return (
        <View>
          <Text>Subscription activated</Text>
        </View>
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={{ paddingLeft: 20 }}>
          <Image source={NinjaBoy} />
        </View>
        <View style={styles.card}>
          <Card style={{ borderRadius: 12 }}>
            <Card.Content>
              <Title
                style={{
                  color: '#000000',
                  fontFamily: 'RalewayBold',
                  fontSize: 20,
                }}
              >
                Membership
              </Title>
              <Text
                style={{
                  paddingTop: 10,
                  fontSize: 15,
                  lineHeight: 30,
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
              <View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingTop: 15,
                  }}
                >
                  <Text
                    style={{
                      color: '#000000',
                      fontFamily: 'RobotoRegular',
                      fontSize: 34,
                    }}
                  >
                    $15
                  </Text>
                  <Text
                    style={{
                      color: '#000000',
                      fontFamily: 'RalewayBold',
                      fontSize: 26,
                      alignSelf: 'center',
                      left: 7,
                    }}
                  >
                    per month
                  </Text>
                </View>
              </View>
              <Card.Actions>
                <HandleNavigation />
              </Card.Actions>
            </Card.Content>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001f65',
  },
  membershipCard: {
    width: '80%',
    paddingLeft: 25,
    alignContent: 'center',
    textAlign: 'left',
    backgroundColor: '#001F65',
    justifyContent: 'space-between',
    fontFamily: 'RalewayMedium',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'flex-start',

    height: hp('15%'),
  },
  content: {
    display: 'flex',
    flex: 1,
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {
    width: '95%',

    height: hp('50%'),
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
export default Subscription;
