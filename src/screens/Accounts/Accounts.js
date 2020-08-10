import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import {
  IconAsset,
  UiColor,
  FontFamily,
  TextSize,
  Spacing,
  FontSize,
} from '../../theme';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuList = [
  {
    key: 0,
    name: 'My Addresses',
    nav: 'MyAddress',
    icon: 'ios-pin',
  },
  {
    key: 1,
    name: 'My Orders',
    nav: 'MyOrders',
    icon: 'ios-reader',
  },
  {
    key: 2,
    name: 'My Cart',
    nav: 'MyCart',
    icon: 'ios-cart',
  },
  {
    key: 3,
    name: 'About us',
    nav: 'AbouUs',
    icon: 'ios-information-circle',
  },
];
export default ({navigation}) => {
  console.log('navigation', navigation);
  return (
    <ScrollView
      style={{paddingBottom: Spacing.SCALE_20}}
      showsVerticalScrollIndicator={false}>
      <AppHeader
        bgColor={UiColor.ORANGE}
        name="Account"
        barType="light-content"
        titleAlign="center"
      />
      <View style={styles.headerContain}>
        <Image
          resizeMode="contain"
          source={IconAsset.ic_accounts}
          style={{
            width: Spacing.SCALE_20,
            height: Spacing.SCALE_20,
            tintColor: 'white',
          }}
        />
        <Text
          style={{
            color: UiColor.WHITE,
            fontSize: FontSize.FONT_SIZE_13,
            marginTop: Spacing.SCALE_10,
          }}>
          +919898789809
        </Text>
      </View>
      <FlatList
        data={MenuList}
        contentContainerStyle={{
          marginTop: Spacing.SCALE_15,
          paddingHorizontal: Spacing.SCALE_10,
        }}
        keyExtractor={(item, index) => item.key}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: UiColor.Light_Black_Border,
                height: Spacing.SCALE_50,
                marginVertical: Spacing.SCALE_10,
                paddingBottom: Spacing.SCALE_10,
              }}
              onPress={() =>
                item?.nav !== 'AbouUs'
                  ? navigation.navigate(item?.nav)
                  : Alert.alert(
                      '',
                      'Feature coming soon!',
                      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                      {cancelable: false},
                    )
              }>
              <View
                style={{
                  borderWidth: 1,
                  alignItems: 'center',
                  height: Spacing.SCALE_35,
                  width: Spacing.SCALE_35,
                  borderRadius: Spacing.SCALE_20,
                  justifyContent: 'center',
                  marginHorizontal: Spacing.SCALE_10,
                  backgroundColor: UiColor.WHITE,
                  borderWidth: 1,
                  borderColor: UiColor.GRAY,
                }}>
                <Icon name={item.icon} size={FontSize.FONT_SIZE_22} />
              </View>
              <Text style={{flex: 1, fontSize: FontSize.FONT_SIZE_15}}>
                {item?.name}
              </Text>
              <Icon name="ios-chevron-forward" size={25} style={{flex: 0.1}} />
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity style={styles.btnStyle}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Icon name="ios-wallet" size={FontSize.FONT_SIZE_20} />
          <Text
            style={{
              fontSize: FontSize.FONT_SIZE_15,
              marginLeft: Spacing.SCALE_10,
            }}>
            My Wallet
          </Text>
        </View>
        <Text
          style={{
            flex: 0.15,
            color: UiColor.ORANGE,
            fontSize: FontSize.FONT_SIZE_17,
            fontWeight: 'bold',
          }}>
          ₹80
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle1}
        onPress={() => Alert.alert('Logout Successfully!')}>
        <Text style={{color: 'white', fontSize: FontSize.FONT_SIZE_15}}>
          Log Out
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.btnStyle1,
          backgroundColor: 'black',
          marginBottom: Spacing.SCALE_15,
        }}
        onPress={() =>
          Alert.alert(
            '',
            'Feature coming soon!',
            [{text: 'OK', onPress: () => console.log('OK Pressed')}],
            {cancelable: false},
          )
        }>
        <Icon
          name="ios-share-social"
          size={FontSize.FONT_SIZE_16}
          color={'white'}
        />
        <Text
          style={{
            color: 'white',
            marginLeft: Spacing.SCALE_5,
            fontSize: FontSize.FONT_SIZE_15,
          }}>
          Share app
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
