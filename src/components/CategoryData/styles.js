const {UiColor, FontFamily, TextSize, TextColor} = require('../../theme');
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
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  Vegetableimage: {
    height: 60,
    width: 100,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  Vegetabletitle: {
    fontSize: TextSize.h7,
    fontFamily: FontFamily.REGULAR,
    color: TextColor.GRAY,

    paddingLeft: 10,
  },
  bracketTitle: {
    fontSize: 8,

    color: TextColor.GRAY,
  },
  specialOfferPlaceholder: {
    resizeMode: 'center',
    height: 8,
    tintColor: UiColor.GRAY,
  },
  amount: {
    fontSize: 10,
    fontFamily: FontFamily.SEMIBOLD,
    paddingLeft: 10,
    paddingTop: 5,
  },
  greenAmount: {
    fontSize: 10,
    fontFamily: FontFamily.SEMIBOLD,
    color: TextColor.GREEN,
    paddingLeft: 10,
    paddingTop: 5,
  },
  offAmount: {
    fontSize: 10,
    paddingTop: 2,
    color: TextColor.WHITE,
    fontFamily: FontFamily.SEMIBOLD,
    alignSelf: 'center',
  },
  offContainer: {
    width: 40,
    height: 18,
    marginTop: 2.5,
    backgroundColor: UiColor.GREEN,
  },
  cardContainer: {
    width: 80,
    height: 20,
    borderWidth: 0.9,
    borderColor: UiColor.ORANGE,
    marginHorizontal: 5,
    marginTop: 2,
  },
  addCardText: {
    color: UiColor.ORANGE,
    fontSize: 10,
    paddingTop: 2,
  },
  sign: {
    color: UiColor.ORANGE,
    paddingHorizontal: 7,
  },
});
