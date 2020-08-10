import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../screens/HomePage/HomePage';
import AllItems from '../screens/AllItems';
import ShopByCategories from '../screens/ShopByCategories';
import CategoriesData from '../screens/CategoriesData';
import AddedCategories from '../screens/AddedCatergories';
import Items from '../screens/Items';
import Filter from '../screens/Filter';
import MyAddress from '../screens/MyAddress';
import MyOrders from '../screens/MyOrders';
import NewAddress from '../screens/MyAddress/newAddress';

const MainStack = createStackNavigator();

export default class MainStackScreen extends Component {
  render() {
    return (
      <MainStack.Navigator>
        <MainStack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="AllItems"
          component={AllItems}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="Items"
          component={Items}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="ShopByCategories"
          component={ShopByCategories}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="CategoriesData"
          component={CategoriesData}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="AddedCategories"
          component={AddedCategories}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="Filter"
          component={Filter}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="MyAddress"
          component={MyAddress}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="MyOrders"
          component={MyOrders}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="NewAddress"
          component={NewAddress}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    );
  }
}
