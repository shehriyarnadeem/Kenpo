import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import { Card } from 'react-native-elements';
import IconAnt from 'react-native-vector-icons/AntDesign';
import CustomButtonV2 from '../components/CustomButton-v2';
import InputField from '../components/InputField';
import CheckBox from 'react-native-check-box';
import UserIcon from '../../assets/images/accountblue.png';
import UserIcon2 from '../../assets/images/usericon.png';
import MarsIcon from '../../assets/images/mars.png';
import DateIcon from '../../assets/images/calendar_date.png';
import DatePicker from 'react-native-datepicker';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axios from 'axios';
import { UserContext } from '../context';
import HttpService from '../HttpService';
const EditProfile = ({ navigation }) => {
  const context = useContext(UserContext);
  const { user, setUser } = context;

  const [female, setFemale] = useState(null);
  const [validation, setValidation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState(user.gender);
  const [male, setMale] = useState();
  const [name, setName] = useState(user.name);
  const [date, setDate] = useState(user.dob);

  const onSubmit = async () => {
    setLoading(true);
    setValidation([]);
    const payload = {
      name,
      dob: date,
      gender: gender,
      status: user.status,
    };
    const token = await AsyncStorage.getItem('jwt');
    try {
      const response = await HttpService.post('/user/update', payload);

      setLoading(false);
      setUser(payload);
      setLoading(false);
      navigation.navigate('Account');
    } catch (e) {
      console.log(e.message);
      setLoading(false);
    }
  };

  const toggleFemale = () => {
    setMale(false);
    setFemale(true);
    setGender('female');
  };
  const toggleMale = () => {
    setFemale(false);
    setGender('male');
    setMale(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <InputField
          placeholder="Name"
          value={name}
          icon={UserIcon}
          onChange={(e) => {
            setName(e.nativeEvent.text);
          }}

          // value={name}
        />
        {validation.includes('Field1') ? (
          <View style={{ justifyContent: 'center', marginLeft: 12, bottom: 7 }}>
            <Text style={{ color: 'red', fontSize: 15 }}>- Missing Name field</Text>
          </View>
        ) : null}

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
          <DatePicker
            style={styles.datePickerStyle}
            date={date} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="Date of Birth"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            iconSource={DateIcon}
            style={{ width: '100%', borderColor: 'white', borderColor: 'white' }}
            customStyles={{
              borderColor: 'white',
              dateInput: {
                marginLeft: 56,

                borderColor: 'white',
                alignItems: 'flex-start',
              },

              dateIcon: {
                position: 'absolute',

                left: 0,
                top: 4,
                borderColor: 'white',
                marginLeft: 10,
              },
              borderWidth: 0,
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />
        </View>
        {validation.includes('Field2') ? (
          <View style={{ justifyContent: 'center', marginLeft: 12, top: 2 }}>
            <Text style={{ color: 'red', fontSize: 15 }}>- Missing Name field</Text>
          </View>
        ) : null}
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: wp('92%'),
            marginLeft: 15,
            marginTop: 10,
            flexDirection: 'row',
          }}
        >
          <CustomButtonV2
            icon={MarsIcon}
            text="Male"
            onPressHandler={toggleMale}
            color={gender === 'male' ? 'gray' : '#fff'}
            fontColor={gender === 'male' ? '#fff' : '#000'}
          />
          <CustomButtonV2
            icon={UserIcon2}
            text="Female"
            onPressHandler={toggleFemale}
            color={gender === 'female' ? 'gray' : '#fff'}
            fontColor={gender === 'female' ? '#fff' : '#000'}
          />
        </View>
        {validation.includes('Field3') ? (
          <View style={{ justifyContent: 'center', marginLeft: 12, paddingTop: 5 }}>
            <Text style={{ color: 'red', fontSize: 15 }}> -Missing Gender field</Text>
          </View>
        ) : null}
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
                  Continue
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
  datePickerStyle: {
    width: 200,
    marginTop: 20,
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
    top: 7,
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
export default EditProfile;
