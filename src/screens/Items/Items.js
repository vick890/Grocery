import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, TextInput} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {ImageAsset, IconAsset, UiColor, TextColor, Spacing, FontSize} from '../../theme';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import ImageLoad from 'react-native-image-placeholder';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';

const imagecollection = [
  'https://www.pngitem.com/pimgs/m/241-2413626_grocery-transparent-images-png-grocery-png-png-download.png',
  'https://www.emarketoffers.com/wp-content/uploads/2020/02/Up-to-40-off-on-Personal-Care-and-Grocery-Products.png',
  'https://i.pinimg.com/originals/bb/b2/26/bbb226401ef104c0abc1ab0b9209b370.png',
 'https://i.pinimg.com/originals/33/fe/86/33fe8689149934ea6d63f6f879955b8a.png',
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
    const {params} = this.props.route
    console.log('params checking',params)
    return (
      <View style={styles.container}>
        <AppHeader 
          props={this.props} 
          bgColor={UiColor.ORANGE}  
          barType='light-content'
          showIcon={true}
        />
        <ScrollView 
          contentContainerStyle={{paddingBottom:Spacing.SCALE_50}}
          showsVerticalScrollIndicator={false}
        >
          <View style={{backgroundColor: UiColor.GRAY_BACKGROUND}}>
            <SliderBox
              ImageComponentStyle={{
                borderRadius: 5,
                marginBottom: Spacing.SCALE_30,
                marginTop: Spacing.SCALE_20,
                backgroundColor: UiColor.GRAY,
              }}
              imageLoadingColor={UiColor.ORANGE}
              sliderBoxHeight={Spacing.SCALE_180}
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
              <Text style={styles.amountText}>₹{params?.price}</Text>
              <TouchableHighlight style={styles.AddCartBtn}>
                <Text style={{color:UiColor.ORANGE,fontSize:FontSize.FONT_SIZE_14}}>Add to Cart +</Text>
              </TouchableHighlight>
            </View>
            <Text style={styles.productTitle}>
              {params?.name}
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
              contentContainerStyle={{
                marginVertical: 0,
                backgroundColor: UiColor.GRAY,
                paddingHorizontal:Spacing.SCALE_10,
              }}
              renderItem={({item}) => (
                // <View>
                  <View style={styles.TopProductcardContainer}>
                    {/* <View> */}
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
                      <View style={{flexDirection: 'column',paddingHorizontal:Spacing.SCALE_10,marginTop:Spacing.SCALE_5}}>
                        <Text style={styles.amount}> ₹{item.amount}</Text>
                        {/* <View style={{width: 160}}> */}
                          <Text style={styles.categoryTitle}>
                            {' '}
                            {item.category}
                          </Text>
                        {/* </View> */}
                      </View>
                    {/* </View> */}
                    <TouchableOpacity style={styles.cartbutton}>
                      <Text style={styles.cartText}>Add to Cart</Text>
                    </TouchableOpacity>
                  </View>
                // </View>
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
