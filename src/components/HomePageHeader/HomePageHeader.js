import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {UiColor, ImageAsset, IconAsset, Spacing} from '../../theme';
import styles from './styles';

class HomePageHeader extends Component {
  render() {
    return (
      <View >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Image
              style={styles.logoimage}
              resizeMode="contain"
              source={ImageAsset.logo}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Delivery Details</Text>
            </View>
            <Image
              style={styles.shoppingCartContainer}
              resizeMode="center"
              source={IconAsset.ic_shopping_cart}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default HomePageHeader;
