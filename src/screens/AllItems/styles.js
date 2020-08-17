const {
  UiColor,
  FontFamily,
  TextSize,
  TextColor,
  Spacing,
  FontSize,
} = require('../../theme');
import {StyleSheet} from 'react-native';
import {w, h} from '../../utils/Dimensions';

export default StyleSheet.create({
  SpecialOfferscardContainer: {
    backgroundColor: UiColor.WHITE,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: UiColor.Light_Black_Border,
    width: Spacing.SCALE_110,
    height: Spacing.SCALE_120,
    margin: Spacing.SCALE_10,
  },
  Offersimage: {
    height: Spacing.SCALE_90,
    width: Spacing.SCALE_60,
    borderRadius: 20,
    alignSelf: 'center',
  },
  specialOfferPlaceholder: {
    resizeMode: 'contain',
    height: Spacing.SCALE_30,
    width: Spacing.SCALE_60,
    tintColor: UiColor.GRAY,
  },
  title: {
    fontSize: FontSize.FONT_SIZE_9,
    alignSelf: 'center',
    fontFamily: FontFamily.BOLD,
    color: TextColor.DARK_GRAY,
  },
  listItem: {
    paddingBottom: Spacing.SCALE_10,
    borderWidth: 1,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
