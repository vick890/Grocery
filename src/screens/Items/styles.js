const {UiColor, FontFamily, TextSize, TextColor, Spacing, FontSize} = require('../../theme');
import {StyleSheet} from 'react-native';
import {w, h, width, height} from '../../utils/Dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UiColor.WHITE,
  },

  TopProductcardContainer: {
    borderRadius: 10,
    width: Spacing.SCALE_130,
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.1)',
    paddingTop:Spacing.SCALE_10,
    marginHorizontal:Spacing.SCALE_5
  },
  TopProductImage: {
    height: Spacing.SCALE_90,
    width: Spacing.SCALE_60,
    alignSelf:'center'
  },
  topProductPlaceholder: {
    resizeMode: 'contain',
    height: Spacing.SCALE_10,
    tintColor: UiColor.GRAY,
  },
  amount: {
    fontSize: FontSize.FONT_SIZE_14,
    fontFamily: FontFamily.SEMIBOLD,
  },
  categoryTitle: {
    fontSize: FontSize.FONT_SIZE_12,
    color: TextColor.GRAY,
    fontFamily: FontFamily.REGULAR,
  },
  cartbutton: {
    height: h(4),
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: UiColor.ORANGE,
    bottom:0,
    left:0,
    right:0,
    position:'absolute'
  },
  cartText: {
    color: UiColor.WHITE,
    textAlign: 'center',
    paddingTop: 3,
    fontFamily: FontFamily.BOLD,
    fontSize: TextSize.h8,
  },
  amountContainer: {
    height: Spacing.SCALE_40,
    marginHorizontal: Spacing.SCALE_10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:Spacing.SCALE_10,
    marginTop:Spacing.SCALE_10
  },
  amountText: {
    fontSize: FontSize.FONT_SIZE_20,
    fontFamily: FontFamily.BOLD,
    color:UiColor.DARK_GRAY
  },
  productTitle: {
    fontSize: FontSize.FONT_SIZE_16,
    color: TextColor.TextGRAY,
    paddingHorizontal: Spacing.SCALE_20,
    fontFamily:FontFamily.LIGHT
  },
  productQuantity: {
    height: Spacing.SCALE_25,
    width: Spacing.SCALE_70,
    marginHorizontal: Spacing.SCALE_20,
    borderRadius: 2,
    marginVertical: Spacing.SCALE_10,
    backgroundColor: UiColor.Light_Black_Border,
    justifyContent:'center',
    alignItems:'center'
  },
  quantityText: {
    fontFamily: FontFamily.REGULAR,
    fontSize:FontSize.FONT_SIZE_12,
    color:UiColor.DARK_GRAY,
    fontFamily:FontFamily.SEMIBOLD
  },
  descContainer: {
    backgroundColor: UiColor.GRAY,
    flexDirection:'row',
    paddingVertical:Spacing.SCALE_10,
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:Spacing.SCALE_10
  },
  descTitle: {
    // paddingHorizontal: Spacing.SCALE_20,
    // paddingVertical: Spacing.SCALE_5,
    fontFamily: FontFamily.SEMIBOLD,
    color: TextColor.GRAY,
    fontSize: TextSize.h4,
  },

  inputDesc: {
    padding: Spacing.SCALE_20,
    fontSize:FontSize.FONT_SIZE_12,
    fontFamily:FontFamily.LIGHT,
    color:TextColor.LIGHT_GRAY
  },
  AddCartBtn:{
    borderWidth:1.2,
    padding:Spacing.SCALE_5,
    borderColor:UiColor.ORANGE,
    width:Spacing.SCALE_100
  }
});
