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

export default function CustomButtonv2({ icon, text, onPressHandler, color, fontColor }) {
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: color }}
      onPress={onPressHandler}
      underlayColor="#fff"
    >
      <Image source={icon} style={styles.image} resizeMode="contain" />
      <Text style={{ ...styles.text, color: fontColor }}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 158,
    flexDirection: 'row',
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  image: {
    resizeMode: 'contain',
    paddingLeft: 40,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});
