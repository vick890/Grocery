import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import {
  IconAsset,
  UiColor,
  TextSize,
  FontSize,
  Spacing,
  TextColor,
  FontFamily,
  ImageAsset,
} from '../../theme';
import {h, w} from '../../utils/Dimensions';
import styles from './style';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageLoad from 'react-native-image-placeholder';

const CartItem = [
  {
    id: 1,
    name: 'Ashirwad Atta',
    price: '450',
    unit: '1Kg',
    quantity: '2Kg',
    image: 'https://www.aashirvaad.com/images/packet-1.png',
  },
  {
    id: 2,
    name: 'Bournvita',
    price: '380',
    image: 'https://www.rdrindia.com/wp-content/uploads/2018/05/bournvita.png',
    quantity: '2Kg',
    unit: '1Kg',
  },
  // {
  //   id: 3,
  //   name: 'Perfume',
  //   price: '450',
  //   image:'https://n2.sdlcdn.com/imgs/e/m/9/PNG-Gold-Intense-Perfume-100-SDL513587331-1-b6f7a.jpg',
  //   quantity:'2Kg',
  //   unit:'1Kg',
  // },
];
export default props => {
  const {navigation} = props;
  const [listData, setListData] = useState([]);
  useEffect(() => {
    setListData(CartItem);
  }, []);
  return (
    <View style={{flex: 1}}>
      <AppHeader
        props={props}
        bgColor={UiColor.ORANGE}
        name="My Cart"
        showIcon={false}
        titleAlign="center"
        barType="light-content"
      />
      {listData === [] ? (
        <>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="contain"
              style={styles.img}
              source={IconAsset.ic_shopping_cart}
            />
            <Text style={styles.emptyTxt}>No Items</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => props.navigation.navigate('Home')}
            style={styles.btn}>
            <Text style={styles.btnText}>Start Shopping</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={{flex: 1}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{marginBottom: Spacing.SCALE_10}}>
            <FlatList
              data={listData}
              keyExtractor={(item, index) => {
                item?.id;
              }}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.selectedList}
              renderItem={({item, index}) => {
                console.log('item', item);
                return (
                  <View style={styles.cartContainer}>
                    <View
                      style={{
                        flex: 0.3,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <ImageLoad
                        source={{uri: item?.image}}
                        style={{
                          height: Spacing.SCALE_100,
                          width: Spacing.SCALE_60,
                        }}
                        resizeMode="cover"
                        placeholderStyle={styles.topProductPlaceholder}
                        placeholderSource={ImageAsset?.logo}
                      />
                    </View>
                    <View
                      style={{
                        flex: 1,
                        paddingHorizontal: Spacing.SCALE_10,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: FontSize.FONT_SIZE_16,
                          color: TextColor.DARK_GRAY,
                        }}>
                        {item?.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: FontSize.FONT_SIZE_8,
                          color: TextColor.DARK_GRAY,
                          fontFamily: FontFamily.REGULAR,
                        }}>
                        Unit - {item?.unit}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text
                          style={{
                            fontSize: FontSize.FONT_SIZE_20,
                            color: TextColor.DARK_GRAY,
                            fontFamily: FontFamily.BOLD,
                          }}>
                          ₹ {item?.price}
                        </Text>
                        <View style={styles.btnContainer}>
                          <Text style={styles.quantityBtn}>-</Text>
                          <Text style={styles.quantityTxt}>0</Text>
                          <Text style={styles.quantityBtn}>+</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
            {/* price Container */}
            <View style={styles.priceContainer}>
              <View style={styles.priceRow}>
                <Text style={styles.otherPriceTxt}>Products Price </Text>
                <Text style={styles.otherPriceTxt}>₹ 450</Text>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.otherPriceTxt}>Delivery Charges </Text>
                <Text style={styles.otherPriceTxt}> + ₹ 50</Text>
              </View>
            </View>
            <View style={styles.totalPriceContainer}>
              <Text style={styles.totalPriceTxt}>TOTAL </Text>
              <Text style={styles.totalPriceTxt}>₹ 500</Text>
            </View>
            <View style={{height: Spacing.SCALE_50}} />
          </ScrollView>
          {/* footer button */}
          <TouchableHighlight
            underlayColor={UiColor.light_orange}
            style={styles.footerBtnContainer}
            onPress={() => {
              navigation.navigate('Payment');
            }}>
            <>
              <Text style={styles.checkoutTxt}>Checkout </Text>
              <View style={{flex: 0.4, flexDirection: 'row'}}>
                <Text style={styles.checkoutPrice}>₹ 500 </Text>
                <Icon
                  name="ios-arrow-forward"
                  size={FontSize.FONT_SIZE_25}
                  color="white"
                />
              </View>
            </>
          </TouchableHighlight>
        </View>
      )}
    </View>
  );
};
