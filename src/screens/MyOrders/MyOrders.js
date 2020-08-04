import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import AppHeader from '../../components/AppHeader';
import {IconAsset, UiColor, FontFamily, TextSize} from '../../theme';
import {h, w} from '../../utils/Dimensions';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class MyOrders extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppHeader props={this.props} />
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              style={styles.img}
              source={IconAsset.ic_shopping_cart}
            />

            <Text style={{paddingLeft: 10, color: 'gray'}}>No Items</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.9}
            // onPress={() => this.props.navigation.navigate('MyAddress')}
            style={styles.btn}>
            <Text style={styles.btnText}>Start Shopping</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}