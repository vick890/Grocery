import React, {Component} from 'react';
import {Text, View, Image,StatusBar,ScrollView} from 'react-native';
import AppHeader from '../../components/AppHeader';
import {IconAsset, UiColor, TextSize, FontSize, Spacing} from '../../theme';
import {h, w} from '../../utils/Dimensions';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class MyOrders extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar 
          translucent 
        />
        <AppHeader 
          props={this.props} 
          bgColor={UiColor.ORANGE} 
          name='Your Order' 
          showIcon={true}
        />
        <ScrollView style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              style={styles.img}
              source={IconAsset.ic_order}
            />
            <Text style={styles.emptyTxt}>You haven't shop yet</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => this.props.navigation.navigate('Home')}
            style={styles.btn}>
            <Text style={styles.btnText}>Start Shopping</Text>
          </TouchableOpacity> 
        </ScrollView>
      </View>
    );
  }
}
