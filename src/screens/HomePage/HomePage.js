import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import styles from './styles';
import {
  ImageAsset,
  IconAsset,
  UiColor,
  TextColor,
  Spacing,
  FontSize,
} from '../../theme';
import ImageLoad from 'react-native-image-placeholder';
import {SliderBox} from 'react-native-image-slider-box';
import {w} from '../../utils/Dimensions';
import HomePageHeader from '../../components/HomePageHeader';

const FreshVeg = [
  'https://lh3.googleusercontent.com/proxy/KiAqXK2-zZWyUHnEoSZyn9Oe7avzc1ws-VnsAUsXxW4jvSp7hkQrNWabVoiib23hOCuiF2J59lN4mMZRb69upQumgdepdO3sIZsKJfei4eKgcbYVsbkLYdCjjXY0tWfONeWIn3xulf0',
  'https://www.freepnglogos.com/uploads/vegetables-png/fruit-and-vegetables-basket-png-20.png',
  'https://www.pngkit.com/png/detail/244-2446395_vegetable-png-clipart-min-basket-full-of-vegetables.png',
  'https://www.kindpng.com/picc/m/46-464434_fruit-and-vegetable-png-fruits-and-vegetables-transparent.png'
]

const item = [
  {
    id: 1,
    image: ImageAsset.fruitsveg_image,
    name: 'Grocery & staples',
  },
  {
    id: 1,
    image: ImageAsset.grocery_image,
    name: 'Vegetables & fruits',
  },
  {
    id: 1,
    image: ImageAsset.fruitsveg_image,
    name: 'HouseHold Items',
  },
  {
    id: 1,
    image: ImageAsset.grocery_image,
    name: 'Grocery & staples',
  },
  {
    id: 1,
    image: ImageAsset.fruitsveg_image,
    name: 'Grocery & staples',
  },
];
const Specialofferdata = [
  {
    id: 1,
    title: 'Upto 60% off',
    category: 'Ashirwad Atta',
    subcategories: 'chocolate,biscuits,pasty,cookies,candy,pepsi,Namkeens',
    amount: 450,
    image: 'https://www.aashirvaad.com/images/packet-1.png',
    name: 'Ashirwad Atta',
  },
  {
    id: 2,
    title: 'Upto 50% off',
    category: 'Bournvita',
    subcategories: 'oil,shampoo,skin care,toys,diapers,lotion',
    amount: 380,
    image: 'https://www.rdrindia.com/wp-content/uploads/2018/05/bournvita.png',
    name: 'Bournvita',
  },
  {
    id: 3,
    title: 'Upto 60% off',
    category: 'Perfume',
    subcategories: 'chocolate,biscuits,pasty,cookies,candy,pepsi,Namkeens',
    amount: 450,
    image: 'https://n2.sdlcdn.com/imgs/e/m/9/PNG-Gold-Intense-Perfume-100-SDL513587331-1-b6f7a.jpg',
    name: 'Perfume',
  },
  {
    id: 4,
    title: 'Upto 50% off',
    category: 'Perfume',
    amount: 1100,
    subcategories: 'oil,shampoo,skin care,toys,diapers,lotion',
    image: 'https://n2.sdlcdn.com/imgs/e/m/9/PNG-Gold-Intense-Perfume-100-SDL513587331-1-b6f7a.jpg',
    name: 'Fresh LadyFinger',
  },
  {
    id: 5,
    title: 'Upto 60% off',
    category: 'Perfume',
    amount: 450,
    subcategories: 'chocolate,biscuits,pasty,cookies,candy,pepsi,Namkeens',
    image: 'https://n2.sdlcdn.com/imgs/e/m/9/PNG-Gold-Intense-Perfume-100-SDL513587331-1-b6f7a.jpg',
    name: 'Fresh Capsicum',
  },
  {
    id: 3,
    title: 'Upto 50% off',
    category: 'Perfume',
    subcategories: 'oil,shampoo,skin care,toys,diapers,lotion',
    image: 'https://n2.sdlcdn.com/imgs/e/m/9/PNG-Gold-Intense-Perfume-100-SDL513587331-1-b6f7a.jpg',
    amount: 450,
    name: 'Fresh Corriander',
  },

  {
    id: 3,
    title: 'Upto 60% off',
    category: 'Perfume',
    subcategories: 'chocolate,biscuits,pasty,cookies,candy,pepsi,Namkeens',
    amount: 50,
    image: 'https://n2.sdlcdn.com/imgs/e/m/9/PNG-Gold-Intense-Perfume-100-SDL513587331-1-b6f7a.jpg',
    name: 'Fresh Cucumber',
  },
];
const Vegetables = [
  {
    id: 1,
    title: 'Upto 60% off',
    category: 'Potato',
    subcategories: 'Vegetables',
    amount: 450,
    image: 'https://pngimg.com/uploads/potato/potato_PNG7081.png',
    name: 'Fresh Potato',
  },
  {
    id: 2,
    title: 'Upto 60% off',
    category: 'Carrot',
    subcategories: 'Vegetables',
    amount: 450,
    image: 'https://www.pngitem.com/pimgs/m/111-1116166_carrots-png-fresh-fresh-carrot-png-transparent-png.png',
    name: 'Fresh Carrot',
  },
  {
    id: 3,
    title: 'Upto 60% off',
    category: 'Capsicum',
    subcategories: 'Vegetables',
    amount: 450,
    image: 'https://www.starpng.com/public/uploads/preview/capsicum-pepper-transparent-png-image-101577170848cdjgwzafsg.png',
    name: 'Fresh Capsicum',
  },
  {
    id: 4,
    title: 'Upto 60% off',
    category: 'Lady finger',
    subcategories: 'Vegetables',
    amount: 450,
    image: 'https://www.pngkey.com/png/detail/774-7749351_indian-lady-finger-vegetable.png',
    name: 'Fresh Lady finger',
  },
  {
    id: 5,
    title: 'Upto 60% off',
    category: 'Tomato',
    subcategories: 'Vegetables',
    amount: 450,
    image: 'https://www.freepnglogos.com/uploads/tomato-png/tomato-and-kidney-stone-everyday-life-23.png',
    name: 'Fresh Tomato',
  },
  {
    id: 6,
    title: 'Upto 60% off',
    category: 'Cucumber',
    subcategories: 'Vegetables',
    amount: 450,
    image: 'https://www.freepnglogos.com/uploads/cucumber-png/cucumber-png-image-purepng-transparent-png-26.png',
    name: 'Fresh Cucumber',
  },
]

class HomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          translucent 
          backgroundColor={UiColor.ORANGE} 
          barStyle='light-content'
        />
        <HomePageHeader />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={styles.searchContainer}>
            <Searchbar
              style={styles.search}
              placeholder="Search Grocery"
              //   onChangeText={onChangeSearch}
              //   value={searchQuery}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('ShopByCategories');
            }}
            style={styles.filterContainer}>
            <Image
              style={styles.filter}
              resizeMode="center"
              source={IconAsset.ic_filter}
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          {/* top image flatlist  section*/}
          <View>
            <FlatList
              data={item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View>
                  <ImageLoad
                    style={styles.image}
                    resizeMode="cover"
                    borderRadius={20}
                    placeholderStyle={styles.topPlaceholder}
                    loadingStyle={{size: 'small', color: UiColor.ORANGE}}
                    placeholderSource={ImageAsset.logo}
                    source={item.image}
                  />
                  <View style={styles.bottomLine} />
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          {/* circle image flatlist section */}
          <View style={{marginVertical: Spacing.SCALE_10}}>
            <FlatList
              data={item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('AllItems',{name:item?.name,data:Vegetables});
                    }}>
                    <ImageLoad
                      style={styles.circleImage}
                      resizeMode="cover"
                      borderRadius={80}
                      placeholderStyle={styles.circlePlaceholder}
                      loadingStyle={{size: 'small', color: UiColor.ORANGE}}
                      placeholderSource={ImageAsset.logo}
                      source={item.image}
                    />
                  </TouchableOpacity>
                  <View style={styles.circleImageTextContainer}>
                    <Text style={styles.circleImageText}>{item.name}</Text>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          {/* Top Product flatlist section */}
          <View
            style={{
              ...styles.productContainer,
              paddingVertical: Spacing.SCALE_15,
            }}>
            <View style={styles.seeAllContainer}>
              <Text
                style={[
                  styles.productsHeadingText,
                  {marginTop: Spacing.SCALE_1},
                ]}>
                Top Products
              </Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
              <FlatList
                data={Specialofferdata}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingTop: Spacing.SCALE_10,
                  backgroundColor: UiColor.GRAY,
                }}
                renderItem={({item}) => (
                  <View>
                    <View style={styles.TopProductcardContainer}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.navigate('Items',{name:item?.name,price:item?.amount});
                        }}
                        style={{alignItems: 'center'}}>
                        <ImageLoad
                          style={styles.TopProductImage}
                          resizeMode="cover"
                          borderRadius={5}
                          placeholderStyle={styles.topProductPlaceholder}
                          loadingStyle={{
                            size: 'small',
                            color: UiColor.ORANGE,
                          }}
                          placeholderSource={ImageAsset?.logo}
                          source={{uri:item.image}}
                        />
                      </TouchableOpacity>
                      <View
                        style={{
                          flexDirection: 'column',
                          paddingLeft: Spacing.SCALE_10,
                        }}>
                        <Text style={styles.amount}> ₹{item.amount}</Text>
                        <Text style={styles.productTitle}> {item.name}</Text>
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
          </View>
          {/* Special Offers flatlist section */}
          <View style={[styles.productContainer]}>
            <View style={[styles.seeAllContainer, {marginTop: 1}]}>
              <Text style={styles.productsHeadingText}>Special Offers</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={Specialofferdata}
              horizontal={false}
              style={{
                flex: 1,
                backgroundColor: UiColor.GRAY,
              }}
              renderItem={({item}) => (
                <View style={{}}>
                  <View style={styles.SpecialOfferscardContainer}>
                    <View style={{flexDirection: 'row',paddingVertical:Spacing.SCALE_10,alignItems:'center'}}>
                      <ImageLoad
                        style={styles.Offersimage}
                        resizeMode="contain"
                        borderRadius={10}
                        placeholderStyle={styles.specialOfferPlaceholder}
                        loadingStyle={{
                          size: 'small',
                          color: UiColor.ORANGE,
                        }}
                        placeholderSource={ImageAsset.logo}
                        source={{uri:item.image}}
                      />
                      <View style={{flexDirection: 'column'}}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.category}>{item.category}</Text>
                        <View style={{flexDirection: 'row', width: Spacing.SCALE_250}}>
                          <Text style={styles.subcategories}>
                            {item.subcategories}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          {/* Deal of the day flatlist section */}
          <View style={styles.productContainer}>
            <View style={styles.seeAllContainer}>
              <Text
                style={[
                  styles.productsHeadingText,
                  {marginTop: Spacing.SCALE_1},
                ]}>
                Deal of the day
              </Text>
            </View>
            <View style={{backgroundColor:'transparent'}}>
              <SliderBox
                ImageComponentStyle={{
                  borderRadius: 10,
                  marginBottom: Spacing.SCALE_30,
                  marginTop: Spacing.SCALE_10,
                  backgroundColor: UiColor.GRAY,
                  width: Spacing.SCALE_370,
                }}
                imageLoadingColor={UiColor.ORANGE}
                sliderBoxHeight={Spacing.SCALE_150}
                dotColor={UiColor.ORANGE}
                dotStyle={styles.slideDot}
                paginationBoxVerticalPadding={0}
                autoplay
                circleLoop
                resizeMode='contain'
                inactiveDotColor={TextColor.GRAY}
                images={FreshVeg}
              />
            </View>
          </View>
          {/* Fresh Vegetable flatlist section */}
          <View
            style={{
              backgroundColor: UiColor.Light_Blue,
              flex: 1,
              paddingVertical: Spacing.SCALE_20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: Spacing.SCALE_10,
              }}>
              <Text style={styles.productsHeadingText}>Fresh Vegetable</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={Vegetables}
              horizontal={false}
              style={{
                flex: 1,
                paddingTop: 10,
              }}
              renderItem={({item}) => (
                <View style={{marginVertical: Spacing.SCALE_5}}>
                  <View style={styles.VegetablecardContainer}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                      <ImageLoad
                        style={styles.Vegetableimage}
                        resizeMode="contain"
                        borderRadius={10}
                        placeholderStyle={styles.specialOfferPlaceholder}
                        loadingStyle={{
                          size: 'small',
                          color: UiColor.ORANGE,
                        }}
                        placeholderSource={ImageAsset.logo}
                        source={{uri:item.image}}
                      />
                      <View style={{flexDirection: 'column', flex: 1}}>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.Vegetabletitle}>{item.name}</Text>
                          <Text style={styles.bracketTitle}> (1 kg)</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            flex:1
                          }}>
                          <View style={{flex: 1}}>
                            <Text style={styles.amount}>₹{item.amount}</Text>
                          </View>
                          <View style={{flex: 0.8,alignSelf:'flex-end'}}>
                            <View
                              style={{
                                width: Spacing.SCALE_100,
                                height: Spacing.SCALE_25,
                                borderWidth: 0.9,
                                borderColor: UiColor.ORANGE,
                                justifyContent: 'center',
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                              }}>
                              <Text style={styles.weightBtn}>-</Text>
                              <Text
                                style={{
                                  fontSize: FontSize.FONT_SIZE_16,
                                  color: UiColor.ORANGE,
                                }}>
                                0
                              </Text>
                              <Text
                                style={{
                                  fontSize: FontSize.FONT_SIZE_20,
                                  color: UiColor.ORANGE,
                                }}>
                                +
                              </Text>
                              {/* <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-around',
                                }}> */}
                              {/* <TouchableOpacity> */}
                              {/* <Text style={{...styles.weightBtn,color: UiColor.ORANGE}}>-</Text> */}
                              {/* <Text style={{borderWidth:1,fontSize:FontSize.FONT_SIZE_30,textAlign:'center' }}>-</Text> */}
                              {/* </TouchableOpacity> */}
                              {/* <Text style={{color: UiColor.ORANGE}}>0</Text> */}
                              {/* <TouchableOpacity> */}
                              {/* <Text style={{...styles.weightBtn,color: UiColor.ORANGE}}>+</Text> */}
                              {/* </TouchableOpacity> */}
                              {/* </View> */}
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
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
export default HomePage;
