import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  StatusBar,
  TextInput
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
import Icon from 'react-native-vector-icons/Ionicons'

const FreshVeg = [
  'https://lh3.googleusercontent.com/proxy/KiAqXK2-zZWyUHnEoSZyn9Oe7avzc1ws-VnsAUsXxW4jvSp7hkQrNWabVoiib23hOCuiF2J59lN4mMZRb69upQumgdepdO3sIZsKJfei4eKgcbYVsbkLYdCjjXY0tWfONeWIn3xulf0',
  'https://www.freepnglogos.com/uploads/vegetables-png/fruit-and-vegetables-basket-png-20.png',
  'https://www.pngkit.com/png/detail/244-2446395_vegetable-png-clipart-min-basket-full-of-vegetables.png',
  'https://www.kindpng.com/picc/m/46-464434_fruit-and-vegetable-png-fruits-and-vegetables-transparent.png',
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
    image:
      'https://n2.sdlcdn.com/imgs/e/m/9/PNG-Gold-Intense-Perfume-100-SDL513587331-1-b6f7a.jpg',
    name: 'Perfume',
  },
  {
    id: 4,
    title: 'Upto 50% off',
    category: 'Perfume',
    amount: 1100,
    subcategories: 'oil,shampoo,skin care,toys,diapers,lotion',
    image:
      'https://n2.sdlcdn.com/imgs/e/m/9/PNG-Gold-Intense-Perfume-100-SDL513587331-1-b6f7a.jpg',
    name: 'Fresh LadyFinger',
  },
  {
    id: 5,
    title: 'Upto 60% off',
    category: 'Perfume',
    amount: 450,
    subcategories: 'chocolate,biscuits,pasty,cookies,candy,pepsi,Namkeens',
    image:
      'https://n2.sdlcdn.com/imgs/e/m/9/PNG-Gold-Intense-Perfume-100-SDL513587331-1-b6f7a.jpg',
    name: 'Fresh Capsicum',
  },
  {
    id: 6,
    title: 'Upto 50% off',
    category: 'Perfume',
    subcategories: 'oil,shampoo,skin care,toys,diapers,lotion',
    image:
      'https://n2.sdlcdn.com/imgs/e/m/9/PNG-Gold-Intense-Perfume-100-SDL513587331-1-b6f7a.jpg',
    amount: 450,
    name: 'Fresh Corriander',
  },
  {
    id: 7,
    title: 'Upto 60% off',
    category: 'Perfume',
    subcategories: 'chocolate,biscuits,pasty,cookies,candy,pepsi,Namkeens',
    amount: 50,
    image:
      'https://n2.sdlcdn.com/imgs/e/m/9/PNG-Gold-Intense-Perfume-100-SDL513587331-1-b6f7a.jpg',
    name: 'Fresh Cucumber',
  },
];
const OfferItems = [
  {
    id: 1,
    title: 'Upto 60% off',
    category: 'Snacks Biscuit Chips',
    subcategories: 'chocolate,biscuits,pasty,cookies,candy,pepsi,Namkeens',
    amount: 450,
    image:
      'https://i.pinimg.com/originals/bb/b2/26/bbb226401ef104c0abc1ab0b9209b370.png',
  },
  {
    id: 2,
    title: 'Upto 50% off',
    category: 'Baby care Items',
    subcategories: 'Oil,skincare,toys,powers ....',
    amount: 450,
    image:
      'https://lh6.googleusercontent.com/proxy/4gVViwdl-bJM45TFgHAtgLbJ05Mu9eqNsGMS86IfTqeJlmy65kdL9tJ5i3wDpvlKNswQEG4CYQSGHhzwLDkCWD1SMp_XuLVC9PE6v92jtuWg0exsrLDW',
  },
  {
    id: 3,
    title: 'Upto 70% off',
    category: 'Pet care Items',
    subcategories: 'Food,Milk,hair,Candy ....',
    amount: 450,
    image:
      'https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/global/2020-homepage-redesign/hero-pack-lockup.png',
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
    image:
      'https://www.pngitem.com/pimgs/m/111-1116166_carrots-png-fresh-fresh-carrot-png-transparent-png.png',
    name: 'Fresh Carrot',
  },
  {
    id: 3,
    title: 'Upto 60% off',
    category: 'Capsicum',
    subcategories: 'Vegetables',
    amount: 450,
    image:
      'https://www.starpng.com/public/uploads/preview/capsicum-pepper-transparent-png-image-101577170848cdjgwzafsg.png',
    name: 'Fresh Capsicum',
  },
  {
    id: 4,
    title: 'Upto 60% off',
    category: 'Lady finger',
    subcategories: 'Vegetables',
    amount: 450,
    image:
      'https://www.pngkey.com/png/detail/774-7749351_indian-lady-finger-vegetable.png',
    name: 'Fresh Lady finger',
  },
  {
    id: 5,
    title: 'Upto 60% off',
    category: 'Tomato',
    subcategories: 'Vegetables',
    amount: 450,
    image:
      'https://www.freepnglogos.com/uploads/tomato-png/tomato-and-kidney-stone-everyday-life-23.png',
    name: 'Fresh Tomato',
  },
  {
    id: 6,
    title: 'Upto 60% off',
    category: 'Cucumber',
    subcategories: 'Vegetables',
    amount: 450,
    image:
      'https://www.freepnglogos.com/uploads/cucumber-png/cucumber-png-image-purepng-transparent-png-26.png',
    name: 'Fresh Cucumber',
  },
];

