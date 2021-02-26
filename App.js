import React, { useState, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import UserContextProvider from './src/context'
import RootStackScreen from './src/Tabs'
export default () => {
    const [user, setUser] = useState(null)
    return (
        <UserContextProvider>
            <NavigationContainer>
                <RootStackScreen context={{ user, setUser }} />
            </NavigationContainer>
        </UserContextProvider>
    )
}
