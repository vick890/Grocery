const {UiColor, FontFamily, TextSize, TextColor} = require('../../theme');
import {StyleSheet} from 'react-native';
import {w, h} from '../../utils/Dimensions';

export default StyleSheet.create({
  button: {
    width: '80%',
    backgroundColor: UiColor.ORANGE,
    borderRadius: 20,
    alignSelf: 'center',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
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
  buttonRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
  },
  productAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
  },
  deliveryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    elevation: 3,
    backgroundColor: UiColor.WHITE,
  },
  productPriceText: {
    margin: 10,
    fontFamily: FontFamily.SEMIBOLD,
    color: TextColor.GRAY,
    fontSize: TextSize.h7,
  },
  totalAmountText: {
    margin: 10,
    fontFamily: FontFamily.SEMIBOLD,
    color: TextColor.BLACK,
    fontSize: TextSize.h7,
  },
});
