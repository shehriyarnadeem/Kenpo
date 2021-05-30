import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Loader from '../components/Loader';
import { apiClient } from '../apiClient';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-community/async-storage';
import { UserContext } from '../context';
import GoForwardCard from '../components/GoForwardCard';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
const Verification = ({ navigation, ...props }) => {
  const [code, setCode] = useState(null);
  const [error, setError] = useState(null);
  const [otpModal, resetOtpModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const context = useContext(UserContext);
  const { user, setUser } = context;
  const mobileNumber =
    props && props.route && props.route.params.payload.mobile
      ? props.route.params.payload.mobile
      : null;
  const submitOtp = async () => {
    setError(null);

    const payload = { code: code, mobile: mobileNumber };

    if (payload.code === null) {
      return;
    }
    setLoading(true);
    try {
      const response = await apiClient({
        url: '/user/login',
        method: 'POST',
        data: { ...payload },
      });

      if (response.data.message) {
        setLoading(false);
        setError(response.data.message);
        return;
      }

      setUser(response.data.data);

      await AsyncStorage.setItem('jwt', response.data.data.token);
      navigation.navigate('Home', { screen: 'Home' });

      setLoading(false);
    } catch (e) {
      console.log(e);

      setLoading(false);
    }
  };

  const toggleOtpModal = (check) => {
    resetOtpModal(check);
  };
  const resendOtp = async () => {
    setLoading(true);
    const payload = { mobile: mobileNumber };
    try {
      await apiClient({
        url: '/user/verify',
        method: 'POST',
        data: { ...payload },
      });
      toggleOtpModal(true);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e.message);
    }
  };

  function ResetOtpModal({ visible }) {
    return (
      <Modal isVisible={visible}>
        <View
          style={{
            backgroundColor: 'white',
            height: '30%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'RalewayBold',
              textAlign: 'center',
              fontSize: 19,
            }}
          >
            Otp sent successfully
          </Text>
          <View
            style={{
              display: 'flex',

              justifyContent: 'center',
              top: 30,
              alignItems: 'center',
              width: '100%',
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: '#001F65',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
                width: 170,
                height: 40,
                borderRadius: 5,
              }}
            >
              <Button
                style={{
                  color: '#ffffff',
                  fontSize: 20,
                }}
                onPress={() => toggleOtpModal(false)}
              >
                Ok
              </Button>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ResetOtpModal visible={otpModal} />
      <View style={styles.content}>
        <View style={styles.heading}>
          <Text style={styles.verification}>Verification</Text>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'RalewayMedium',
              fontSize: 24,
            }}
          >
            We have sent a message on your mobile number
          </Text>
        </View>

        <View style={styles.input}>
          <OTPInputView
            style={{
              width: '80%',
              height: 120,
            }}
            codeInputFieldStyle={styles.otpStyle}
            pinCount={4}
            editable
            // code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            onCodeChanged={(code) => setCode(code)}
          />

          <Loader status={loading} />
          <TouchableOpacity onPress={resendOtp}>
            <Text
              style={{
                color: '#7EA6FF',
                fontFamily: 'RalewayMedium',
                fontSize: 18,
              }}
            >
              Resend OTP
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: 'red', fontSize: 14, alignSelf: 'center' }}>{error}</Text>
      </View>

      <View style={styles.continue}>
        <View style={{ paddingBottom: 10 }}>
          <GoForwardCard text="Continue" onPressHandler={submitOtp} />
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
  heading: {
    width: '100%',
    paddingLeft: 30,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  otpStyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    color: 'black',
    fontSize: 30,
    height: 60,
    width: 60,
    fontWeight: 'bold',
  },
  input: {
    alignItems: 'center',

    justifyContent: 'center',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
    backgroundColor: 'white',
  },

  borderStyleHighLighted: {
    borderColor: 'white',
  },
  continue: {
    height: hp('10%'),

    justifyContent: 'flex-end',
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
    alignItems: 'flex-start',

    height: hp('15%'),
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  verification: {
    color: '#7EA6FF',
    fontFamily: 'RalewayBold',
    fontSize: 20,
    paddingBottom: 10,
  },
});
export default Verification;
