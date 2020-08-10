import React, {Component} from 'react';
import {Text, View,StatusBar,Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ImageLoad from 'react-native-image-placeholder';
import {ImageAsset, Spacing, FontSize} from '../../theme';
const {UiColor, FontFamily, TextSize, TextColor} = require('../../theme');
import styles from './styles';
import AppHeader from '../../components/AppHeader';

const Specialofferdata = [
  {
    id: 1,
    title: 'Upto 60% off',
    category: 'Snacks Biscuit chips',
    subcategories: 'chocolate,biscuits,pasty,cookies,candy,pepsi,Namkeens',
    amount: 450,
    image: ImageAsset.fruitsveg_image,
    name: 'Fresh Potato',
  },
  {
    id: 2,
    title: 'Upto 50% off',
    category: 'Baby Care Items',
    subcategories: 'oil,shampoo,skin care,toys,diapers,lotion',
    amount: 380,
    image: ImageAsset.fruitsveg_image,
    name: 'Fresh Tomato',
  },
  {
    id: 3,
    title: 'Upto 60% off',
    category: 'Snacks Biscuit chips',
    subcategories: 'chocolate,biscuits,pasty,cookies,candy,pepsi,Namkeens',
    amount: 450,
    image: ImageAsset.grocery_image,
    name: 'Fresh Onion',
  },
  {
    id: 4,
    title: 'Upto 50% off',
    category: 'Baby Care Items',
    amount: 1100,
    subcategories: 'oil,shampoo,skin care,toys,diapers,lotion',
    image: ImageAsset.fruitsveg_image,
    name: 'Fresh Onion',
  },
  {
    id: 5,
    title: 'Upto 60% off',
    category: 'Snacks Biscuit chips',
    amount: 450,
    subcategories: 'chocolate,biscuits,pasty,cookies,candy,pepsi,Namkeens',
    image: ImageAsset.grocery_image,
    name: 'Fresh Capsicum',
  },
  {
    id: 3,
    title: 'Upto 50% off',
    category: 'Baby Care Items',
    subcategories: 'oil,shampoo,skin care,toys,diapers,lotion',
    image: ImageAsset.fruitsveg_image,
    amount: 450,
    name: 'Fresh Corriander',
  },

  {
    id: 3,
    title: 'Upto 60% off',
    category: 'Snacks Biscuit chips',
    subcategories: 'chocolate,biscuits,pasty,cookies,candy,pepsi,Namkeens',
    amount: 50,
    image: ImageAsset.grocery_image,
    name: 'Fresh Cucumber',
  },
  {
    id: 3,
    title: 'Upto 60% off',
    category: 'Dry fruits & Nuts',
    subcategories: 'chocolate,biscuits,pasty,cookies,candy,pepsi,Namkeens',
    amount: 50,
    image: ImageAsset.fruitsveg_image,
    name: 'Fresh Cucumber',
  },
];

class AllItems extends Component {
  render() {
    const {params} = this.props?.route;
    console.log('checking all item props',params)
    return (
      <View style={{flex: 1}}>
        <AppHeader 
          props={this.props} 
          name={params?.name}
          bgColor={UiColor.ORANGE}
          barType='light-content'
          showIcon={true}
        />
        <FlatList
         data={params?.data}
         horizontal={false}
         numColumns={3}
         contentContainerStyle={{
          paddingVertical: Spacing.SCALE_10,
          paddingHorizontal:Spacing.SCALE_2,
        }}
        renderItem={({item,index}) => (
            <View style={[styles.SpecialOfferscardContainer,
                {
                marginRight:Spacing.SCALE_4,
                marginLeft:Spacing.SCALE_7
              }
            ]}> 
              <ImageLoad
                  style={{height:Spacing.SCALE_80}}
                  resizeMode='contain'
                  placeholderStyle={styles.specialOfferPlaceholder}
                  loadingStyle={{
                    size: 'small',
                    color: UiColor.ORANGE,
                  }}
                  placeholderSource={ImageAsset.logo}
                  source={{uri:item?.image}}
                />  
                <View style={{marginTop:Spacing.SCALE_10,alignItems:'center',justifyContent:'flex-end'}}>
                <Text style={{...styles.title,fontSize:FontSize.FONT_SIZE_10}}>{item.category}</Text>
              </View> 
            </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
export default AllItems;
