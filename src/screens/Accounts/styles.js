import {StyleSheet} from 'react-native';
import { UiColor, Spacing } from '../../theme';

export default StyleSheet.create({
    headerContain:{
        backgroundColor:UiColor.ORANGE,
        paddingVertical:Spacing.SCALE_20,
        paddingHorizontal:Spacing.SCALE_10,
    },
    btnStyle:{
        borderWidth:1,
        borderColor:UiColor.Light_Black_Border,
        width:Spacing.SCALE_380,
        padding:Spacing.SCALE_10,
        borderRadius:Spacing.SCALE_10,
        flexDirection:'row',
        alignSelf:'center',
        marginTop:Spacing.SCALE_20
        },
        btnStyle1:{
            width:Spacing.SCALE_380,
            padding:Spacing.SCALE_10,
            flexDirection:'row',
            alignSelf:'center',
            marginTop:Spacing.SCALE_20,
            backgroundColor:UiColor.ORANGE,
            justifyContent:'center'
            }
})