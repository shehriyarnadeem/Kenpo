import React from 'react';
import { View, ActivityIndicator } from 'react-native';
const Loader = ({ status }) => {
  if (status) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      >
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }
  return null;
};

export default Loader;
