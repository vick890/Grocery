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

class CategoriesData extends Component {
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
      <View style={{flex: 1, }}>
        <AppHeader 
          props={this.props} 
          bgColor={UiColor.ORANGE}
          barType='light-content'
          name='Category Data'
          showIcon={true}
        />
        <View style={styles.filterConatiner}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate('Filter')}>
            <View style={styles.filter}>
              <Image
                resizeMode="contain"
                style={styles.filterImage}
                source={IconAsset.ic_filter}
              />
              <Text style={styles.filterText}>Filter</Text>
            </View>
          </TouchableOpacity>
        </View>
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
}
export default CategoriesData;
