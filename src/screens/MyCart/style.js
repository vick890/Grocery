import {StyleSheet} from 'react-native';
import {UiColor, FontFamily, TextSize, Spacing, FontSize} from '../../theme';
import {h, w} from '../../utils/Dimensions';
export default StyleSheet.create({
  container: {},
  mainContainer: {
    flex: 1,
    backgroundColor: UiColor.WHITE,
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
});
