import {StyleSheet} from 'react-native';
import {UiColor, FontFamily, TextSize} from '../../theme';
import {h, w} from '../../utils/Dimensions';
export default StyleSheet.create({
  container: {},
  mainContainer: {
    flex: 1,
    backgroundColor: UiColor.WHITE,
  },
  imageContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: h(20),
  },
  img: {
    width: w(30),
    height: h(30),
    tintColor: 'gray',
  },
  btn: {
    height: 40,
    width: '60%',
    backgroundColor: UiColor.ORANGE,
    alignSelf: 'center',
    marginTop: h(25),
    borderRadius: 10,
  },
  btnText: {
    alignSelf: 'center',
    color: UiColor.WHITE,
    padding: 7,
    fontFamily: FontFamily.SEMIBOLD,
    fontSize: TextSize.h6,
  },
});
