const {UiColor, FontFamily, TextSize, TextColor, Spacing, FontSize} = require('../../theme');
import {StyleSheet} from 'react-native';
import {w, h, width, height} from '../../utils/Dimensions';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UiColor.WHITE,
  },
  searchContainer: {
    marginVertical: Spacing.SCALE_10,
    height: Spacing.SCALE_40,
    width: '75%',
    marginLeft: Spacing.SCALE_10,
  },
  search: {
    backgroundColor: UiColor.GRAY_BACKGROUND,
    // height: Spacing.SCALE_40,
  },
  filter: {
    height: h(6),
    width: w(6),
    tintColor: UiColor.DARK_GRAY,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  filterContainer: {
    marginVertical: 10,
    height: h(6),
    width: w(14),
    backgroundColor: UiColor.GRAY_BACKGROUND,
    borderRadius: 5,
    elevation: 2,
  },
  image: {
    height: 120,
    width: 330,
    alignSelf: 'flex-start',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  circleImage: {
    height: Spacing.SCALE_80,
    width: Spacing.SCALE_80,
    borderRadius: Spacing.SCALE_80 /2,
    elevation: 5,
    alignSelf: 'center',
  },
  bottomLine: {
    borderWidth: 0.5,
    height: 1,
    width: '100%',
    marginHorizontal: 10,
    marginVertical: 5,
    borderColor: UiColor.GRAYLINE,
  },
  circleImageTextContainer: {
    flexDirection: 'row',
    width: Spacing.SCALE_100,
  },
  circleImageText: {
    paddingLeft: Spacing.SCALE_20,
    color: TextColor.GRAY,
    fontSize: Spacing.SCALE_11,
    fontFamily: FontFamily.REGULAR,
  },
  productContainer: {
    backgroundColor: UiColor.GRAY_BACKGROUND,
    flex: 2,
    paddingVertical:Spacing.SCALE_20
  },
  seeAllContainer: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    paddingHorizontal: Spacing.SCALE_10,
    borderColor: UiColor.GRAY,
    justifyContent: 'space-between',
    backgroundColor: UiColor.GRAY,
  },
  productsHeadingText: {
    paddingBottom: Spacing.SCALE_10,
    fontSize: TextSize.h6,
    fontFamily: FontFamily.SEMIBOLD,
    color: TextColor.DARK_GRAY,
  },
  seeAllText: {
    fontSize: FontSize.FONT_SIZE_14,
    fontFamily: FontFamily.SEMIBOLD,
    color: TextColor.ORANGE,
  },
  TopProductcardContainer: {
    elevation: 5,
    borderRadius: 10,
    marginHorizontal: Spacing.SCALE_5,
    marginBottom: Spacing.SCALE_20,
    width: w(33),
    paddingTop: Spacing.SCALE_5,
    backgroundColor:UiColor.WHITE,
    borderWidth:2,
    borderColor:'rgba(0,0,0,0.1)'
  },
  TopProductImage: {
    height: Spacing.SCALE_80,
    width: Spacing.SCALE_60,
    // marginTop: 20,
    // marginLeft: 35,
  },
  topProductPlaceholder: {
    resizeMode: 'contain',
    height: 10,
    tintColor: UiColor.GRAY,
  },
  topPlaceholder: {
    resizeMode: 'contain',
    height: 60,
    tintColor: UiColor.GRAY,
  },

  circlePlaceholder: {
    tintColor: UiColor.GRAY,
    resizeMode: 'contain',
    height: 10,
  },
  amount: {
    fontSize: FontSize.FONT_SIZE_16,
    fontFamily: FontFamily.SEMIBOLD,
    paddingTop: Spacing.SCALE_2,
  },
  weightBtn:{
    fontSize:FontSize.FONT_SIZE_20,
    color: UiColor.ORANGE,
    fontWeight:'bold'
  },
  productTitle: {
    fontSize: FontSize.FONT_SIZE_12,
    color: TextColor.GRAY,
    // paddingHorizontal: Spacing.SCALE_10,
    fontFamily: FontFamily.REGULAR,
  },
  cartbutton: {
    height: h(4),
    marginTop: Spacing.SCALE_10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: UiColor.ORANGE,
  },
  cartText: {
    color: UiColor.WHITE,
    textAlign: 'center',
    paddingTop: Spacing.SCALE_3,
    fontFamily: FontFamily.BOLD,
    fontSize: TextSize.h8,
  },
  specialOfferPlaceholder: {
    tintColor: UiColor.GRAY,
    height:Spacing.SCALE_20,
    width:Spacing.SCALE_70,
    resizeMode:'cover'
  },

  SpecialOfferscardContainer: {
    backgroundColor: UiColor.WHITE,
    flexDirection: 'column',
    elevation: 3,
    borderRadius: 10,
    marginHorizontal: Spacing.SCALE_10,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.1)'
  },
  Offersimage: {
    height:Spacing.SCALE_70,
    // width: Spacing.SCALE_100,
    flex:0.6,
    borderRadius: 40,
    marginHorizontal: Spacing.SCALE_10,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: FontSize.FONT_SIZE_14,
    // paddingLeft: 10,
    fontFamily: FontFamily.BOLD,
    color: TextColor.GREEN,
  },
  category: {
    alignSelf: 'flex-start',
    fontSize: FontSize.FONT_SIZE_12,
    fontFamily: FontFamily.BOLD,
    color: TextColor.GRAY,
  },
  subcategories: {
    alignSelf: 'flex-start',
    // paddingLeft: 10,
    fontSize: Spacing.SCALE_12,
    fontFamily: FontFamily.REGULAR,
    color: TextColor.GRAY,
  },
  VegetablecardContainer: {
    backgroundColor: UiColor.WHITE,
    flexDirection: 'column',
    elevation: 3,
    borderRadius: 5,
    marginHorizontal: Spacing.SCALE_10,
    paddingVertical: Spacing.SCALE_10,
  },
  Vegetableimage: {
    height: Spacing.SCALE_65,
    width: Spacing.SCALE_100,
    flex:0.4,
    marginHorizontal: 10,
  },
  Vegetabletitle: {
    fontSize: FontSize.FONT_SIZE_16,
    fontFamily: FontFamily.REGULAR,
    color: TextColor.LIGHT_BLACK,
  },
  bracketTitle: {
    fontSize: FontSize.FONT_SIZE_11,
    color: TextColor.GRAY,
  },
  slideDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
  },
});
