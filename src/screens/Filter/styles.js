import {StyleSheet} from 'react-native';
import {UiColor, TextColor, FontFamily} from '../../theme';

export default StyleSheet.create({
  typeContainer: {
    flex: 1,
    width: '50%',
    backgroundColor: 'white',
  },
  typeBox: {
    marginVertical: 6,
    borderBottomWidth: 0.5,
  },
  typeText: {
    padding: 10,
  },
  checkboxText: {
    paddingTop: 7,
    letterSpacing: 0.3,
    marginHorizontal: 7,
    color: TextColor.GRAY,
    fontFamily: FontFamily.REGULAR,
    fontSize: 12,
  },
});
