import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Verification from './src/screens/Verification'
import UserDetails from './src/screens/UserDetails'
import Subscription from './src/screens/Subscription'
import Login from './src/screens/Login'
import MyTabs from './src/Tabs'
import { AppLoading } from 'expo'
import { useFonts } from '@use-expo/font'
export default function App() {
    let [fontsLoaded] = useFonts({
        RalewayMedium: require('./assets/fonts/static/Raleway-Medium.ttf'),
        RalewayBlack: require('./assets/fonts/static/Raleway-Regular.ttf'),
        RalewayExtraBold: require('./assets/fonts/static/Raleway-ExtraBold.ttf'),
        RalewayBold: require('./assets/fonts/static/Raleway-Bold.ttf'),
        RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }
    const Stack = createStackNavigator()
    return (
        <>
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
