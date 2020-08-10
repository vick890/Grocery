import {StyleSheet} from 'react-native';
import {UiColor, TextColor, FontFamily, Spacing, FontSize} from '../../theme';

export default StyleSheet.create({
  typeContainer: {
    flex: 0.7,
    width: '50%',
    backgroundColor: 'white',
  },
  typeBox: {
    marginVertical: Spacing.SCALE_6,
    borderBottomWidth: 0.5,
    borderColor:UiColor.DARK_GRAY
  },
  typeText: {
    padding: Spacing.SCALE_10,
  },
  checkboxText: {
    paddingTop: Spacing.SCALE_7,
    letterSpacing: 0.3,
    marginHorizontal: Spacing.SCALE_7,
    color: TextColor.GRAY,
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSize.FONT_SIZE_12,
  },
});
