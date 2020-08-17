import React, {useState} from 'react';
import {Text, View, FlatList,ScrollView, TouchableOpacity, TouchableHighlight} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {ImageAsset, IconAsset, UiColor, TextColor, Spacing, FontSize} from '../../theme';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import ImageLoad from 'react-native-image-placeholder';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStyle from '../HomePage/styles'

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

export default Items = (props) => {
  
  const {navigation} = props;
  const [desc, setDesc] = useState('Light and neutral in taste, Fortune Sunlite Refined Sunflower Edible Oil is ideal for everyday consumption')
    const {params} = props.route
    console.log('params checking',params)
    return (
      <View style={styles.container}>
        <AppHeader 
          props={props} 
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
          {/* <View> */}
            <View style={styles.amountContainer}>
              <Text style={styles.amountText}>₹{params?.price}</Text>
              <TouchableHighlight style={styles.AddCartBtn}>
                <Text style={{color:UiColor.ORANGE,fontSize:FontSize.FONT_SIZE_12}}>Add to Cart +</Text>
              </TouchableHighlight>
            </View>
            <Text style={styles.productTitle}>
              {params?.name}
            </Text>
            <View style={styles.productQuantity}>
              <Text style={styles.quantityText}>Unit -1L</Text>
            </View>
            <TouchableOpacity style={styles.descContainer}>
              <Text style={styles.descTitle}>Description</Text>
              <Icon 
                name='ios-chevron-down'
                size={FontSize.FONT_SIZE_25}
               />
            </TouchableOpacity>
            <View>
              <Text style={styles.inputDesc}>{desc}</Text>
            </View>
            <FlatList
              data={Specialofferdata}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => (
                <View style={styles.TopProductcardContainer}>
                <TouchableHighlight
                  underlayColor={UiColor.Light_Black_Border}
                  style={HomeStyle.topProductImageDisplay}
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
                      placeholderStyle={HomeStyle.topProductPlaceholder}
                      loadingStyle={{
                        size: 'small',
                        color: UiColor.ORANGE,
                      }}
                      placeholderSource={ImageAsset?.logo}
                      source={{uri: item?.image}}
                    />
                    <View style={HomeStyle.topProductTitleContainer}>
                      <Text style={HomeStyle.amount}> ₹{item?.amount}</Text>
                      <Text style={HomeStyle.productTitle}> {item?.name}</Text>
                    </View>
                  </>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor={UiColor.Light_Black_Border}
                  style={HomeStyle.cartbutton}
                  onPress={() => {
                    navigation.navigate('MyCart');
                  }}>
                  <Text style={HomeStyle.cartText}>Add to Cart</Text>
                </TouchableHighlight>
              </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          {/* </View> */}
        </ScrollView>
      </View>
    );
  }
// }
// export default Items;
