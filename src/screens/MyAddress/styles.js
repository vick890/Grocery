import {StyleSheet} from 'react-native';
import {h, w} from '../../utils/Dimensions';
import {UiColor, TextSize, FontFamily, TextColor, Spacing, FontSize} from '../../theme';
export default StyleSheet.create({
  addressContainer: {
    paddingVertical: Spacing.SCALE_15,
    width: w(95),
    alignSelf: 'center',
    paddingHorizontal: Spacing.SCALE_15,
    marginVertical:Spacing.SCALE_8,
    backgroundColor: UiColor.GRAY_BACKGROUND,
    elevation: 2,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: UiColor.WHITE,
  },
  addressText: {
    fontSize: TextSize.h7,
    fontFamily: FontFamily.REGULAR,
  },
  editText: {
    alignSelf: 'flex-end',
    marginRight: Spacing.SCALE_12,
    color: TextColor.ORANGE,
    fontSize: FontSize.FONT_SIZE_12,
  },
  button: {
    width: Spacing.SCALE_250,
    backgroundColor: UiColor.ORANGE,
    borderRadius: Spacing.SCALE_10,
    alignSelf: 'center',
    height: Spacing.SCALE_45,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Spacing.SCALE_40,
  },
  buttonbox: {
    height: Spacing.SCALE_70,
    justifyContent: 'center',
    backgroundColor:'transparent',
  },
  button_text: {
    alignSelf: 'center',
    color: UiColor.WHITE,
    fontFamily: FontFamily.SEMIBOLD,
  },
formStyle:{
    paddingHorizontal:Spacing.SCALE_10,
    paddingTop:Spacing.SCALE_20,
    marginBottom:Spacing.SCALE_20
  },
  label:{
    marginBottom:Spacing.SCALE_5,
    fontSize:FontSize.FONT_SIZE_14,
    fontFamily:FontFamily.SEMIBOLD
  },
txtInput:{
  borderWidth:1,
  padding:Spacing.SCALE_5,
  borderColor:UiColor.ORANGE,
  borderRadius:Spacing.SCALE_5,
  marginBottom:Spacing.SCALE_10,
  height:Spacing.SCALE_35
},
btn:{
  backgroundColor:UiColor.ORANGE,
  width:Spacing.SCALE_250,
  alignSelf:'center',
  justifyContent:'center',
  alignItems:'center',
  paddingVertical:Spacing.SCALE_10,
  borderRadius:Spacing.SCALE_15,
  position:'absolute',
  bottom:Spacing.SCALE_10,
},
btnTxt:{
  fontSize:FontSize.FONT_SIZE_18,
  color:UiColor.WHITE,
  fontFamily:FontFamily.SEMIBOLD
}
});
