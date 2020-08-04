import {StyleSheet} from 'react-native';
import {h, w} from '../../utils/Dimensions';
import {UiColor, TextSize, FontFamily, TextColor} from '../../theme';
export default StyleSheet.create({
  addressContainer: {
    paddingVertical: 15,
    width: w(95),
    alignSelf: 'center',
    paddingHorizontal: 15,
    marginVertical: 8,
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
    marginRight: 10,
    color: TextColor.ORANGE,
    fontSize: 12,
  },
  button: {
    width: '50%',
    backgroundColor: UiColor.ORANGE,
    borderRadius: 20,
    alignSelf: 'center',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonbox: {
    height: 70,
    justifyContent: 'center',
    backgroundColor: UiColor.WHITE,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    elevation: 10,
  },
  button_text: {
    alignSelf: 'center',
    color: UiColor.WHITE,
    fontFamily: FontFamily.SEMIBOLD,
  },
});
