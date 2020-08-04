const {UiColor, FontFamily, TextSize, TextColor} = require('../../theme');
import {StyleSheet} from 'react-native';
import {w, h} from '../../utils/Dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UiColor.WHITE,
  },
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outerContainerTitle: {
    fontSize: TextSize.h4,
    color: TextColor.GRAY,
    marginLeft: 10,
    marginTop: 5,
  },
  signContainer: {
    height: 40,
    width: 40,
  },
  sign: {
    fontSize: 30,
    fontFamily: FontFamily.REGULAR,
    color: TextColor.ORANGE,
    marginRight: 20,
  },
  innerContainer: {
    flexDirection: 'column',
    marginTop: 4,
    alignSelf: 'flex-start',
    paddingLeft: 30,
  },
  innerContainerText: {
    color: TextColor.LIGHT_GRAY,
    fontFamily: FontFamily.REGULAR,
    fontSize: TextSize.h6,
  },
});
