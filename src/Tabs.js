import * as React from 'react';
import Home from './screens/Home';
import News from './screens/News';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import NewsDetail from './screens/NewsDetail';
import Verification from './screens/Verification';
import UserDetails from './screens/UserDetails';
import Login from './screens/Login';

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NewsStack() {
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen
        name="News"
        component={News}
        tabBarVisible={false}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        tabBarVisible={false}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function LoginStack() {
  return (
    <Stack.Navigator options={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={Login}
        tabBarVisible={false}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        tabBarVisible={false}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetails}
        tabBarVisible={false}
        options={{ headerShown: false }}
      />

     
    </Stack.Navigator>
  );
}

export function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'blue',
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="md-home" size={32} />,
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsStack}
        options={{
          tabBarLabel: 'News',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="newspaper" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={Profile}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color, size }) => <AntDesign name="user" size={33} color="black" />,
        }}
      />

      <Tab.Screen
        name="Login"
        component={LoginStack}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => <AntDesign name="user" size={33} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
