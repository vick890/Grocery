const {UiColor, FontFamily, TextSize, TextColor, Spacing, FontSize} = require('../../theme');
import {StyleSheet} from 'react-native';
import {w, h} from '../../utils/Dimensions';

export default StyleSheet.create({
  bracketContainer: {
    height: 13,
    width: 40,
    marginLeft: 10,
    borderRadius: 4,
    backgroundColor: UiColor.GRAY,
  },
  addCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  VegetablecardContainer: {
    backgroundColor: UiColor.WHITE,
    flexDirection: 'column',
    elevation: 3,
    marginHorizontal:Spacing.SCALE_10,
    paddingVertical: Spacing.SCALE_10,
  },
  Vegetableimage: {
    height: Spacing.SCALE_60,
    width: Spacing.SCALE_100,
    borderRadius: 40,
    marginHorizontal: Spacing.SCALE_10,
  },
  Vegetabletitle: {
    fontSize: TextSize.h7,
    fontFamily: FontFamily.REGULAR,
    color: TextColor.GRAY,
    paddingLeft: Spacing.SCALE_10,
  },
  bracketTitle: {
    fontSize: 8,

    color: TextColor.GRAY,
  },
  specialOfferPlaceholder: {
    resizeMode: 'center',
    height: Spacing.SCALE_10,
    width:Spacing.SCALE_50,
    tintColor: UiColor.GRAY,
  },
  amount: {
    fontSize: FontSize.FONT_SIZE_10,
    fontFamily: FontFamily.SEMIBOLD,
    paddingLeft: Spacing.SCALE_10,
    paddingTop: Spacing.SCALE_5,
  },
  greenAmount: {
    fontSize: FontSize.FONT_SIZE_10,
    fontFamily: FontFamily.SEMIBOLD,
    color: TextColor.GREEN,
    paddingLeft: Spacing.SCALE_10,
    paddingTop: Spacing.SCALE_5,
  },
  offAmount: {
    fontSize: FontSize.FONT_SIZE_10,
    paddingTop: Spacing.SCALE_2,
    color: TextColor.WHITE,
    fontFamily: FontFamily.SEMIBOLD,
    alignSelf: 'center',
  },
  offContainer: {
    width:Spacing.SCALE_40,
    height: Spacing.SCALE_20,
    marginTop: 2.5,
    backgroundColor: UiColor.GREEN,
  },
  cardContainer: {
    width: Spacing.SCALE_80,
    height: Spacing.SCALE_20,
    borderWidth: 0.9,
    borderColor: UiColor.ORANGE,
    marginHorizontal: Spacing.SCALE_5,
    marginTop: Spacing.SCALE_2,
  },
  addCardText: {
    color: UiColor.ORANGE,
    fontSize: FontSize.FONT_SIZE_10,
    paddingTop: Spacing.SCALE_5,
  },
  sign: {
    color: UiColor.ORANGE,
    paddingHorizontal: Spacing.SCALE_7,
  },
});
