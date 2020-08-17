const {UiColor, FontFamily, TextSize, TextColor, Spacing, FontSize} = require('../../theme');
import {StyleSheet} from 'react-native';
import {w, h} from '../../utils/Dimensions';

export default StyleSheet.create({
  filterConatiner: {
    
    borderRadius: 7,
    backgroundColor: UiColor.ORANGE,
    marginVertical: Spacing.SCALE_10,
    alignSelf: 'flex-end',
    marginRight: Spacing.SCALE_10,
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
    width: Spacing.SCALE_100,
    height: Spacing.SCALE_40,
  },
  filterImage: {
    height: Spacing.SCALE_20,
    width:Spacing.SCALE_20,
    tintColor: UiColor.WHITE,
  },
  filterText: {
    color: TextColor.WHITE,
    fontSize: FontSize.FONT_SIZE_16,
    fontFamily: FontFamily.SEMIBOLD,
  },
  button: {
    width: '50%',
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
});
