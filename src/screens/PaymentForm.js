import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { TextInputMask } from 'react-native-masked-text';
import Loader from '../components/Loader';
import { Card } from 'react-native-elements';
import IconAnt from 'react-native-vector-icons/AntDesign';
import InputField from '../components/InputField';
import UserIcon from '../../assets/images/usericon.png';
import Paymenticon from '../../assets/images/paymentname.png';
import DateIcon from '../../assets/images/bag.png';
import CvcIcon from '../../assets/images/cvc.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { UserContext } from '../context';
const PaymentForm = ({ navigation, ...props }) => {
  const context = useContext(UserContext);
  const { user, setUser } = context;
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(null);
  const [card, setCard] = useState(null);
  const [expiry, setExpiry] = useState(null);
  const [cvc, setCvc] = useState(null);
  const onSubmit = async () => {
    setLoading(true);

    try {
      setUser((state) => ({ ...state, status: 'paid' }));
      navigation.navigate('Home', { screen: 'Home' });
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.heading}>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'RalewayMedium',
              fontSize: 24,
            }}
          >
            Card Detail
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',

            display: 'flex',
            alignItems: 'center',
            width: '92%',
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            borderRadius: 5,
            height: 60,
          }}
        >
          <Image source={Paymenticon} />
          <TextInputMask
            type={'credit-card'}
            options={{
              obfuscated: false,
              issuer: 'amex',
            }}
            placeholder="Card Number"
            placeholderTextColor="#000000"
            style={{
              width: '80%',
              justifyContent: 'center',
              display: 'flex',
              alignSelf: 'flex-end',
              height: 60,
              fontSize: 19,
            }}
            // dont forget to set the "value" and "onChangeText" props
            value={card}
            onChangeText={(text) => {
              setCard(text);
            }}
          />
        </View>

        <View>
          <InputField
            fontSize={5}
            containerStyle={{ fontSize: 10 }}
            icon={UserIcon}
            placeholder="Name"
            onChange={(e) => setName(e.nativeEvent.text)}
            // value={name}
          />
        </View>
        <View
          style={{
            display: 'flex',

            justifyContent: 'space-around',

            flexDirection: 'row',
          }}
        >
          <View
            style={{
              backgroundColor: 'white',

              display: 'flex',
              alignItems: 'center',
              width: '50%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              borderRadius: 5,
              height: 60,
            }}
          >
            <Image source={DateIcon} />
            <TextInputMask
              type={'datetime'}
              placeholder="Expiry Date"
              placeholderTextColor="black"
              style={{
                width: '54%',
                justifyContent: 'center',
                display: 'flex',
                alignSelf: 'flex-end',
                height: 60,
                backgroundColor: 'white',
                fontSize: 19,
              }}
              options={{
                format: 'YY/MM',
              }}
              // dont forget to set the "value" and "onChangeText" props
              value={expiry}
              onChangeText={(text) => {
                setExpiry(text);
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: 'white',

              display: 'flex',
              alignItems: 'center',
              width: '35%',
              alignSelf: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              borderRadius: 5,
              height: 60,
            }}
          >
            <Image source={CvcIcon} />
            <TextInputMask
              type={'custom'}
              options={{
                mask: '999',
              }}
              placeholderTextColor="black"
              placeholder="CVC"
              style={{
                width: '50%',
                justifyContent: 'center',
                display: 'flex',
                alignSelf: 'flex-end',
                height: 60,
                backgroundColor: 'white',
                fontSize: 19,
              }}
              // dont forget to set the "value" and "onChangeText" props
              value={cvc}
              onChangeText={(text) => {
                setCvc(text);
              }}
            />
          </View>
        </View>
      </View>
      <Loader status={loading} />
      <View style={styles.continue}>
        <View style={{ bottom: 20 }}>
          <TouchableOpacity onPress={onSubmit}>
            <Card containerStyle={styles.about} borderRadius={10}>
              <View
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: '#001F65',
                    fontFamily: 'RalewayMedium',
                  }}
                >
                  Pay Now
                </Text>
                <IconAnt name="caretright" size={10} color="#001F65" />
              </View>
            </Card>
          </TouchableOpacity>
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
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  continue: {
    height: hp('20%'),
    justifyContent: 'flex-end',
  },
  heading: {
    width: '90%',
    paddingLeft: 20,
    marginBottom: 10,
    display: 'flex',

    flexDirection: 'column',
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  input2: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 20,
    width: '42%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 20,
    width: '42%',
    height: 60,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  inputField: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 20,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 60,
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignItems: 'center',
  },

  icon: {
    position: 'absolute',
    left: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',

    alignItems: 'center',
    width: '100%',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    fontSize: 20,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: 'white',
  },

  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 1,
    backgroundColor: 'white',
    color: 'black',
    fontSize: 20,
  },
  header: {
    justifyContent: 'center',

    height: hp('20%'),
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
export default PaymentForm;
