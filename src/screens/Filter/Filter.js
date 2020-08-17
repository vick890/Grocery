import React, {Component, useState} from 'react';
import {Text, View} from 'react-native';
import AppHeader from '../../components/AppHeader';
import styles from './styles';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';

import {TextColor, UiColor, Spacing} from '../../theme';
const checboxPrice = [
  {
    name: '₹100 to 200',
  },
  {
    name: '₹200 to 500',
  },
  {
    name: '₹500 to 1000',
  },
  {
    name: '₹1000 to 2000',
  },
  {
    name: '₹2000 to 4000',
  },
];
const checboxBrand = [
  {
    name: 'Halidram',
  },
  {
    name: 'Bikaner',
  },
  {
    name: 'Bikaji',
  },
  {
    name: 'Halidram',
  },
  {
    name: 'Bikaner',
  },
  {
    name: 'Bikaji',
  },
];
const checboxDiscount = [
  {
    name: '₹10',
  },
  {
    name: '₹20',
  },
  {
    name: '₹50',
  },
  {
    name: '₹100',
  },
  {
    name: '₹200',
  },
];
export default (Filter = props => {
  const [priceClick, setPriceClick] = useState(true);
  const [brandClick, setBrandClick] = useState(false);
  const [discountClick, setDiscountClick] = useState(false);

  const price = () => {
    setPriceClick(!priceClick);
    setBrandClick(false);
    setDiscountClick(false);
  };
  const brand = () => {
    setPriceClick(false);
    setBrandClick(!brandClick);
    setDiscountClick(false);
  };
  const discount = () => {
    setPriceClick(false);
    setBrandClick(false);
    setDiscountClick(!discountClick);
  };
  return (
    <View style={{flex: 1}}>
      <AppHeader
        props={props}
        barType="light-content"
        bgColor={UiColor.ORANGE}
        showIcon={true}
      />
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={styles.typeContainer}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => {
              price();
            }}>
            <View style={styles.typeBox}>
              {priceClick ? (
                <Text style={[styles.typeText, {color: TextColor.ORANGE}]}>
                  Price
                </Text>
              ) : (
                <Text style={[styles.typeText]}>Price</Text>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              brand();
            }}>
            <View style={styles.typeBox}>
              {brandClick ? (
                <Text style={[styles.typeText, {color: TextColor.ORANGE}]}>
                  Brand
                </Text>
              ) : (
                <Text style={[styles.typeText]}>Brand</Text>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              discount();
            }}>
            <View style={styles.typeBox}>
              {discountClick ? (
                <Text style={[styles.typeText, {color: TextColor.ORANGE}]}>
                  Discount
                </Text>
              ) : (
                <Text style={[styles.typeText]}>Discount</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View style={{width: '50%', flex: 1}}>
          {priceClick ? (
            <FlatList
              data={checboxPrice}
              renderItem={({item}) => (
                <View
                  style={{
                    flexDirection: 'row',
                    margin: Spacing.SCALE_5,
                    alignItems: 'center',
                  }}>
                  <CheckBox
                    disabled={false}
                    // value={toggleCheckBox}
                    // onValueChange={newValue => setToggleCheckBox(newValue)}
                  />
                  <Text style={styles.checkboxText}>{item.name}</Text>
                </View>
              )}
            />
          ) : brandClick ? (
            <FlatList
              data={checboxBrand}
              renderItem={({item}) => (
                <View
                  style={{
                    flexDirection: 'row',
                    margin: Spacing.SCALE_5,
                    alignItems: 'center',
                  }}>
                  <CheckBox
                    disabled={false}
                    // value={toggleCheckBox}
                    // onValueChange={newValue => setToggleCheckBox(newValue)}
                  />
                  <Text style={styles.checkboxText}>{item.name}</Text>
                </View>
              )}
            />
          ) : (
            <FlatList
              data={checboxDiscount}
              renderItem={({item}) => (
                <View
                  style={{
                    flexDirection: 'row',
                    margin: Spacing.SCALE_5,
                    alignItems: 'center',
                  }}>
                  <CheckBox
                    disabled={false}
                    // value={toggleCheckBox}
                    // onValueChange={newValue => setToggleCheckBox(newValue)}
                  />
                  <Text style={styles.checkboxText}>{item.name}</Text>
                </View>
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
});
// }
