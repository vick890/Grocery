import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import styles from './styles';
import {ImageAsset, IconAsset, UiColor, TextColor} from '../../theme';
import ImageLoad from 'react-native-image-placeholder';
import {SliderBox} from 'react-native-image-slider-box';
import {w} from '../../utils/Dimensions';
import HomePageHeader from '../../components/HomePageHeader';
const imagecollection = [
  ImageAsset.fruitsveg_image,
  ImageAsset.grocery_image,
  ImageAsset.fruitsveg_image,
  ImageAsset.grocery_image,
  ImageAsset.fruitsveg_image,
];

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

class HomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
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
        <ScrollView>
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
          <View style={{marginVertical: 10}}>
            <FlatList
              data={item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('AllItems');
                    }}>
                    <ImageLoad
                      style={styles.circleImage}
                      resizeMode="cover"
                      borderRadius={80}
                      placeholderStyle={styles.circlePlaceholder}
                      loadingStyle={{size: 'small', color: UiColor.ORANGE}}
                      placeholderSource={ImageAsset.logo}
                      // source={{uri: item.image}}>

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
          <View style={styles.productContainer}>
            <View style={styles.seeAllContainer}>
              <Text style={[styles.productsHeadingText, {marginTop: 1}]}>
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
                style={{
                  flex: 1,
                  paddingTop: 10,
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
                            <Text style={styles.productTitle}>
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
                paddingTop: 10,
                backgroundColor: UiColor.GRAY,
              }}
              renderItem={({item}) => (
                <View style={{marginVertical: 5}}>
                  <View style={styles.SpecialOfferscardContainer}>
                    <View style={{flexDirection: 'row'}}>
                      <ImageLoad
                        style={styles.Offersimage}
                        resizeMode="center"
                        borderRadius={10}
                        placeholderStyle={styles.specialOfferPlaceholder}
                        loadingStyle={{
                          size: 'small',
                          color: UiColor.ORANGE,
                        }}
                        placeholderSource={ImageAsset.logo}
                        source={item.image}
                      />

                      <View style={{flexDirection: 'column'}}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.category}> {item.category}</Text>
                        <View style={{flexDirection: 'row', width: 220}}>
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
              <Text style={[styles.productsHeadingText, {marginTop: 1}]}>
                Deal of the day
              </Text>
            </View>
            <View style={{backgroundColor: UiColor.GRAY_BACKGROUND}}>
              <SliderBox
                ImageComponentStyle={{
                  borderRadius: 10,
                  marginBottom: 30,
                  marginTop: 20,
                  backgroundColor: UiColor.GRAY,
                }}
                imageLoadingColor={UiColor.ORANGE}
                sliderBoxHeight={120}
                dotColor={UiColor.ORANGE}
                dotStyle={styles.slideDot}
                paginationBoxVerticalPadding={0}
                autoplay
                circleLoop
                inactiveDotColor={TextColor.GRAY}
                images={imagecollection}
              />
            </View>
          </View>

          {/* Fresh Vegetable flatlist section */}
          <View style={[styles.productContainer]}>
            <View style={[styles.seeAllContainer, {marginTop: 1}]}>
              <Text style={styles.productsHeadingText}>Fresh Vegetable</Text>
              <TouchableOpacity>
                <Text style={styles.seeAllText}>See all</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={Specialofferdata}
              horizontal={false}
              style={{
                flex: 1,
                paddingTop: 10,
                backgroundColor: UiColor.GRAY,
              }}
              renderItem={({item}) => (
                <View style={{marginVertical: 5}}>
                  <View style={styles.VegetablecardContainer}>
                    <View style={{flexDirection: 'row'}}>
                      <ImageLoad
                        style={styles.Vegetableimage}
                        resizeMode="center"
                        borderRadius={10}
                        placeholderStyle={styles.specialOfferPlaceholder}
                        loadingStyle={{
                          size: 'small',
                          color: UiColor.ORANGE,
                        }}
                        placeholderSource={ImageAsset.logo}
                        source={item.image}
                      />

                      <View style={{flexDirection: 'column'}}>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.Vegetabletitle}>{item.name}</Text>
                          <Text style={styles.bracketTitle}> (1 kg)</Text>
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                          }}>
                          <View style={{width: 130}}>
                            <Text style={styles.amount}>₹ {item.amount}</Text>
                          </View>
                          <View>
                            <View
                              style={{
                                width: 80,
                                height: 20,
                                borderWidth: 0.9,
                                borderColor: UiColor.ORANGE,
                                marginRight: 10,
                                marginTop: 6,
                              }}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-around',
                                }}>
                                <TouchableOpacity>
                                  <Text style={{color: UiColor.ORANGE}}>-</Text>
                                </TouchableOpacity>
                                <Text style={{color: UiColor.ORANGE}}>0</Text>
                                <TouchableOpacity>
                                  <Text style={{color: UiColor.ORANGE}}>+</Text>
                                </TouchableOpacity>
                              </View>
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
