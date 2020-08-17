const {UiColor, FontFamily, TextSize, TextColor, Spacing, FontSize} = require('../../theme');
import {StyleSheet} from 'react-native';
import {w, h} from '../../utils/Dimensions';

export default StyleSheet.create({
  container: {
    backgroundColor: UiColor.ORANGE,
    paddingTop:Spacing.SCALE_5,
    justifyContent:'center',
    marginTop:Spacing.SCALE_23
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
  cartBtn:{
    marginHorizontal: Spacing.SCALE_10,
    marginVertical: Spacing.SCALE_6,
    padding:Spacing.SCALE_5
    },
  shoppingCartContainer: {
    width: Spacing.SCALE_25,
    height: Spacing.SCALE_25,
    tintColor: UiColor.WHITE,
  },
});
