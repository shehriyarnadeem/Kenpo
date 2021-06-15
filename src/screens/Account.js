import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, Linking } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Card } from 'react-native-paper';
import IconAnt from 'react-native-vector-icons/AntDesign';
import UserIcon2 from '../../assets/images/usericon.png';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';
import MarsIcon from '../../assets/images/mars.png';
import Logout from '../../assets/images/Logout.png';
import BagIcon from '../../assets/images/bag.png';
import { UserContext } from '../context';
import Loader from '../components/Loader';

import IAP from 'react-native-iap';
const Account = ({ navigation }) => {
  useEffect(() => {
    async function getProduct() {
      try {
        const result = await IAP.initConnection();

        const products = await IAP.getPurchaseHistory();
        const receipt = products[0].transactionReceipt;
        const token = await AsyncStorage.getItem('jwt');
        const validate = await IAP.validateReceiptAndroid(
          'com.kenpo.rnap',
          'kenpo_100_1m',
          receipt.purchaseToken,
          token,
          true
        );
        console.log(validate, '324');
        // this.setState({ products });
      } catch (err) {
        console.warn(err); // standardized err.code and err.message available
      }
    }
    getProduct();
  });

  const context = useContext(UserContext);
  const { user, setUser } = context;
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = (check) => {
    setModalVisible(check);
  };

  const SignOut = async () => {
    setLoading(true);
    await AsyncStorage.removeItem('jwt');
    setUser(null);
    setLoading(false);
    navigation.navigate('Home');
  };

  const cancelMembership = async () => {
    await Linking.openURL(
      'https://play.google.com/store/account/subscriptions?package=com.kenpo.rnapp&sku=kenpo_100_1m'
    );

    toggleModal(false);
  };

  const Loading = () => {
    if (loading) {
      return <Loader status={loading} />;
    }
    return null;
  };

  const MembershipButton = () => {
    if (user && user.status == 'pending') {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home', { screen: 'Subscription' });
          }}
        >
          <Text
            style={{
              fontFamily: 'RalewayMedium',
              color: '#001F65',
              fontSize: 15,
            }}
          >
            Get Membership
          </Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => {
          toggleModal(true);
        }}
      >
        <Text
          style={{
            fontFamily: 'RalewayMedium',
            color: '#001F65',
            fontSize: 15,
          }}
        >
          Cancel Membership
        </Text>
      </TouchableOpacity>
    );
  };

  const LoginButton = () => {
    return (
      <>
        <TouchableOpacity onPress={() => navigation.navigate('Auth', { screen: 'Login' })}>
          <Button
            onPress={() => navigation.navigate('Auth', { screen: 'Login' })}
            buttonStyle={{
              width: '73%',
              padding: 6,
              textAlign: 'left',
              backgroundColor: '#001F65',
              justifyContent: 'space-around',
            }}
            containerStyle={{ paddingTop: 10, width: '100%' }}
            icon={<IconAnt name="arrow-right" size={20} color="white" />}
            iconRight
            title="Sign In With phone number"
          />
        </TouchableOpacity>
      </>
    );
  };
  const PersonalDetails = () => {
    return (
      <>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',

            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'RalewayBold',
              fontSize: 16,
            }}
          >
            Personal Detail
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('WithoutTabs', { screen: 'EditProfile' })}
          >
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#001F65',
                fontSize: 15,
              }}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
          <View
            style={{
              ...styles.RowPersonalDetails,
            }}
          >
            <Image source={UserIcon2} style={{ resizeMode: 'contain' }} />
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#000000',
                fontSize: 16,
                position: 'relative',
                paddingLeft: 10,
              }}
            >
              {user && user.name ? user.name : 'Not Available'}
            </Text>
          </View>
          <View
            style={{
              ...styles.RowPersonalDetails,
            }}
          >
            <Image source={BagIcon} />
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#000000',
                fontSize: 16,
                paddingLeft: 10,
              }}
            >
              {user && user.dob ? user.dob : 'N/a'}
            </Text>
          </View>
          <View
            style={{
              ...styles.RowPersonalDetails,
            }}
          >
            <Image source={MarsIcon} />
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#000000',
                fontSize: 16,
                paddingLeft: 10,
              }}
            >
              {user && user.gender ? user.gender : 'N/a'}
            </Text>
          </View>
        </View>
      </>
    );
  };

  const MembershipDetails = () => {
    return (
      <>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',

            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'RalewayBold',
              fontSize: 16,
            }}
          >
            Membership Details
          </Text>
        </View>

        <View style={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
          <View
            style={{
              ...styles.RowPersonalDetails,
            }}
          >
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#000000',
                fontSize: 16,
                position: 'relative',
                paddingLeft: 10,
              }}
            >
              Expiry date :
            </Text>
            <Text
              style={{
                fontFamily: 'RalewayMedium',
                color: '#000000',
                fontSize: 16,
                position: 'relative',
                paddingLeft: 10,
              }}
            >
              {user && user.subscription_expiry_date}
            </Text>
          </View>
        </View>
      </>
    );
  };

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <LoginButton />
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: wp('90%'),
            flexDirection: 'row',
            height: hp('20%'),
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              paddingLeft: 40,
              fontFamily: 'RalewayBold',
            }}
          >
            My Account
          </Text>

          <TouchableOpacity onPress={() => SignOut()}>
            {loading ? (
              <Loader />
            ) : (
              <Image source={Logout} style={{ resizeMode: 'contain', height: 30, marginTop: 10 }} />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            bottom: 30,
          }}
        >
          <Card
            style={{
              width: wp('95%'),
              borderRadius: 20,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          >
            <Card.Content>
              <PersonalDetails />
            </Card.Content>
          </Card>
        </View>

        {user && user.status === 'paid' && (
          <View
            style={{
              alignItems: 'center',
              flex: 1,
              bottom: 30,
            }}
          >
            <Card
              style={{
                width: wp('95%'),
                borderRadius: 20,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            >
              <Card.Content>
                <MembershipDetails />
              </Card.Content>
            </Card>
          </View>
        )}
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#001f65',
  },
  RowPersonalDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    textAlign: 'left',

    paddingTop: 18,

    alignItems: 'center',
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
export default Account;
