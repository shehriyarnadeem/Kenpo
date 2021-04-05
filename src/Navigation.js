import * as React from 'react';
import Home from './screens/Home';
import News from './screens/News';
import { Text, View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeIcon from '../assets/images/home1.png';
import HomeIconBlue from '../assets/images/homeblue.png';
import NewsIconBlue from '../assets/images/newsblue.png';
import NewsIcon from '../assets/images/news.png';
import BackArrowIcon from '../assets/images/backarrow2.png';
import AccountIcon from '../assets/images/account.png';
import AccountIconBlue from '../assets/images/accountblue.png';
import NewsDetail from './screens/NewsDetail';
import Account from './screens/Account';
import AboutInstructor from './screens/AboutInstructor';
import VideoPlay from './screens/VideoPlay';
import VideoList from './screens/VideoList';
import Verification from './screens/Verification';
import UserDetails from './screens/UserDetails';
import PaymentForm from './screens/PaymentForm';
import Subscription from './screens/Subscription';
import Login from './screens/Login';
import EditProfile from './screens/EditProfile';
const AuthStack = createStackNavigator();
const ScreenWithoutTabs = createStackNavigator();
const Left = ({ onPress }) => {
  return (
    <View style={{ right: 25, alignSelf: 'center' }}>
      <Image source={BackArrowIcon} style={{ resizeMode: 'contain', height: '90%' }} />
    </View>
  );
};
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen
      name="Verification"
      component={Verification}
      options={{
        headerTitle: '',
        headerStatusBarHeight: 50,
        headerStyle: {
          backgroundColor: '#001f65',
        },
        headerTintColor: '#001f65',
      }}
    />
    <AuthStack.Screen
      name="UserDetails"
      component={UserDetails}
      options={{
        headerTitle: '',
        headerStatusBarHeight: 50,
        headerStyle: {
          backgroundColor: '#001f65',
        },
        headerTintColor: '#001f65',

        headerBackImage: () => <Left />,
      }}
    />
  </AuthStack.Navigator>
);

const ScreenWithoutTabsScreens = () => (
  <ScreenWithoutTabs.Navigator>
    <ScreenWithoutTabs.Screen
      name="About"
      component={AboutInstructor}
      options={{
        headerTitle: '',
        headerStatusBarHeight: 50,
        headerStyle: {
          backgroundColor: '#001f65',
        },
        headerTintColor: '#001f65',

        headerBackImage: () => <Left />,
      }}
    />

    <ScreenWithoutTabs.Screen
      name="NewsDetail"
      component={NewsDetail}
      options={{
        headerTitleStyle: {
          fontFamily: 'RalewayMedium',
          color: 'white',
          fontSize: 25,
          alignSelf: 'center',
          paddingLeft: 5,
        },
        headerStatusBarHeight: 50,

        headerStyle: {
          backgroundColor: '#001f65',
        },

        headerTintColor: 'white',

        headerBackImage: () => <Left />,
      }}
    />

    <ScreenWithoutTabs.Screen
      name="EditProfile"
      component={EditProfile}
      options={{
        headerTitleStyle: {
          fontFamily: 'RalewayMedium',
          color: 'white',
          fontSize: 25,
          paddingLeft: 10,
        },
        headerStatusBarHeight: 50,

        headerStyle: {
          backgroundColor: '#001f65',
        },

        headerTintColor: 'white',

        headerBackImage: () => <Left />,
      }}
    />
  </ScreenWithoutTabs.Navigator>
);

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="About" component={AboutInstructor} />
      <HomeStack.Screen
        name="VideoList"
        component={VideoList}
        options={{
          headerTitle: 'Video List',
          headerStatusBarHeight: 50,
          headerTitleStyle: {
            left: 10,
            fontFamily: 'RalewayMedium',
            fontSize: 22,
          },
          headerStyle: {
            backgroundColor: '#001f65',
          },

          headerTintColor: 'white',

          headerBackImage: () => <Left />,
        }}
      />
      <HomeStack.Screen
        name="Subscription"
        component={Subscription}
        options={{
          headerTitle: '',
          headerStatusBarHeight: 50,

          headerStyle: {
            backgroundColor: '#001f65',
          },

          headerTintColor: 'white',

          headerBackImage: () => <Left />,
        }}
      />
      <HomeStack.Screen
        name="VideoPlay"
        component={VideoPlay}
        options={{
          headerTitle: '',
          headerStatusBarHeight: 60,
          headerTitleStyle: {
            left: 10,
            fontFamily: 'RalewayMedium',
            fontSize: 22,
          },
          headerStyle: {
            backgroundColor: '#001f65',
          },

          headerTintColor: 'white',

          headerBackImage: () => <Left />,
        }}
      />
      <HomeStack.Screen
        name="PaymentForm"
        component={PaymentForm}
        options={{
          headerTitle: '',
          headerStatusBarHeight: 50,

          headerStyle: {
            backgroundColor: '#001f65',
          },

          headerTintColor: 'white',

          headerBackImage: () => <Left />,
        }}
      />
    </HomeStack.Navigator>
  );
};

const NewsStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="News"
        component={News}
        options={{
          headerTitle: 'Whats new and trending',
          headerStatusBarHeight: 50,

          headerStyle: {
            backgroundColor: '#001f65',
          },

          headerTintColor: 'white',
        }}
      />
      <HomeStack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{
          headerTitle: 'Lorem Ipsum is dummy ...',
          headerTitleStyle: {
            fontFamily: 'RalewayMedium',
            color: 'white',
            fontSize: 25,
            alignSelf: 'center',
            paddingLeft: 5,
          },
          headerStatusBarHeight: 50,

          headerStyle: {
            backgroundColor: '#001f65',
          },

          headerTintColor: 'white',

          headerBackImage: () => <Left />,
        }}
      />
    </HomeStack.Navigator>
  );
};

function TabsScreen() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.tabStyles}>
              <Image
                source={focused ? HomeIconBlue : HomeIcon}
                style={{ height: 25, width: 30, top: 12 }}
              />
              <Text style={{ top: 7, fontSize: 14, fontFamily: 'RalewayMedium' }}>Home</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="News"
        component={NewsStackScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.tabStyles}>
              <Image
                source={focused ? NewsIconBlue : NewsIcon}
                style={{ height: 25, width: 30, top: 12 }}
              />
              <Text style={{ top: 7, fontSize: 15, fontFamily: 'RalewayMedium' }}>News</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.tabStyles}>
              <Image
                source={focused ? AccountIconBlue : AccountIcon}
                style={{ height: 25, width: 30, top: 12 }}
              />
              <Text style={{ top: 7, fontSize: 15, fontFamily: 'RalewayMedium' }}>Account</Text>
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

const RootStack = createStackNavigator();

export function RootStackScreens({ navigation }) {
  return (
    <RootStack.Navigator headerMode="none" initialRouteName="Home">
      <RootStack.Screen
        name="Home"
        navigation={navigation}
        component={TabsScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <RootStack.Screen
        name="Auth"
        navigation={navigation}
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />

      <RootStack.Screen
        name="WithoutTabs"
        navigation={navigation}
        component={ScreenWithoutTabsScreens}
        options={{
          animationEnabled: false,
        }}
      />
    </RootStack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabStyles: {
    flexDirection: 'column',
    padding: 10,
    display: 'flex',
    alignItems: 'center',

    bottom: 0,
  },
});
