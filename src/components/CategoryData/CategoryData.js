import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {
  ImageAsset,
  IconAsset,
  UiColor,
  TextColor,
  TextSize,
  FontFamily,
} from '../../theme';
import ImageLoad from 'react-native-image-placeholder';

export default class CategoryData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardValue: 0,
      enableForAdd: true,
    };
  }
  _addCard = value => {
    if (value === '+') {
      this.setState({cardValue: this.state.cardValue + 1});
    } else if (value === '-') {
      this.setState({cardValue: this.state.cardValue - 1});
    }
  };
  render() {
    const {data, enableForAdd, cardValue} = this.props;
    return (
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            data={data}
            horizontal={false}
            style={{
              flex: 1,
              backgroundColor: UiColor.GRAY,
            }}
            renderItem={({item}) => (
              <View style={{marginVertical: 10}}>
                <View style={styles.VegetablecardContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <ImageLoad
                      style={styles.Vegetableimage}
                      resizeMode="cover"
                      borderRadius={10}
                      placeholderStyle={styles.specialOfferPlaceholder}
                      loadingStyle={{
                        size: 'small',
                        color: UiColor.ORANGE,
                      }}
                      placeholderSource={ImageAsset.logo}
                      source={item.image}
                    />

                    <View style={{flexDirection: 'column'}}>
                      <View>
                        <Text style={styles.Vegetabletitle}>{item.name}</Text>
                        <View style={styles.bracketContainer}>
                          <Text style={styles.bracketTitle}> 1 kg</Text>
                        </View>
                      </View>
                      <View style={styles.amountContainer}>
                        <View style={{width: 40}}>
                          <Text style={styles.amount}>₹ {item.amount}</Text>
                        </View>
                        <View style={{width: 40}}>
                          <Text style={styles.greenAmount}>
                            ₹ {item.amount}
                          </Text>
                        </View>
                        <View style={styles.offContainer}>
                          <Text style={styles.offAmount}>₹ {item.amount}</Text>
                        </View>
                        <View>
                          <View style={styles.cardContainer}>
                            <View style={styles.addCard}>
                              {enableForAdd ? (
                                <Text style={styles.addCardText}>
                                  Add to card
                                </Text>
                              ) : (
                                <View
                                  style={{
                                    flexDirection: 'row',
                                  }}>
                                  <TouchableOpacity
                                    onPress={() => {
                                      this._addCard('-');
                                    }}>
                                    <Text style={styles.sign}>-</Text>
                                  </TouchableOpacity>
                                  <Text style={styles.sign}>{cardValue}</Text>
                                </View>
                              )}

                              <TouchableOpacity
                                onPress={() => {
                                  this._addCard('+');
                                }}>
                                <Text style={{color: UiColor.ORANGE}}>+</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    );
  }
}
