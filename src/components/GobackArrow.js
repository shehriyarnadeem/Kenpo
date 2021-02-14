import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import BackArrowBack from '../../assets/images/backarrowbackground.png';
import BackArrow from '../../assets/images/backarrow.png';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
const GobackArrow = ({ text, navigation, route }) => {
  const navigate = () => {
    navigation.navigate(route);
  };
  return (
    <View style={styles.main}>
      <TouchableOpacity activeOpacity={10} onPress={navigate}>
        <Button
          buttonStyle={{ backgroundColor: 'white' }}
          icon={<Icon name="arrow-left" size={30} color="green" />}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 100,

    paddingTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    resizeMode: 'cover',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'normal',
    fontFamily: 'RalewayMedium',
  },
});
export default GobackArrow;
