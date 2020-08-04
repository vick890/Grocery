import React, {Component} from 'react';
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
  // {
  //   id: 3,
  //   title: 'Upto 60% off',
  //   category: 'Snacks Biscuit chips',
  //   subcategories: 'chocolate,biscuits,pasty,cookies,candy,pepsi,Namkeens',
  //   amount: 450,
  //   image: ImageAsset.grocery_image,
  //   name: 'Fresh Onion',
  // },
  // {
  //   id: 4,
  //   title: 'Upto 50% off',
  //   category: 'Baby Care Items',
  //   amount: 1100,
  //   subcategories: 'oil,shampoo,skin care,toys,diapers,lotion',
  //   image: ImageAsset.fruitsveg_image,
  //   name: 'Fresh LadyFinger',
  // },
];
class AddedCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardValue: 0,
      enableForAdd: true,
    };
  }
  _addCard = value => {
    if (value === '+') {
      this.setState({cardValue: this.state.cardValue + 1});
    } else if (value === '-') {
      this.setState({cardValue: this.state.cardValue - 1});
    }

    // if (this.state.cardValue === 0) {
    //   this.setState({
    //     enableForAdd: false,
    //   });
    // }
    // if (this.state.cardValue === 0 ) {
    //   this.setState({
    //     enableForAdd: true,
    //     cardValue: this.state.cardValue + 1,
    //   });
    //   console.log('addvalue==', this.state.cardValue);
    // }
  };
  render() {
    const {enableForAdd, cardValue} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: UiColor.WHITE}}>
        <AppHeader props={this.props} />
        <CategoryData
          data={Specialofferdata}
          enableForAdd={enableForAdd}
          cardValue={cardValue}
        />
        <View style={{backgroundColor: UiColor.GRAY, marginVertical: 10}}>
          <View style={styles.productAmountContainer}>
            <Text style={styles.productPriceText}>Products Price</Text>
            <Text style={styles.productPriceText}>₹ 256</Text>
          </View>
          <View style={styles.deliveryContainer}>
            <Text style={styles.productPriceText}>Delivery Charges</Text>
            <Text style={styles.productPriceText}>+ 53</Text>
          </View>
          <View style={styles.totalContainer}>
            <Text style={styles.totalAmountText}>Total</Text>
            <Text style={styles.totalAmountText}>₹ 309</Text>
          </View>
        </View>

        <View style={styles.buttonbox}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              {
                this.props.navigation.navigate('AddedCategories');
              }
            }}>
            <View style={styles.buttonRowContainer}>
              <View style={{width: '40%'}}>
                <Text style={styles.button_text}>Checkout</Text>
              </View>

              <View style={{width: '40%'}}>
                <Text style={[styles.button_text, {alignSelf: 'flex-end'}]}>
                  ₹ 309
                </Text>
              </View>
              <View style={{width: '40%', paddingHorizontal: 5}}>
                <Image
                  resizeMode="center"
                  style={{width: 30, height: 20}}
                  source={IconAsset.ic_checkout_arrow}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default AddedCategories;
