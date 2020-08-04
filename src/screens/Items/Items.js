import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {ImageAsset, IconAsset, UiColor, TextColor} from '../../theme';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import ImageLoad from 'react-native-image-placeholder';
import {ScrollView} from 'react-native-gesture-handler';

const imagecollection = [
  ImageAsset.fruitsveg_image,
  ImageAsset.grocery_image,
  ImageAsset.fruitsveg_image,
  ImageAsset.grocery_image,
  ImageAsset.fruitsveg_image,
];
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

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc:
        'Light and neutral in taste, Fortune Sunlite Refined Sunflower Edible Oil is ideal for everyday consumption',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <AppHeader props={this.props} />
        <ScrollView>
          <View style={{backgroundColor: UiColor.GRAY_BACKGROUND}}>
            <SliderBox
              ImageComponentStyle={{
                borderRadius: 5,
                marginBottom: 30,
                marginTop: 20,
                backgroundColor: UiColor.GRAY,
              }}
              imageLoadingColor={UiColor.ORANGE}
              sliderBoxHeight={180}
              dotColor={UiColor.ORANGE}
              dotStyle={styles.slideDot}
              paginationBoxVerticalPadding={0}
              autoplay
              circleLoop
              inactiveDotColor={TextColor.GRAY}
              images={imagecollection}
            />
          </View>
          <View>
            <View style={styles.amountContainer}>
              <Text style={styles.amountText}>₹ 85</Text>
            </View>
            <Text style={styles.productTitle}>
              Fortune Soya health Refined soyabean oil Pouch
            </Text>
            <View style={styles.productQuantity}>
              <Text style={styles.quantityText}>Unit -1L</Text>
            </View>
            <View style={styles.descContainer}>
              <Text style={styles.descTitle}>Description</Text>
            </View>
            <View>
              <TextInput
                multiline
                style={styles.inputDesc}
                value={this.state.desc}
              />
            </View>

            <FlatList
              data={Specialofferdata}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{
                flex: 1,
                marginVertical: 0,
                backgroundColor: UiColor.GRAY,
              }}
              renderItem={({item}) => (
                <View>
                  <View style={styles.TopProductcardContainer}>
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate('Items');
                        }}>
                        <ImageLoad
                          style={styles.TopProductImage}
                          resizeMode="cover"
                          borderRadius={5}
                          placeholderStyle={styles.topProductPlaceholder}
                          loadingStyle={{
                            size: 'small',
                            color: UiColor.ORANGE,
                          }}
                          placeholderSource={ImageAsset.logo}
                          source={item.image}
                        />
                      </TouchableOpacity>

                      <View style={{flexDirection: 'column'}}>
                        <Text style={styles.amount}> ₹ {item.amount}</Text>
                        <View style={{width: 160}}>
                          <Text style={styles.categoryTitle}>
                            {' '}
                            {item.category}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <TouchableOpacity style={styles.cartbutton}>
                      <Text style={styles.cartText}>Add to Cart</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Items;
