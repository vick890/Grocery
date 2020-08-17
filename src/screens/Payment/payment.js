import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';
import AppHeader from '../../components/AppHeader';
import {
  UiColor,
  Spacing,
  FontSize,
  TextColor,
  FontFamily,
  ImageAsset,
} from '../../theme';
import ImageLoad from 'react-native-image-placeholder';
import Icon from 'react-native-vector-icons/Ionicons';

const slots = [
  {
    id: 1,
    day: 'TUE',
    date: '21 July',
  },
  {
    id: 2,
    day: 'WED',
    date: '21 July',
  },
  {
    id: 3,
    day: 'THU',
    date: '21 July',
  },
  {
    id: 4,
    day: 'FRI',
    date: '21 July',
  },
  {
    id: 5,
    day: 'SAT',
    date: '21 July',
  },

  {
    id: 6,
    day: 'SUN',
    date: '21 July',
  },
];
const timeSlot = [
  {
    id: 1,
    time: '6 AM - 9 AM',
  },
  {
    id: 2,
    time: '9 AM -  1 PM',
  },
  {
    id: 3,
    time: '3 AM - 9 AM',
  },
  {
    id: 4,
    time: '6 PM - 10 PM',
  },
];
export default props => {
  const [currentSlot, setCurrentSlot] = useState(1);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <AppHeader
        props={props}
        barType="light-content"
        bgColor={UiColor.ORANGE}
        showIcon={true}
        name="Payment"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.TopHeader}>
          <View style={{flex: 1}}>
            <Text style={styles.TopHeaderTxt}>
              Amount Payable{' '}
              <Text
                style={{
                  fontSize: FontSize.FONT_SIZE_12,
                  color: TextColor.LIGHT_GRAY,
                }}>
                {' '}
                (Incl. all Tax)
              </Text>
            </Text>
          </View>
          <Text style={{...styles.TopHeaderTxt, flex: 0.3}}>₹340</Text>
        </View>
        {/* Address box */}
        <View style={styles.addressBox}>
          <Text
            style={{
              fontSize: FontSize.FONT_SIZE_16,
              color: TextColor.TextGRAY,
              fontFamily: FontFamily.SEMIBOLD,
            }}>
            Your Adresses
          </Text>
          <Text style={styles.addressTxtStyle}>
            House No- 45 Street Number - 6 Noida Sector 64, Uttar Pradesh,
          </Text>
          <Text style={styles.addressTxtStyle}>+917840816497</Text>
          <View>
            <Text
              style={{
                fontSize: FontSize.FONT_SIZE_12,
                color: UiColor.ORANGE,
                fontFamily: FontFamily.SEMIBOLD,
                alignSelf: 'flex-end',
                margin: Spacing.SCALE_5,
              }}>
              CHANGE ADDRESS
            </Text>
          </View>
        </View>
        {/* Delivery slot */}
        <View style={styles.DeliverySlotBox}>
          <Text
            style={{
              fontSize: FontSize.FONT_SIZE_14,
              color: TextColor.DARK_GRAY,
            }}>
            Choose Delivery Slot on this slot
          </Text>
        </View>
        {/* slot list */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: Spacing.SCALE_5}}>
          {slots.map((item, index) => {
            return (
              <TouchableHighlight
                underlayColor={UiColor.Light_Black_Border}
                style={[
                  styles.slotBox,
                  currentSlot == item?.id
                    ? {backgroundColor: UiColor.ORANGE}
                    : null,
                ]}
                onPress={() => {
                  setCurrentSlot(item?.id);
                }}>
                <>
                  <Text
                    style={[
                      styles.dayTxt,
                      currentSlot == item?.id ? {color: 'white'} : null,
                    ]}>
                    {item?.day}
                  </Text>
                  <Text
                    style={[
                      styles.dateTxt,
                      currentSlot == item?.id ? {color: 'white'} : null,
                    ]}>
                    {item?.date}
                  </Text>
                </>
              </TouchableHighlight>
            );
          })}
        </ScrollView>
        <FlatList
          data={timeSlot}
          keyExtractor={(item, index) => {
            item?.id;
          }}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  margin: Spacing.SCALE_5,
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderColor: UiColor.Light_Black_Border,
                  paddingBottom: Spacing.SCALE_5,
                }}>
                <CheckBox
                  disabled={false}
                  tintColors={UiColor.ORANGE}
                  // value={toggleCheckBox}
                  // onValueChange={newValue => setToggleCheckBox(newValue)}
                />
                <Text style={styles.checkboxText}>{item?.time}</Text>
              </View>
            );
          }}
        />
        <View
          style={{
            padding: Spacing.SCALE_10,
            borderBottomWidth: 1,
            borderBottomColor: UiColor.Light_Black_Border,
          }}>
          <Text
            style={{
              fontSize: FontSize.FONT_SIZE_18,
              color: TextColor.DARK_GRAY,
            }}>
            Payment Method
          </Text>
        </View>
        <View style={styles.footerBoxContainer}>
          <View style={styles.footerRow}>
            <ImageLoad
              style={styles.footerIcon}
              resizeMode="cover"
              borderRadius={80}
              loadingStyle={{color: UiColor.ORANGE}}
              source={require('../../assets/img/cash_on_delivery.png')}
            />
            <Text styl={styles.FooterTxt}>Cash On Delivery</Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={FontSize.FONT_SIZE_20}
            style={{flex: 0.1}}
          />
        </View>
        <View style={styles.footerBoxContainer}>
          <View style={styles.footerRow}>
            <ImageLoad
              style={styles.footerIcon}
              resizeMode="cover"
              borderRadius={80}
              loadingStyle={{color: UiColor.ORANGE}}
              source={require('../../assets/img/credit_card.png')}
            />
            <Text style={styles.FooterTxt}>Online Payment</Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={FontSize.FONT_SIZE_20}
            style={{flex: 0.1}}
          />
        </View>
      </ScrollView>
    </View>
  );
};
