const {UiColor, FontFamily, TextSize, TextColor, Spacing, FontSize} = require('../../theme');
import {StyleSheet} from 'react-native';
import {w, h} from '../../utils/Dimensions';

export default StyleSheet.create({
  container: {
    // height: Spacing.SCALE_40,
    // backgroundColor: UiColor.ORANGE,
    // elevation: 3,
    paddingVertical:Spacing.SCALE_10,
    justifyContent:'center'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backIcon: {
    width:Spacing.SCALE_25,
    height: Spacing.SCALE_30,
    marginHorizontal: Spacing.SCALE_10,
    marginVertical: Spacing.SCALE_7,
  },
  titleContainer: {
    width: Spacing.SCALE_180,
  },
  titleText: {
    marginVertical: Spacing.SCALE_5,
    fontFamily: FontFamily.REGULAR,
    fontSize: FontSize.FONT_SIZE_18,
    color: TextColor.WHITE,
  },
  shoppingCartContainer: {
    width: Spacing.SCALE_25,
    height: Spacing.SCALE_25,
    marginHorizontal: Spacing.SCALE_10,
    marginVertical: Spacing.SCALE_6,
    tintColor: UiColor.WHITE,
  },
});
