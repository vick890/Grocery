import {StyleSheet} from 'react-native';
import {
  UiColor,
  ImageAsset,
  IconAsset,
  TextSize,
  TextColor,
  FontFamily,
  Spacing,
} from '../../theme';

export default StyleSheet.create({
 
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingTop:Spacing.SCALE_10
  },
  logoimage: {
    width: Spacing.SCALE_70,
    height: Spacing.SCALE_30,
    flex:0.5,
  },
  titleContainer: {
    flex:1,
    alignItems:'center'
  },
  titleText: {
    marginVertical: Spacing.SCALE_10,
    fontSize: TextSize.h6,
    color: TextColor.GRAY,
    fontFamily: FontFamily.SEMIBOLD,
  },
  shoppingCartContainer: {
    flex:0.2,
    width: Spacing.SCALE_25,
    height: Spacing.SCALE_25,
  },
});
