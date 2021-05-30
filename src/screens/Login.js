import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import GoForwardCard from '../components/GoForwardCard';
import { apiClient } from '../apiClient';
import Loader from '../components/Loader';

const Login = ({ navigation }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const phoneInput = useRef(PhoneInput);
  const setPhoneNumber = async () => {
    setError(null);
    setLoading(true);

    const countrycode = phoneInput.current?.getCallingCode();
    const number = '+' + countrycode + value;
    const checkValid = phoneInput.current?.isValidNumber(number);

    if (!checkValid) {
      setValid(checkValid ? checkValid : false);
      setError('Invalid phone number');
      setLoading(false);
      return;
    }
    const payload = { mobile: number };

    try {
      const response = await apiClient({
        url: '/user/verify',
        method: 'POST',
        data: { ...payload },
      });

      if (response.data.data.length !== 0) {
        navigation.navigate('Verification', { payload });
      } else {
        navigation.navigate('UserDetails', { payload });
      }
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };
  navigation.setOptions({ headerShown: false });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.heading}>
          <Text style={styles.title}>Please enter your mobile no. to continue</Text>
        </View>
        {error ? (
          <Text
            style={{
              color: 'red',
              fontFamily: 'RalewayMedium',
              fontSize: 14,
              padding: 10,
              left: 20,
            }}
          >
            Invalid phone number
          </Text>
        ) : null}
        <View style={styles.phone}>
          <PhoneInput
            defaultValue={value}
            layout="first"
            defaultCode="PK"
            ref={phoneInput}
            onChangeText={(text) => {
              setError(null);
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            containerStyle={{
              backgroundColor: '#FFFFFF',
              width: '90%',
              borderWidth: 2,

              borderColor: error ? 'red' : 'white',
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
        </View>
        <View style={{ top: 40 }}>
          <Loader status={loading} />
        </View>
      </View>

      <View style={styles.continue}>
        <GoForwardCard text="Continue" onPressHandler={setPhoneNumber} />
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
  title: {
    color: '#FFFFFF',
    fontFamily: 'RalewayMedium',
    fontSize: 24,
    textAlign: 'left',
  },

  heading: {
    width: '80%',
    paddingLeft: 20,
    paddingTop: 40,
    minHeight: 200,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  continue: {
    bottom: 20,

    justifyContent: 'flex-end',
  },
  phone: {
    alignItems: 'center',
    minHeight: 10,
    justifyContent: 'center',
  },
});
export default Login;
