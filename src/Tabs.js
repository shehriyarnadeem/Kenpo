import * as React from 'react';
import Home from './screens/Home';
import News from './screens/News';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeIcon from '../assets/images/home1.png';
import HomeIconBlue from '../assets/images/homeblue.png';
import NewsIconBlue from '../assets/images/newsblue.png';
import NewsIcon from '../assets/images/news.png';

import BackArrowIcon from '../assets/images/backarrow2.png';
import AccountIcon from '../assets/images/account.png';
import AccountIconBlue from '../assets/images/accountblue.png';
import { Ionicons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import NewsDetail from './screens/NewsDetail';
import Account from './screens/Account';
import AboutInstructor from './screens/AboutInstructor';
import VideoPlay from './screens/VideoPlay';
import VideoList from './screens/VideoList';
import Verification from './screens/Verification';
import UserDetails from './screens/UserDetails';
import Subscription from './screens/Subscription';
import Login from './screens/Login';
import { UserContext } from '../src/context';
import { TouchableOpacity } from 'react-native-gesture-handler';
const AuthStack = createStackNavigator();
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

        headerBackImage: () => <Left />,
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

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="About" component={AboutInstructor} />
      <HomeStack.Screen name="VideoList" component={VideoList} />
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
      <HomeStack.Screen name="VideoPlay" component={VideoPlay} />
    </HomeStack.Navigator>
  );
};

const NewsStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="News" component={News} />
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
            <View
              style={{
                flexDirection: 'column',
                padding: 10,
                display: 'flex',
                alignItems: 'center',
                bottom: 2,
              }}
            >
              <Image
                source={focused ? HomeIconBlue : HomeIcon}
                style={{ height: 30, width: 30, top: 10 }}
              />
              <Text style={{ top: 5, fontSize: 15, fontFamily: 'RalewayMedium' }}>Home</Text>
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
            <View
              style={{
                flexDirection: 'column',
                padding: 10,
                display: 'flex',
                alignItems: 'center',
                bottom: 2,
              }}
            >
              <Image
                source={focused ? NewsIconBlue : NewsIcon}
                style={{ height: 30, width: 30, top: 10 }}
              />
              <Text style={{ top: 5, fontSize: 15, fontFamily: 'RalewayMedium' }}>News</Text>
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
            <View
              style={{
                flexDirection: 'column',
                padding: 10,
                display: 'flex',
                alignItems: 'center',
                bottom: 2,
              }}
            >
              <Image
                source={focused ? AccountIconBlue : AccountIcon}
                style={{ height: 30, width: 30, top: 10 }}
              />
              <Text style={{ top: 5, fontSize: 15, fontFamily: 'RalewayMedium' }}>Account</Text>
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

const RootStack = createStackNavigator();

export function RootStackScreen({ navigation }) {
  const context = React.useContext(UserContext);
  const { user } = context;
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
    );
  }
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen
        name="Home"
        navigation={navigation}
        component={TabsScreen}
        options={{
          animationEnabled: false,
        }}
      />
    </RootStack.Navigator>
  );
}
export default RootStackScreen;
