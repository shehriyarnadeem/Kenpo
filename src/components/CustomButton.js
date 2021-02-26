import React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
const CustomButton = ({
  imageSource,
  left,
  bottom,
  right,
  fontSize,
  color,
  title,
  top,
  clickHandler,
  icon,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={clickHandler}>
      <ImageBackground source={imageSource} style={styles.continueButtonStyle}>
        <Text
          style={{
            fontSize: fontSize ? fontSize : 115,

            color: color ? color : 'white',
            left: left, //60
            bottom: bottom, //4
            right: right,
            top: top,
          }}
        >
          {title && title}
          {'  '}
          <Image source={icon} style={{ display: 'flex' }} />
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  continueButtonStyle: {
    width: '90%',
    height: '95%',
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default CustomButton;
