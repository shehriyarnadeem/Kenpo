import React, { useState, useEffect } from 'react';
import { apiClient } from './apiClient';
// import { useFonts } from '@use-expo/font';
// import { AppLoading } from 'expo';
export const UserContext = React.createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await apiClient({
          url: '/user/profile',
          method: 'GET',
        });

        if (response.status === 200) {
          setUser(response.data.data);
        }
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, []);

  // let [fontsLoaded] = useFonts({
  //   RalewayMedium: require('../assets/fonts/static/Raleway-Medium.ttf'),
  //   RalewayBlack: require('../assets/fonts/static/Raleway-Regular.ttf'),
  //   RalewayExtraBold: require('../assets/fonts/static/Raleway-ExtraBold.ttf'),
  //   RalewayBold: require('../assets/fonts/static/Raleway-Bold.ttf'),
  //   RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
  //   NunitoSansRegular: require('../assets/fonts/static/NunitoSans-Regular.ttf'),
  // });
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
export default UserContextProvider;
