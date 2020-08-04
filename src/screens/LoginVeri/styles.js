const {UiColor, FontFamily, TextSize, TextColor} = require('../../theme');
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
    paddingVertical: 5,
    marginLeft: 25,
  },
  inputTextContainer: {
    height: h(7.8),
    backgroundColor: UiColor.GRAY,
    marginHorizontal: 25,
  },
  subText: {
    fontSize: TextSize.h8,
    color: TextColor.GRAY,
    paddingHorizontal: 25,
    alignSelf: 'flex-end',
    marginRight: 22,
  },
  button: {
    height: h(7),
    marginTop: 30,
    backgroundColor: UiColor.ORANGE,
    width: w(40),
    alignSelf: 'center',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: TextSize.h6,
    fontFamily: FontFamily.SEMIBOLD,
    textAlign: 'center',
    paddingTop: 10,
    color: UiColor.WHITE,
  },
  otpouterbox: {
    alignSelf: 'center',
  },
  otptext: {
    width: '50%',
    height: 65,
    marginHorizontal: 70,
  },
  underlineStyleBase: {
    width: 50,
    borderWidth: 0,
    borderBottomWidth: 2,
    marginHorizontal: 10,
    color: 'black',
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
