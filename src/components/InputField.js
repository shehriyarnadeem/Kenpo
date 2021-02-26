import React from 'react';
import { View, StyleSheet, Image, TextInput } from 'react-native';
const InputField = ({ icon, placeholder, value, onChange, onClick }) => {
  return (
    <View style={{ ...styles.input }}>
      <View style={styles.SectionStyle}>
        <Image source={icon} style={styles.ImageStyle} />
        <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          placeholderTextColor="#00000"
          onChange={onChange}
          value={value}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
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
});
export default InputField;
