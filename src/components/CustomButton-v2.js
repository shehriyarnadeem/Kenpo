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

export default function CustomButtonv2({ icon, text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} underlayColor="#fff">
      <Image source={icon} style={styles.image} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
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
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
});
