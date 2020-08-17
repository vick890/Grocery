import React, {Component} from 'react';
import {Text, View, StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RootStackScreen from './src/routing/RootStackScreen';
import {UiColor, Spacing} from './src/theme';
import MainStackScreen from './src/routing/MainStackScreen';
import BottomTabStackScreen from './src/routing/BottomTabStackScreen';
import MyAddress from './src/screens/MyAddress';

const StackApp = createStackNavigator();

class App extends Component {
  render() {
    return (
      <>
      <StatusBar backgroundColor={UiColor.WHITE} barStyle='dark-content'/>
      <NavigationContainer>
         <StackApp.Navigator initialRouteName="Home">
         <StackApp.Screen
              name="Login"
              component={RootStackScreen}
              options={{headerShown: false}}
            />
            <StackApp.Screen
              name="Home"
              component={BottomTabStackScreen}
              options={{headerShown: false}}
            />
            <StackApp.Screen
              name="MyAddress"
              component={MyAddress}
              options={{headerShown: false}}
            />
         </StackApp.Navigator>
      </NavigationContainer>
      </>
    );
  }
}
export default App;
console.disableYellowBox = true;