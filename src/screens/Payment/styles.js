import {StyleSheet} from 'react-native';
import {Spacing, UiColor, FontSize, TextColor, FontFamily} from '../../theme';

export default StyleSheet.create({
  container: {
    backgroundColor: UiColor.WHITE,
    flex:1
  },
  TopHeader: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.SCALE_10,
    paddingVertical: Spacing.SCALE_15,
    backgroundColor: UiColor.grayishWhite,
    borderWidth: 1,
    borderColor: UiColor.Light_Black_Border,
  },
  TopHeaderTxt: {
    fontSize: FontSize.FONT_SIZE_16,
    color: UiColor.DARK_GRAY,
    fontFamily: FontFamily.SEMIBOLD,
  },
  addressBox: {
    paddingHorizontal: Spacing.SCALE_15,
    paddingVertical: Spacing.SCALE_8,
    borderWidth: 0.2,
    borderColor: UiColor.light_orange,
  },
  addressTxtStyle: {
    fontSize: FontSize.FONT_SIZE_12,
    color: TextColor.TextGRAY,
    fontFamily: FontFamily.SEMIBOLD,
  },
  DeliverySlotBox:{
      paddingHorizontal:Spacing.SCALE_15,
      paddingVertical:Spacing.SCALE_10,
      backgroundColor:UiColor.Light_Black_Border
  },
  slotBox:{
      width:Spacing.SCALE_65,
      height:Spacing.SCALE_60,
      backgroundColor:UiColor.WHITE,
      justifyContent:'center',
      alignItems:'center',
      marginRight:Spacing.SCALE_10,
      borderWidth:1,
      borderColor:UiColor.Light_Black_Border
    },
    dayTxt:{
        fontSize:FontSize.FONT_SIZE_14,
        fontFamily:FontFamily.BOLD
    },
    dateTxt:{
        fontSize:FontSize.FONT_SIZE_12,
        fontFamily:FontFamily.SEMIBOLD
    },
    checkboxText:{
        fontSize:FontSize.FONT_SIZE_12,
        color:TextColor.TextGRAY
    },
    footerBoxContainer:{
        flexDirection:'row',
        marginVertical:Spacing.SCALE_10
    },
    footerRow:{
        flex:1,
        flexDirection:'row',
        paddingLeft:Spacing.SCALE_10
    },
    footerIcon:{
        height:Spacing.SCALE_30,
        width:Spacing.SCALE_30,
        marginRight:Spacing.SCALE_10
    },
    FooterTxt:{
        fontSize:FontSize.FONT_SIZE_16,
        color:TextColor.DARK_GRAY
    }
});
