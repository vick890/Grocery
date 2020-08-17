const {UiColor, FontFamily, TextSize, TextColor,Spacing} = require('../../theme');
import {StyleSheet} from 'react-native';
import {w, h} from '../../utils/Dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UiColor.WHITE,
  },
  loginImage: {
    height: h(25),
  },
  imageContainer: {
    alignSelf: 'center',
    marginVertical: 25,
  },
  loginContainer: {
    marginHorizontal: 20,
    height: h(9.5),
    backgroundColor: UiColor.GRAY,
  },
  loginText: {
    alignSelf: 'flex-start',
    padding: 7,
    color: TextColor.ORANGE,
    fontFamily: FontFamily.BOLD,
    fontSize: TextSize.bigSize,
  },
  enterContainer: {
    marginTop: 25,
  },
  enterText: {
    fontFamily: FontFamily.SEMIBOLD,
    fontSize: TextSize.h5,
    paddingVertical: 10,
    marginLeft: 25,
  },
  inputTextContainer: {
    // height: h(7.8),
    backgroundColor: UiColor.GRAY,
    marginHorizontal: Spacing.SCALE_20,
    paddingHorizontal:Spacing.SCALE_10,
    marginBottom:Spacing.SCALE_20,
    borderRadius:5
  },
  textInputStyle:{
    height: h(7.8),
  },
  subText: {
    fontSize: TextSize.h8,
    color: TextColor.GRAY,
    paddingHorizontal: Spacing.SCALE_10,
    alignSelf: 'center',
  },
  button: {
    height: h(7),
    marginTop: Spacing.SCALE_20,
    backgroundColor: UiColor.ORANGE,
    width: w(40),
    alignSelf: 'center',
    borderRadius: Spacing.SCALE_20,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    fontSize: TextSize.h6,
    fontFamily: FontFamily.SEMIBOLD,
    color: UiColor.WHITE,
  },
});
