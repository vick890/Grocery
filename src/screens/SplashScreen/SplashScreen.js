import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {ImageAsset} from '../../theme';
import styles from './styles';
export default class SplashScreen extends Component {
  componentWillMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 3000);
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode="center"
          style={{height: '50%', width: '50%'}}
          source={ImageAsset.logo}
        />
      </View>
    );
  }
}
