import React from 'react';
import {View,TextInput,Text,TouchableHighlight} from 'react-native';
import styles from './styles'
import AppHeader from '../../components/AppHeader';
import { UiColor } from '../../theme';

export default() => {
    return(
        <View style={styles.mainContainer}>
        <AppHeader 
          name='Add new Address'
          bgColor={UiColor.ORANGE} 
          showIcon={true}
          showIcon={true}
        />
        <View style={{flex: 1}}>
        </View>
      </View>
    )
}