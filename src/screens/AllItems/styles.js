const {UiColor, FontFamily, TextSize, TextColor, Spacing, FontSize} = require('../../theme');
import {StyleSheet} from 'react-native';
import {w, h} from '../../utils/Dimensions';

export default StyleSheet.create({
  SpecialOfferscardContainer: {
    backgroundColor: UiColor.WHITE,
    elevation: 3,
    borderRadius: 3,
    padding: Spacing.SCALE_10,
    borderWidth:1,
    borderColor:UiColor.Light_Black_Border,
    width:Spacing.SCALE_120,
    marginBottom:Spacing.SCALE_10,
    
  },
  Offersimage: {
    height: Spacing.SCALE_90,
    width:Spacing.SCALE_60,
    borderRadius: 20,
    alignSelf: 'center',
    // marginHorizontal: Spacing.SCALE_10,
  },
  specialOfferPlaceholder: {
    resizeMode: 'contain',
    height: Spacing.SCALE_30,
    width:Spacing.SCALE_60,
    tintColor: UiColor.GRAY,
  },
  title: {
    fontSize: FontSize.FONT_SIZE_9,
    alignSelf: 'center',
    fontFamily: FontFamily.BOLD,
    color: TextColor.GRAY,
  },
  listItem:{
    paddingBottom:Spacing.SCALE_10,
    borderWidth:1,
    borderColor:'red',
    justifyContent:'center',
    alignItems:'center'
  }
});
