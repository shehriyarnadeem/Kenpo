import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import GobackArrow from '../components/GobackArrow';
import GoForwardCard from '../components/GoForwardCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, Button } from 'react-native';
const UserDetails = ({ navigation }) => {
  const [setFemale, female] = useState(null);
  const [setMale, male] = useState(null);
  const toggleFemale = () => {
    console.log('sds');
    setFemale(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <GobackArrow navigation={navigation} route="Login" />
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

        <View style={{ ...styles.input }}>
          <TextInput style={styles.inputField} placeholder="Name" />
          <Icon style={styles.icon} name="user" size={30} />
        </View>
        <View style={{ ...styles.input }}>
          <TextInput style={styles.inputField} placeholder="Date of Birth" />
          <MaterialIcon style={styles.icon} name="date-range" size={30} />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <View
            style={{
              ...styles.button,
              backgroundColor: male ? '#7EA6FF' : 'white',
            }}
          >
            <Button title="Male" />
            <Icon style={styles.icon} name="user" size={30} />
          </View>
          <View
            style={{
              ...styles.button,
              backgroundColor: female ? '#7EA6FF' : 'white',
            }}
          >
            <Button title="Female" onPress={() => setFemale(true)} />
            <Icon style={styles.icon} name="user" size={30} />
          </View>
        </View>
        <View style={{ position: 'absolute', bottom: 0, justifyContent: 'center' }}>
          <GoForwardCard text="Continue" navigation={navigation} redirect="Subscription" />
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
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },

  heading: {
    width: '90%',
    paddingLeft: 20,
    paddingBottom: 20,
    display: 'flex',

    flexDirection: 'column',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: 20,
    width: '89%',
    paddingLeft: 50,

    alignSelf: 'center',
    justifyContent: 'center',
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
    height: 60,
    paddingLeft: 10,
    fontSize: 20,
  },
  icon: {
    position: 'absolute',
    left: 20,
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
    left: 40,
    top: 100,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
export default UserDetails;