import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import {ImageAsset, UiColor} from '../../theme';
import styles from './styles';
import {h, w} from '../../utils/Dimensions';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

class Login extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="center"
            style={styles.loginImage}
            source={ImageAsset.login_image}
          />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={styles.enterContainer}>
          <Text style={styles.enterText}> Enter Mobile Number </Text>
        </View>
        <View style={styles.inputTextContainer}>
          <TextInput
            keyboardType="number-pad"
            style={styles.textInputStyle}
            maxLength={10}
            placeholder="Enter your contact number"
          />
        </View>
        <Text style={styles.subText}>
          We will send a code to your mobile number to verify your number
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
          style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
export default Login;
