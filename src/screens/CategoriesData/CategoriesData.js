import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {
  ImageAsset,
  IconAsset,
  UiColor,
  TextColor,
  TextSize,
  FontFamily,
} from '../../theme';
import ImageLoad from 'react-native-image-placeholder';
import AppHeader from '../../components/AppHeader';
import CategoryData from '../../components/CategoryData';

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
    name: 'Fresh LadyFinger',
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
];

export default CategoriesData = (props)=> { 

  const {params} = props.route
  const [cardValue,setCardValue]=  useState(0);
  const [enableForAdd,setEnableForAdd]=  useState(true);
 
  _addCard = value => {
    if (value === '+') {
      setCardValue(cardValue+1)
    } else if (value === '-') {
      setCardValue(cardValue-1)
    }
  };
    console.log('props test',props)
    return (
      <View style={{flex: 1, }}>
        <AppHeader 
          props={props} 
          bgColor={UiColor.ORANGE}
          barType='light-content'
          name={params?.name}
          showIcon={true}
        />
        {/* <View style={styles.filterConatiner}> */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.filterConatiner}
            onPress={() => props.navigation.navigate('Filter')}>
            <View style={styles.filter}>
              <Image
                resizeMode="contain"
                style={styles.filterImage}
                source={IconAsset.ic_filter}
              />
              <Text style={styles.filterText}>Filter</Text>
            </View>
          </TouchableOpacity>
        {/* </View> */}
        <CategoryData
          data={Specialofferdata}
          enableForAdd={enableForAdd}
          cardValue={cardValue}
        />
        {/* <View style={styles.buttonbox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              {
                this.props.navigation.navigate('AddedCategories');
              }
            }}>
            <Text style={styles.button_text}>Proceed to Pay</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }
// }
// export default CategoriesData;
