import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {UiColor} from '../../theme';
const addressdata = [
  {
    address:
      'House NO -45 Street Number - Noida sector 64, Uttar Pradesh ,987678990',
  },
  {
    address:
      'House NO -45 Street Number - Noida sector 64, Uttar Pradesh ,987678990',
  },
  {
    address:
      'House NO -45 Street Number - Noida sector 64, Uttar Pradesh ,987678990',
  },
  {
    address:
      'House NO -45 Street Number - Noida sector 64, Uttar Pradesh ,987678990',
  },
  {
    address:
      'House NO -45 Street Number - Noida sector 64, Uttar Pradesh ,987678990',
  },
  {
    address:
      'House NO -45 Street Number - Noida sector 64, Uttar Pradesh ,987678990',
  },
  {
    address:
      'House NO -45 Street Number - Noida sector 64, Uttar Pradesh ,987678990',
  },
  {
    address:
      'House NO -45 Street Number - Noida sector 64, Uttar Pradesh ,987678990',
  },
  {
    address:
      'House NO -45 Street Number - Noida sector 64, Uttar Pradesh ,987678990',
  },
];

export default class MyAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editAddress: false,
      selectedIndex: '',
    };
  }
  _editAddress = index => {
    this.setState({editAddress: !this.state.editAddress, selectedIndex: index});
  };
  render() {
    const {editAddress, selectedIndex} = this.state;
    return (
      <View style={styles.mainContainer}>
        <AppHeader 
          props={this.props} 
          bgColor={UiColor.ORANGE} 
          showIcon={true}
          showIcon={true}
        />
        <View style={{flex: 1}}>
          <FlatList
            data={addressdata}
            renderItem={({item, index}) => (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => this._editAddress(index)}>
                {selectedIndex === index && editAddress ? (
                  <View
                    style={[
                      styles.addressContainer,
                      {borderColor: UiColor.ORANGE, borderWidth: 1},
                    ]}>
                    <Text style={styles.addressText}>{item.address}</Text>
                    <Text style={styles.editText}>Edit</Text>
                  </View>
                ) : (
                  <View style={styles.addressContainer}>
                    <Text style={styles.addressText}>{item.address}</Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.buttonbox}>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => {
            //   {
            //     this.props.navigation.navigate('AddedCategories');
            //   }
            // }}
          >
            <Text style={styles.button_text}>Add New Address</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
