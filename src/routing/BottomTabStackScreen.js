import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {UiColor, IconAsset, TextColor,Spacing,FontSize} from '../theme';
import MainStackScreen from './MainStackScreen';
import MyOrders from '../screens/MyOrders';
import Supports from '../screens/Supports';
import Accounts from '../screens/Accounts';
import MyAddress from '../screens/MyAddress';

const Tab = createMaterialBottomTabNavigator();

export default class BottomTabStackScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={UiColor.ORANGE}
        inactiveColor={UiColor.GRAY}
        // shifting={false}
        barStyle={{backgroundColor: UiColor.WHITE}}>
        <Tab.Screen
          name="Home"
          component={MainStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: UiColor.WHITE,
            tabBarIcon: ({focused}) => {
              return focused ? (
                <Image
                  resizeMode="contain"
                  source={IconAsset.ic_home}
                  style={styles.activeImage}
                />
              ) : (
                <Image
                  resizeMode="contain"
                  source={IconAsset.ic_home}
                  style={styles.inActiveImage}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="MyOrders"
          component={MyOrders}
          options={{
            tabBarLabel: 'MyOrder',
            tabBarColor: UiColor.WHITE,
            tabBarIcon: ({focused}) => {
              return focused ? (
                <Image
                  resizeMode="contain"
                  source={IconAsset.ic_order}
                  style={styles.activeImage}
                />
              ) : (
                <Image
                  resizeMode="contain"
                  source={IconAsset.ic_order}
                  style={styles.inActiveImage}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Support"
          component={Supports}
          options={{
            tabBarLabel: 'Supportt',
            tabBarColor: UiColor.WHITE,
            tabBarIcon: ({focused}) => {
              return focused ? (
                <Image
                  resizeMode='contain'
                  source={IconAsset.ic_support}
                  style={styles.activeImage}
                />
              ) : (
                <Image
                  resizeMode="contain"
                  source={IconAsset.ic_support}
                  style={styles.inActiveImage}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Accounts"
          //component={Accounts}
          // name="MyAddress"
          component={Accounts}
          options={{
            tabBarLabel: 'Account',
            tabBarColor: UiColor.WHITE,
            tabBarIcon: ({focused}) => {
              return focused ? (
                <Image
                  resizeMode="contain"
                  source={IconAsset.ic_accounts}
                  style={styles.activeImage}
                />
              ) : (
                <Image
                  resizeMode="contain"
                  source={IconAsset.ic_accounts}
                  style={styles.inActiveImage}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  activeImage: {
    width: 30,
    height: 25,
    // marginHorizontal: 8,
    // marginBottom: 2,
    tintColor: UiColor.ORANGE,
  },
  inActiveImage: {
    width: 30,
    height: 25,
    marginHorizontal: 8,
    marginBottom: 2,
    tintColor: UiColor.GRAYLINE,
  },
});
