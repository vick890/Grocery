import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import LoginVeri from '../screens/LoginVeri/LoginVeri';
import SplashScreen from '../screens/SplashScreen';
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none" initialRouteName="SplashScreen">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="Login" component={Login} />
    <RootStack.Screen name="LoginVeri" component={LoginVeri} />
  </RootStack.Navigator>
);
export default RootStackScreen;
