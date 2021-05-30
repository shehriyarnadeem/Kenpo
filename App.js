import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserContextProvider from './src/context';

import { RootStackScreens } from './src/Navigation';

export default () => {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <RootStackScreens />
      </UserContextProvider>
    </NavigationContainer>
  );
};
