import * as React from 'react'
import Home from './screens/Home'
import News from './screens/News'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons'
import NewsDetail from './screens/NewsDetail'
import Account from './screens/Account'
import AboutInstructor from './screens/AboutInstructor'
import VideoPlay from './screens/VideoPlay'
import VideoList from './screens/VideoList'
import Verification from './screens/Verification'
import UserDetails from './screens/UserDetails'
import Subscription from './screens/Subscription'
import Login from './screens/Login'
import { UserContext } from '../src/context'
const AuthStack = createStackNavigator()
const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Verification" component={Verification} />
        <AuthStack.Screen name="UserDetails" component={UserDetails} />
    </AuthStack.Navigator>
)

const Tabs = createBottomTabNavigator()
const HomeStack = createStackNavigator()

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} />

            <HomeStack.Screen
                name="About"
                component={AboutInstructor}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />

            <HomeStack.Screen
                name="VideoList"
                component={VideoList}
                options={({ route }) => ({
                    title: route.params.name,
                })}
            />
            <HomeStack.Screen name="Subscription" component={Subscription} />
        </HomeStack.Navigator>
    )
}

function TabsScreen() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={HomeStackScreen} />
            <Tabs.Screen name="News" component={News} />
        </Tabs.Navigator>
    )
}

const RootStack = createStackNavigator()

export function RootStackScreen() {
    const context = React.useContext(UserContext)
    const { user } = context
    if (!user) {
        return (
            <RootStack.Navigator headerMode="none">
                <RootStack.Screen
                    name="Auth"
                    component={AuthStackScreen}
                    options={{
                        animationEnabled: false,
                    }}
                />
            </RootStack.Navigator>
        )
    }
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen
                name="Home"
                component={TabsScreen}
                options={{
                    animationEnabled: false,
                }}
            />
        </RootStack.Navigator>
    )
}
export default RootStackScreen