export default HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HomePageHeader />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.search}>
            <Icon name='ios-search' size={Spacing.SCALE_22}/>
            <TextInput
              style={styles.searchInput}
              placeholder='Search Grocery'
              placeholderTextColor={UiColor.DARK_GRAY}
            />
          </View>
          <TouchableHighlight
            underlayColor={UiColor.Light_Black_Border}
            onPress={() => {
              navigation.navigate('ShopByCategories');
            }}
            style={styles.filterContainer}>
            <Image
              style={styles.filter}
              resizeMode="center"
              source={IconAsset.ic_filter}
            />
          </TouchableHighlight>
        </View>
        {/* top image flatlist  section*/}
        <FlatList
          data={item}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <>
              <ImageLoad
                style={styles.image}
                resizeMode="cover"
                borderRadius={10}
                placeholderStyle={styles.topPlaceholder}
                loadingStyle={{size: 'small', color: UiColor.ORANGE}}
                placeholderSource={ImageAsset.logo}
                source={item.image}
              />
              <View style={styles.bottomLine} />
            </>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        {/* circle image flatlist section */}
        <View style={styles.circleContainer}>
          <FlatList
            data={item}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AllItems', {
                      name: item?.name,
                      data: Vegetables,
                    });
                  }}>
                  <ImageLoad
                    style={styles.circleImage}
                    resizeMode="cover"
                    borderRadius={80}
                    placeholderStyle={styles.topProductPlaceholder}
                    loadingStyle={{color: UiColor.ORANGE}}
                    placeholderSource={ImageAsset.logo}
                    source={item.image}
                  />
                </TouchableOpacity>
                <View style={styles.circleImageTextContainer}>
                  <Text style={styles.circleImageText}>{item?.name}</Text>
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
            paddingBottom: Spacing.SCALE_30,
          }}>
          <View style={styles.seeAllContainer}>
            <Text style={styles.productsHeadingText}> Top Products</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={Specialofferdata}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.TopProductcardContainer}>
                <TouchableHighlight
                  underlayColor={UiColor.Light_Black_Border}
                  style={styles.topProductImageDisplay}
                  onPress={() => {
                    navigation.navigate('Items', {
                      name: item?.name,
                      price: item?.amount,
                    });
                  }}>
                  <>
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
                      source={{uri: item?.image}}
                    />
                    <View style={styles.topProductTitleContainer}>
                      <Text style={styles.amount}> ₹{item?.amount}</Text>
                      <Text style={styles.productTitle}> {item?.name}</Text>
                    </View>
                  </>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor={UiColor.Light_Black_Border}
                  style={styles.cartbutton}
                  onPress={() => {
                    navigation.navigate('MyCart');
                  }}>
                  <Text style={styles.cartText}>Add to Cart</Text>
                </TouchableHighlight>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        {/* Special Offers flatlist section */}
        <View
          style={{
            ...styles.productContainer,
            backgroundColor: UiColor.Light_Black_Border,
          }}>
          <View style={styles.seeAllContainer}>
            <Text style={styles.productsHeadingText}>Special Offers</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={OfferItems}
            horizontal={false}
            style={{
              paddingVertical: Spacing.SCALE_10,
            }}
            renderItem={({item}) => (
              <TouchableHighlight style={styles.SpecialOfferscardContainer}>
                <>
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
                    source={{uri: item.image}}
                  />
                  <View style={{flex: 1, paddingLeft: Spacing.SCALE_10}}>
                    <Text style={styles.title}>{item?.title}</Text>
                    <Text style={styles.category}>{item?.category}</Text>
                    <Text style={styles.subcategories}>
                      {item?.subcategories}{' '}
                    </Text>
                  </View>
                </>
              </TouchableHighlight>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        {/* Deal of the day flatlist section */}
        <View style={styles.productContainer}>
          <View style={styles.seeAllContainer}>
            <Text style={styles.productsHeadingText}> Deal of the day </Text>
          </View>
          <SliderBox
            ImageComponentStyle={styles.dealOfDayTheImages}
            imageLoadingColor={UiColor.ORANGE}
            sliderBoxHeight={Spacing.SCALE_150}
            dotColor={UiColor.ORANGE}
            dotStyle={styles.slideDot}
            paginationBoxVerticalPadding={0}
            autoplay
            circleLoop
            resizeMode="contain"
            inactiveDotColor={TextColor.GRAY}
            images={FreshVeg}
          />
        </View>

        {/* Fresh Vegetable flatlist section */}
        <View
          style={{
            ...styles.productContainer,
            backgroundColor: UiColor.Light_Blue,
            marginBottom: Spacing.SCALE_20,
          }}>
          <View style={styles.seeAllContainer}>
            <Text style={styles.productsHeadingText}>Fresh Vegetables</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={Vegetables}
            horizontal={false}
            renderItem={({item}) => (
              <View
                style={styles.freshVegContainer}>
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
                  source={{uri: item?.image}}
                />
                <View style={{flex: 1, paddingHorizontal: Spacing.SCALE_5}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.Vegetabletitle}>{item.name}</Text>
                    <Text style={styles.bracketWeight}> (1 kg)</Text>
                  </View>
                  <Text style={styles.amount}>₹{item.amount}</Text>
                </View>
                <View style={{flex: 0.5, alignSelf: 'flex-end'}}>
                  <View
                    style={{
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
                      style={styles.weightBtn}>
                      +
                    </Text>
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
};
