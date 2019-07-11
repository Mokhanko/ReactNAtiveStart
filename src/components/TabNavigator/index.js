import React from 'react';
import { Button, Image } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import AboutScreen from '../../pages/Secondary/About';
import ProfileScreen from '../../pages/Secondary/Profile';
import SettingsScreen from '../../pages/Secondary/Settings';

const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
    },
  }
);

const AboutStack = createStackNavigator(
  {
    About: { screen: AboutScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'About',
    },
  }
);

const ProfileStack = createStackNavigator(
  {
    Profile: { screen: ProfileScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Profile',
    },
  }
);

const Tabs = createBottomTabNavigator(
  {
    Settings: { screen: SettingsStack },
    About: { screen: AboutStack},
    Profile: { screen: ProfileStack}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Settings') {
          return (
            <Image
              source={
                focused
                  ? require('../../img/logo1.png')
                  : require('../../img/logo2.png')
              }
              style={{
                width: 20,
                height: 20,
                borderRadius: 40 / 2,
              }}
            />
          );
        } else if (routeName === 'About') {
          return (
            <Image
              source={
                focused
                  ? require('../../img/logo1.png')
                  : require('../../img/logo2.png')
              }
              style={{
                width: 20,
                height: 20,
                borderRadius: 40 / 2,
              }}
            />
          );
        } else  if (routeName === 'Profile') {
          return (
            <Image
              source={
                focused
                  ? require('../../img/logo1.png')
                  : require('../../img/logo2.png')
              }
              style={{
                width: 20,
                height: 20,
                borderRadius: 40 / 2,
              }}
            />
          );
        }

      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(Tabs);
