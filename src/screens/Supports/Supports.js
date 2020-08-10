import React, {Component} from 'react';
import {Text, View,TextInput,StatusBar,ScrollView} from 'react-native';
import AppHeader from '../../components/AppHeader';
import { UiColor, Spacing, FontSize } from '../../theme';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles';

export default class Supports extends Component {
  render() {
    return (
      <ScrollView style={{flex:1}}>
        <StatusBar 
          translucent 
          backgroundColor={UiColor.ORANGE} 
          barStyle='light-content'
        />
        <AppHeader 
          props={this.props} 
          bgColor={UiColor.ORANGE}
          barType='light-content'
          name='Support'
        />
        <View style={{
            paddingHorizontal:Spacing.SCALE_10,
            paddingVertical:Spacing.SCALE_15,
            backgroundColor:UiColor.Light_Black_Border
            }}>
          <Text style={{
            fontSize:FontSize.FONT_SIZE_14,
            fontWeight:'600'
            }}>Send Us a Message</Text>
        </View>
        <View style={{
            flex:1,
            paddingVertical:Spacing.SCALE_10,
            marginTop:Spacing.SCALE_10,
            paddingHorizontal:Spacing.SCALE_15
            }}>
            <TextInput
              placeholder='Name'
              placeholderTextColor={UiColor.ORANGE}
              style={{
                  borderBottomWidth:1,
                  borderColor:UiColor.ORANGE,
                  paddingBottom:Spacing.SCALE_10,
                  paddingLeft:Spacing.SCALE_10
                }}
            />
            <TextInput
              placeholder='Email'
              placeholderTextColor={UiColor.ORANGE}
              style={{
                  borderBottomWidth:1,
                  borderColor:UiColor.ORANGE,
                  paddingBottom:Spacing.SCALE_10,
                  paddingLeft:Spacing.SCALE_10,
                  marginTop:Spacing.SCALE_20
                }}
            />
            <Text style={{
              marginTop:Spacing.SCALE_20,
              paddingLeft:Spacing.SCALE_10,
              color:UiColor.ORANGE
              }}>Message</Text>
            <TextInput
              multiline
              style={{
                  borderWidth:1,
                  borderColor:UiColor.ORANGE,
                  paddingBottom:Spacing.SCALE_10,
                  paddingLeft:Spacing.SCALE_10,
                  paddingLeft:Spacing.SCALE_10,
                  marginTop:Spacing.SCALE_20,
                  height:Spacing.SCALE_80

                }}
            />

            <TouchableHighlight
              style={{
                borderWidth:1,
                borderColor:UiColor.ORANGE,
                marginTop:Spacing.SCALE_40,
                justifyContent:'center',
                alignItems:'center',
                paddingVertical:Spacing.SCALE_15,
                backgroundColor:UiColor.ORANGE,
                borderRadius:Spacing.SCALE_10
              }}
            >
              <Text style={{
                fontSize:FontSize.FONT_SIZE_16,
                color:UiColor.WHITE
                }}>Submit</Text>
            </TouchableHighlight>

            <View style={styles.LogosContainer}>
              <View style={styles.IconContainer}>
                  <Icon
                    name='ios-call'
                    size={Spacing.SCALE_30}
                    color={UiColor.Blue}
                  />
              </View>
              <View style={styles.IconContainer}>
                  <Icon
                    name='ios-logo-google'
                    size={Spacing.SCALE_30}
                    color={UiColor.RED}
                  />
              </View>
              <View style={styles.IconContainer}>
                  <Icon
                    name='ios-logo-whatsapp'
                    size={Spacing.SCALE_30}
                    color={UiColor.WhatsAppGreen}
                  />
              </View>
              
            </View>
        </View>
      </ScrollView>
    );
  }
}
