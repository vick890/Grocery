const {UiColor, FontFamily, TextSize, TextColor} = require('../../theme');
import {StyleSheet} from 'react-native';
import {w, h} from '../../utils/Dimensions';

export default StyleSheet.create({
  SpecialOfferscardContainer: {
    backgroundColor: UiColor.WHITE,
    flexDirection: 'column',
    flexWrap: 'wrap',
    elevation: 3,
    height: 120,
    width: '90%',
    paddingHorizontal: 10,
    borderRadius: 3,
    marginHorizontal: 2,
    alignSelf: 'center',
    paddingTop: 9,
  },
  Offersimage: {
    height: 90,
    width: w(20),
    borderRadius: 20,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  specialOfferPlaceholder: {
    resizeMode: 'contain',
    height: 10,
    tintColor: UiColor.GRAY,
  },
  title: {
    fontSize: 8,
    alignSelf: 'center',
    fontFamily: FontFamily.BOLD,
    color: TextColor.GRAY,
  },
});
