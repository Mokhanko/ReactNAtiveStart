import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import DrawerNav from './src/modules/app';
import SignInScreen from './src/modules/auth';
import AuthLoadingScreen from './src/modules/loader';

const AppStack = createStackNavigator({ Home: DrawerNav });

const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
