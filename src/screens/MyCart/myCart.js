import React, {Component} from 'react';
import {Text, View, Image,StatusBar,ScrollView} from 'react-native';
import AppHeader from '../../components/AppHeader';
import {IconAsset, UiColor, TextSize, FontSize, Spacing} from '../../theme';
import {h, w} from '../../utils/Dimensions';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';


export default({navigation}) => {
    console.log('navigation',navigation)
    return (
      <View style={{flex: 1}}>
        <StatusBar 
          translucent 
        />
        <AppHeader 
          props={this.props} 
          bgColor={UiColor.ORANGE} 
          name='Cart' 
          showIcon={false}
          titleAlign='center'
        />
        <ScrollView style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              style={styles.img}
              source={IconAsset.ic_shopping_cart}
            />
            <Text style={styles.emptyTxt}>No Items</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('Home')}
            style={styles.btn}>
            <Text style={styles.btnText}>Start Shopping</Text>
          </TouchableOpacity> 
        </ScrollView>
      </View>
    );
  }

