import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/Tabs';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
export default function App() {
  let [fontsLoaded] = useFonts({
    RalewayMedium: require('./assets/fonts/static/Raleway-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
