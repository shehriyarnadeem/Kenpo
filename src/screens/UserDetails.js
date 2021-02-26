import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Card } from 'react-native-elements';
import IconAnt from 'react-native-vector-icons/AntDesign';
import CustomButtonV2 from '../components/CustomButton-v2';
import GobackArrow from '../components/GobackArrow';
import GoForwardCard from '../components/GoForwardCard';
import InputField from '../components/InputField';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from 'react-native-check-box';
import UserIcon from '../../assets/images/usericon.png';
import MarsIcon from '../../assets/images/mars.png';
import DateIcon from '../../assets/images/bag.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { UserContext } from '../context';

const UserDetails = ({ navigation }) => {
  const context = useContext(UserContext);
  const { user, setUser } = context;
  const [female, setFemale] = useState(null);
  const [male, setMale] = useState(null);
  const [date, setDate] = useState(new Date(null));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(!show);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
  const toggleFemale = () => {
    setMale(false);
    setFemale(true);
  };
  const toggleMale = () => {
    setFemale(false);
    setMale(true);
  };

  navigation.setOptions({ headerShown: false });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ paddingTop: 70 }}>
          <GobackArrow route="Verification" navigation={navigation} />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.heading}>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'RalewayMedium',
              fontSize: 24,
            }}
          >
            Please Enter Your Profile Detail to Continue
          </Text>
        </View>

        <InputField placeholder="Name" icon={UserIcon} />
        <InputField
          placeholder="Date of birth"
          icon={DateIcon}
          value={date.toDateString() !== null ? date.toDateString() : ''}
          onChange={setShow}
        />

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

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
          <CustomButtonV2 icon={MarsIcon} text="Male" onChange={toggleMale} />
          <CustomButtonV2 icon={UserIcon} text="Female" onChange={toggleFemale} />
        </View>
      </View>

      <View style={styles.continue}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={{
              flex: 1,
              justifyContent: 'center',
              paddingLeft: 20,
              bottom: 50,
              color: 'white',
            }}
            color="#fffff"
            onClick={() => console.log('checked')}
            isChecked={true}
            checkBoxColor="white"
            checkboxContainer="white"
            checkedCheckBoxColor="white"
            rightTextStyle={{ color: 'white', fontSize: 14 }}
            rightText={`By continuing, you agree to T&C`}
          />
        </View>
        <View style={{ bottom: 20 }}>
          <TouchableOpacity onPress={() => setUser('12')}>
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
  continue: {
    height: hp('10%'),
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
    alignItems: 'flex-start',

    height: hp('15%'),
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
export default UserDetails;
