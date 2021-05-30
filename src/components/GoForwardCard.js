import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import IconAnt from 'react-native-vector-icons/AntDesign';
export default function GoForwardCard({ navigation, text, redirect, onPressHandler, stack }) {
  const navigate = () => {
    if (redirect) {
      if (stack) {
        navigation.navigate(stack, { screen: redirect });
      } else {
        navigation.navigate(redirect);
      }
    } else {
      console.log('No method attached');
    }
  };
  const triggerOnPress = () => {
    onPressHandler();
  };
  return (
    <TouchableOpacity onPress={navigation ? navigate : triggerOnPress}>
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
            {text}
          </Text>
          <IconAnt name="caretright" size={10} color="#001F65" />
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  about: {
    display: 'flex',
  },
});
