import {StyleSheet} from 'react-native';
import {
  UiColor,
  ImageAsset,
  IconAsset,
  TextSize,
  TextColor,
  FontFamily,
} from '../../theme';

export default StyleSheet.create({
  container: {
    height: 42,
    backgroundColor: UiColor.WHITE,
    elevation: 3,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logoimage: {
    width: 70,
    height: 30,
    margin: 10,
  },
  titleContainer: {
    width: 150,
  },
  titleText: {
    marginVertical: 10,
    fontSize: TextSize.h6,
    color: TextColor.GRAY,
    fontFamily: FontFamily.SEMIBOLD,
  },
  shoppingCartContainer: {
    width: 25,
    height: 25,
    margin: 10,
  },
});
