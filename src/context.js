import React, { useState } from 'react'

import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'
export const UserContext = React.createContext()

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    let [fontsLoaded] = useFonts({
        RalewayMedium: require('../assets/fonts/static/Raleway-Medium.ttf'),
        RalewayBlack: require('../assets/fonts/static/Raleway-Regular.ttf'),
        RalewayExtraBold: require('../assets/fonts/static/Raleway-ExtraBold.ttf'),
        RalewayBold: require('../assets/fonts/static/Raleway-Bold.ttf'),
        RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    })
    if (!fontsLoaded) {
        return <AppLoading />
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider
