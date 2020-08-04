const {UiColor, FontFamily, TextSize, TextColor} = require('../../theme');
import {StyleSheet} from 'react-native';
import {w, h} from '../../utils/Dimensions';

export default StyleSheet.create({
  container: {
    height: 42,
    backgroundColor: UiColor.ORANGE,
    elevation: 3,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backIcon: {
    width: 25,
    height: 20,
    marginHorizontal: 10,
    marginVertical: 7,
  },
  titleContainer: {
    width: 250,
  },
  titleText: {
    marginVertical: 5,
    fontFamily: FontFamily.BOLD,
    fontSize: TextSize.h4,
    color: TextColor.WHITE,
  },
  shoppingCartContainer: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
    marginVertical: 6,
    tintColor: UiColor.WHITE,
  },
});
