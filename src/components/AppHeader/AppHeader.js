import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity,StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {UiColor, ImageAsset, IconAsset} from '../../theme';
import styles from './styles';
export default class AppHeader extends Component {
  render() {
    const {props} = this.props
    return (
        <View style={{...styles.container,backgroundColor:this.props.bgColor}}>
          <StatusBar 
            barStyle={this.props.barType}
            backgroundColor={UiColor.ORANGE}
            translucent
          />
          <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            {
              this.props.showIcon ? 
              <Image
                style={styles.backIcon}
                resizeMode="contain"
                source={IconAsset.ic_left_arrow}
              />
            :null
            }
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{this.props.name}</Text>
            </View>
            <Image
              style={styles.shoppingCartContainer}
              resizeMode="center"
              source={IconAsset.ic_shopping_cart}
            />
          </View>
        </View>
    );
  }
}

AppHeader.defaultType = {
  bgColor:UiColor.ORANGE,
  showIcon:true
}
AppHeader.propTypes = {
  name :PropTypes.string,
  bgColor:PropTypes.string,
  barType:PropTypes.string,
  showIcon:PropTypes.bool
}
