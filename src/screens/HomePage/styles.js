const {
  UiColor,
  FontFamily,
  TextSize,
  TextColor,
  Spacing,
  FontSize,
} = require('../../theme');
import {StyleSheet} from 'react-native';
import {w, h, width, height} from '../../utils/Dimensions';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UiColor.WHITE,
  },
  scrollContainer: {
    paddingVertical: Spacing.SCALE_20,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal:Spacing.SCALE_10,
    marginBottom:Spacing.SCALE_10
  },
  search: {
    width: '80%',
    borderWidth:1,
    borderColor:UiColor.Light_Black_Border,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:Spacing.SCALE_10,
    borderRadius:Spacing.SCALE_5
  },
  searchInput:{
    flex:1,
    padding:Spacing.SCALE_10,
    height:Spacing.SCALE_40
  },
  filterContainer: {
    height: Spacing.SCALE_40,
    width: Spacing.SCALE_60,
    backgroundColor: UiColor.GRAY_BACKGROUND,
    borderRadius: 5,
    elevation: 2,
    justifyContent: 'center',
  },
  filter: {
    height: Spacing.SCALE_25,
    width: Spacing.SCALE_25,
    tintColor: UiColor.DARK_GRAY,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  image: {
    height: Spacing.SCALE_120,
    width: Spacing.SCALE_380,
    marginHorizontal: Spacing.SCALE_10,
  },
  circleContainer: {
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Spacing.SCALE_10,
  },
  circleImage: {
    height: Spacing.SCALE_80,
    width: Spacing.SCALE_80,
    borderRadius: Spacing.SCALE_80 / 2,
    elevation: 5,
    alignSelf: 'center',
  },
  circleImageTextContainer: {
    flexDirection: 'row',
    width: Spacing.SCALE_100,
  },
  circleImageText: {
    paddingHorizontal: Spacing.SCALE_10,
    paddingVertical: Spacing.SCALE_5,
    color: TextColor.DARK_GRAY,
    fontSize: Spacing.SCALE_12,
    fontFamily: FontFamily.SEMIBOLD,
    textAlign: 'center',
  },
  topPlaceholder: {
    resizeMode: 'contain',
    height: Spacing.SCALE_50,
    tintColor: UiColor.GRAY,
  },
  productContainer: {
    backgroundColor: UiColor.WHITE,
    paddingVertical: Spacing.SCALE_10,
  },
  seeAllContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.SCALE_10,
    justifyContent: 'space-between',
  },
  productsHeadingText: {
    paddingBottom: Spacing.SCALE_10,
    fontSize: FontSize.FONT_SIZE_16,
    fontFamily: FontFamily.BOLD,
    color: TextColor.DARK_GRAY,
  },
  TopProductcardContainer: {
    elevation: 5,
    borderRadius: Spacing.SCALE_10,
    marginHorizontal: Spacing.SCALE_7,
    // marginBottom: Spacing.SCALE_20,
    width: Spacing.SCALE_120,
    // paddingTop: Spacing.SCALE_5,
    backgroundColor: UiColor.WHITE,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.1)',
    // height:Spacing.SCALE_150
  },
  topProductImageDisplay: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.SCALE_5,
  },
  topProductTitleContainer: {
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.SCALE_5,
  },
  TopProductImage: {
    height: Spacing.SCALE_80,
    width: Spacing.SCALE_60,
    // marginTop: 20,
    // marginLeft: 35,
  },
  // bottomLine: {
  //   borderWidth: 0.5,
  //   height: 1,
  //   width: '100%',
  //   marginHorizontal: 10,
  //   marginVertical: 5,
  //   borderColor: UiColor.GRAYLINE,
  // },

  // productContainer: {
  //   backgroundColor: UiColor.GRAY_BACKGROUND,
  //   flex: 2,
  //   paddingVertical:Spacing.SCALE_20
  // },

  seeAllText: {
    fontSize: FontSize.FONT_SIZE_14,
    fontFamily: FontFamily.BOLD,
    color: TextColor.ORANGE,
  },

  topProductPlaceholder: {
    resizeMode: 'contain',
    height: Spacing.SCALE_10,
    tintColor: UiColor.GRAY,
  },
  amount: {
    fontSize: FontSize.FONT_SIZE_12,
    fontFamily: FontFamily.BOLD,
    paddingTop: Spacing.SCALE_2,
    color:UiColor.DARK_GRAY
  },
  weightBtn: {
    fontSize: FontSize.FONT_SIZE_20,
    color: UiColor.ORANGE,
    fontWeight: 'bold',
  },
  productTitle: {
    fontSize: FontSize.FONT_SIZE_10,
    color: TextColor.LIGHT_GRAY,
    fontFamily: FontFamily.LIGHT,
  },
  cartbutton: {
    borderBottomRightRadius: Spacing.SCALE_8,
    borderBottomLeftRadius: Spacing.SCALE_8,
    backgroundColor: UiColor.ORANGE,
    paddingVertical: Spacing.SCALE_8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    color: UiColor.WHITE,
    fontFamily: FontFamily.BOLD,
    fontSize: FontSize.FONT_SIZE_12,
  },
  SpecialOfferscardContainer: {
    backgroundColor: UiColor.WHITE,
    elevation: 3,
    borderRadius:Spacing.SCALE_5,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    flexDirection: 'row',
    width: Spacing.SCALE_370,
    height: Spacing.SCALE_110,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: Spacing.SCALE_10,
    paddingHorizontal: Spacing.SCALE_10,
  },
  Offersimage: {
    height: Spacing.SCALE_70,
    flex: 0.5,
  },
  title: {
    fontSize: FontSize.FONT_SIZE_16,
    fontFamily: FontFamily.BOLD,
    color: TextColor.Dark_Green,
  },
  category: {
    fontSize: FontSize.FONT_SIZE_12,
    fontFamily: FontFamily.BOLD,
    color: TextColor.GRAY,
  },
  subcategories: {
    fontSize: Spacing.SCALE_12,
    fontFamily: FontFamily.REGULAR,
    color: TextColor.GRAY,
  },
  dealOfDayTheImages: {
    borderRadius: 10,
    marginBottom: Spacing.SCALE_30,
    marginTop: Spacing.SCALE_10,
    backgroundColor: UiColor.GRAY,
    width: Spacing.SCALE_370,
  },
  slideDot: {
    width: Spacing.SCALE_8,
    height: Spacing.SCALE_8,
    borderRadius: 4,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
  },
  Vegetableimage: {
    height: Spacing.SCALE_65,
    flex: 0.5,
  },

  specialOfferPlaceholder: {
    tintColor: UiColor.GRAY,
    height: Spacing.SCALE_20,
    width: Spacing.SCALE_70,
    resizeMode: 'cover',
  },
  freshVegContainer: {
    width: Spacing.SCALE_370,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: UiColor.WHITE,
    marginVertical: Spacing.SCALE_5,
    padding: Spacing.SCALE_10,
    borderRadius: Spacing.SCALE_5,
  },
  Vegetabletitle: {
    fontSize: FontSize.FONT_SIZE_16,
    fontFamily: FontFamily.REGULAR,
    color: TextColor.LIGHT_BLACK,
  },
  bracketWeight: {
    fontSize: FontSize.FONT_SIZE_11,
    color: TextColor.GRAY,
  },
});
