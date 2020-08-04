import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {UiColor, ImageAsset, IconAsset} from '../../theme';
import styles from './styles';

export default class AppHeader extends Component {
  render() {
    const {props} = this.props;
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image
                style={styles.backIcon}
                resizeMode="contain"
                source={IconAsset.ic_left_arrow}
              />
            </TouchableOpacity>

            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Grocery & Staples</Text>
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
