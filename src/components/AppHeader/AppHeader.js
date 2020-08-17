import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import {UiColor, ImageAsset, IconAsset, Spacing} from '../../theme';
import styles from './styles';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default (AppHeader = (props) => {
  const {navigation} = props?.props;
  return (
    <>
      <StatusBar
        barStyle={props.barType}
        backgroundColor={UiColor.ORANGE}
        translucent
      />
      <View style={{...styles.container, backgroundColor: props.bgColor}}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {props.showIcon ? (
              <Image
                style={styles.backIcon}
                resizeMode="contain"
                source={IconAsset.ic_left_arrow}
              />
            ) : null}
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={{...styles.titleText, textAlign: props.titleAlign}}>
              {props.name}
            </Text>
          </View>
          <TouchableHighlight 
          underlayColor={UiColor.Light_Black_Border}
          onPress={() => navigation.navigate('MyCart')}
          style={styles.cartBtn}>
            <Image
              style={styles.shoppingCartContainer}
              resizeMode="center"
              source={IconAsset.ic_shopping_cart}
            />
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
});

AppHeader.defaultType = {
  bgColor: UiColor.ORANGE,
  showIcon: true,
};
AppHeader.propTypes = {
  name: PropTypes.string,
  bgColor: PropTypes.string,
  barType: PropTypes.string,
  showIcon: PropTypes.bool,
  titleAlign: PropTypes.string,
};
