const {UiColor, FontFamily, TextSize, TextColor} = require('../../theme');
import {StyleSheet} from 'react-native';
import {w, h} from '../../utils/Dimensions';

export default StyleSheet.create({
  filterConatiner: {
    width: 85,
    height: 30,
    borderRadius: 7,
    backgroundColor: UiColor.ORANGE,
    marginVertical: 10,
    alignSelf: 'flex-end',
    marginRight: 10,
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  filterImage: {
    height: 20,
    width: 20,
    tintColor: UiColor.WHITE,
    margin: 5,
  },
  filterText: {
    color: TextColor.WHITE,
    fontSize: TextSize.h6,
    paddingRight: 10,
    fontFamily: FontFamily.SEMIBOLD,
    paddingTop: 4,
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
