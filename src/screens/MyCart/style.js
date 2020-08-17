import {StyleSheet} from 'react-native';
import {UiColor, FontFamily, TextSize, Spacing, FontSize, TextColor} from '../../theme';
import {h, w} from '../../utils/Dimensions';
export default StyleSheet.create({
  container: {},
  mainContainer: {
    flex: 1,
    backgroundColor: UiColor.WHITE,
  },
  selectedList:{
    backgroundColor:UiColor.GRAY,
    paddingVertical:Spacing.SCALE_10
  },
  quantityBtn:{
    fontSize:FontSize.FONT_SIZE_18,
    color:TextColor.ORANGE,
    fontFamily:FontFamily.BOLD
  },
  quantityTxt:{
    fontSize:FontSize.FONT_SIZE_14,
    color:TextColor.DARK_GRAY,
    fontFamily:FontFamily.SEMIBOLD
  },
  priceContainer:{
    backgroundColor:UiColor.Light_Black_Border,
    paddingHorizontal:Spacing.SCALE_10,
    paddingVertical:Spacing.SCALE_20
  },
  priceRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:Spacing.SCALE_10,
    marginBottom:Spacing.SCALE_10
  },
  topProductPlaceholder: {
    resizeMode: 'contain',
    height: Spacing.SCALE_10,
    tintColor: UiColor.GRAY,
  },
  otherPriceTxt:{
    fontSize:FontSize.FONT_SIZE_16,
    fontFamily:FontFamily.SEMIBOLD,
    color:TextColor.DARK_GRAY
  },
  totalPriceContainer:{
    borderWidth:1,
    backgroundColor:UiColor.WHITE,
    borderColor:UiColor.Light_Black_Border,
    top:-Spacing.SCALE_10,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'98%',
    alignSelf:'center',
    padding:Spacing.SCALE_10,
    },
    totalPriceTxt:{
      fontSize:FontSize.FONT_SIZE_15,
      color:TextColor.BLACK,
      fontFamily:FontFamily.BOLD
    },
    footerBtnContainer:{
      backgroundColor:UiColor.ORANGE,
      flexDirection:'row',
      paddingHorizontal:Spacing.SCALE_15,
      paddingVertical:Spacing.SCALE_10,
      justifyContent:'center',
      position:'absolute',
      bottom:0,
      right:0,
      left:0
      },
      checkoutTxt:{
        flex:1,
        fontSize:FontSize.FONT_SIZE_20,
        color:'white'
      },
      checkoutPrice:{
        fontSize:FontSize.FONT_SIZE_20,
        color:'white'
      },
  cartContainer:{
    borderWidth:1,
    borderColor:UiColor.Light_Black_Border,
    width:'90%',alignSelf:'center',
    backgroundColor:UiColor.WHITE,
    marginBottom:Spacing.SCALE_10,
    flexDirection:'row',
    padding:Spacing.SCALE_10
  },
  imageContainer: {
    justifyContent:'center',
    alignItems: 'center',
    height:Spacing.SCALE_300,
  },
  img: {
    width: Spacing.SCALE_100,
    height: Spacing.SCALE_100,
    tintColor: 'gray',
  },
  emptyTxt:{
    fontSize: FontSize.FONT_SIZE_18, 
    color: 'gray',
    marginTop:Spacing.SCALE_10
  },
  btn: {
    width: Spacing.SCALE_200,
    backgroundColor: UiColor.ORANGE,
    alignSelf: 'center',
    marginTop: Spacing.SCALE_20,
    borderRadius: 10,
    paddingVertical:Spacing.SCALE_15
  },
  btnText: {
    alignSelf: 'center',
    color: UiColor.WHITE,
    fontFamily: FontFamily.SEMIBOLD,
    fontSize: FontSize.FONT_SIZE_16,
  },
  btnContainer:{
    borderWidth:1,
    width:Spacing.SCALE_110,
    borderColor:UiColor.ORANGE,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:Spacing.SCALE_10
  },
});
