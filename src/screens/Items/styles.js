const {UiColor, FontFamily, TextSize, TextColor} = require('../../theme');
import {StyleSheet} from 'react-native';
import {w, h, width, height} from '../../utils/Dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UiColor.WHITE,
  },

  TopProductcardContainer: {
    elevation: 5,
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 20,
    width: w(33),
    paddingTop: 5,
  },
  TopProductImage: {
    height: 60,
    width: 45,
    marginTop: 20,
    marginLeft: 35,
  },
  topProductPlaceholder: {
    resizeMode: 'contain',
    height: 10,
    tintColor: UiColor.GRAY,
  },

  amount: {
    fontSize: TextSize.h8,
    fontFamily: FontFamily.SEMIBOLD,
    paddingLeft: 10,
    paddingTop: 5,
  },
  categoryTitle: {
    fontSize: 8,
    color: TextColor.GRAY,
    paddingHorizontal: 10,
    fontFamily: FontFamily.REGULAR,
  },
  cartbutton: {
    width: w(30.7),
    height: h(4),
    marginTop: 10,
    marginLeft: 4,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: UiColor.ORANGE,
  },
  cartText: {
    color: UiColor.WHITE,
    textAlign: 'center',
    paddingTop: 3,
    fontFamily: FontFamily.BOLD,
    fontSize: TextSize.h8,
  },
  amountContainer: {
    height: '9%',
    marginHorizontal: 10,
  },
  amountText: {
    fontSize: TextSize.bigSize,
    padding: 10,
    fontFamily: FontFamily.SEMIBOLD,
  },
  productTitle: {
    fontSize: TextSize.h5,
    color: TextColor.GRAY,
    paddingHorizontal: 20,
  },
  productQuantity: {
    height: '6%',
    width: '18%',
    marginHorizontal: 20,
    borderRadius: 2,
    marginVertical: 10,
    backgroundColor: UiColor.GRAY,
  },
  quantityText: {
    paddingHorizontal: 5,
    fontFamily: FontFamily.REGULAR,
  },
  descContainer: {
    height: '8%',
    width: '100%',
    backgroundColor: UiColor.GRAY,
  },
  descTitle: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontFamily: FontFamily.SEMIBOLD,
    color: TextColor.GRAY,
    fontSize: TextSize.h4,
  },

  inputDesc: {
    padding: 20,
  },
});
