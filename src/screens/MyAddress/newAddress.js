import React, { useState } from 'react';
import {View,TextInput,Text,TouchableHighlight,ScrollView,Alert} from 'react-native';
import styles from './styles'
import AppHeader from '../../components/AppHeader';
import { UiColor, Spacing } from '../../theme';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';

export default(props) => {
  const [showArea,setShowArea] = useState('')
    return(
        <View style={styles.mainContainer}>
        <AppHeader 
          name='Add new Address'
          bgColor={UiColor.ORANGE} 
          showIcon={true}
          props={props}
        />
        <ScrollView style={styles.formStyle} showsVerticalScrollIndicator={false}>
          <Text style={styles.label}> Name</Text>
          <TextInput
            style={styles.txtInput}
          />
          <Text style={styles.label}> Mobile Number</Text>
          <TextInput
            style={styles.txtInput}
          />
          <Text style={styles.label}> Address line 1</Text>
          <TextInput
            style={styles.txtInput}
          />
          <Text style={styles.label}> Address line 2</Text>
          <TextInput
            style={styles.txtInput}
          />
          <Text style={styles.label}> Area</Text>
          <DropDownPicker
            items={[
                {label: 'xyz', value: 'xyz'},
                {label: 'abc', value: 'abc'},
            ]}
            defaultValue={showArea}
            containerStyle={{height: Spacing.SCALE_40,marginBottom:Spacing.SCALE_10}}
            style={{
              borderColor:UiColor.ORANGE,
              height:Spacing.SCALE_35,
              // marginBottom:Spacing.SCALE_10
            }}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item,index) => {setShowArea(item?.value)}}
        />
          <Text style={styles.label}> City</Text>
          <TextInput
            style={styles.txtInput}
          />
          <Text style={styles.label}> Pin Code</Text>
          <TextInput
            style={{...styles.txtInput,width:Spacing.SCALE_200}}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={() => Alert.alert(
              "",
              "Add Address Successfully!",
              [
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ],
              { cancelable: false }
            )}
          >
            <Text style={styles.btnTxt}>Submit</Text>
          </TouchableHighlight>
          <View style={{height:Spacing.SCALE_40}}/>
        </ScrollView>
          
      </View>
    )
}