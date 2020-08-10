import {StyleSheet} from 'react-native';
import { Spacing, UiColor } from '../../theme';

export default StyleSheet.create({
    LogosContainer:{
        marginTop:Spacing.SCALE_40,
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    IconContainer:{
        borderWidth:1,
        width:Spacing.SCALE_60,
        height:Spacing.SCALE_60,
        borderRadius:Spacing.SCALE_60/2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:UiColor.WHITE,
        borderColor:UiColor.Light_Black_Border
        }
})