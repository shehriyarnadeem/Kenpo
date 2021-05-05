import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Card, Title } from 'react-native-paper';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import NinjaBoy from '../../assets/images/ninjaboy.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { UserContext } from '../context';

const Subscription = ({ navigation }) => {
  const context = useContext(UserContext);
  const { user } = context;

  const HandleNavigation = () => {
    if (!user) {
      <TouchableOpacity>
        <Button
          onPress={() => navigation.navigate('Auth', { screen: 'Login' })}
          buttonStyle={styles.membershipCard}
          containerStyle={{ paddingTop: 10 }}
          icon={<Icon name="arrow-right" size={11} color="white" />}
          iconRight
          title="Get Membership"
        />
      </TouchableOpacity>;
    } else if (user && user.status === 'pending') {
      <TouchableOpacity>
        <Button
          onPress={() => navigation.navigate('PaymentForm')}
          buttonStyle={styles.membershipCard}
          containerStyle={{ paddingTop: 10 }}
          icon={<Icon name="arrow-right" size={11} color="white" />}
          iconRight
          title="Get Membership"
        />
      </TouchableOpacity>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
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
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {
    width: '95%',
    top: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
export default Subscription;
