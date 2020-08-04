import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import {ImageAsset, UiColor} from '../../theme';
import styles from './styles';
import {h, w} from '../../utils/Dimensions';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import OTPInputView from '@twotalltotems/react-native-otp-input';

class LoginVeri extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otpcode: null,
    };
  }

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
          <Text style={styles.enterText}>Enter Code </Text>
        </View>
        <View>
          <View style={styles.otpouterbox}>
            <OTPInputView
              style={styles.otptext}
              pinCount={4}
              autoFocusOnLoad
              // code={otpcode} // Take from state
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={code => {
                this.setState({otpcode: code});
              }}
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.subText}>Resend Code</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 30}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
export default LoginVeri;
