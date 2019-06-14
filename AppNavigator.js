import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from './Login';
import Category from './Component/Category';
import AboutMe from './Component/AboutMe';
// import App from './App';
const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    AboutMe: {
      screen: AboutMe,
    },
    Category: {
      screen: Category,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);