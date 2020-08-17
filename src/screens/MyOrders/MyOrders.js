import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableHighlight,
  Alert,
} from 'react-native';
import AppHeader from '../../components/AppHeader';
import {
  IconAsset,
  UiColor,
  TextSize,
  FontSize,
  Spacing,
  TextColor,
  FontFamily,
} from '../../theme';
import {h, w} from '../../utils/Dimensions';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/Ionicons';

const labels = ['Order Confirmed', 'Packed', 'Shipped', 'Delivered'];

const customStyles = {
  stepIndicatorSize: Spacing.SCALE_25,
  currentStepIndicatorSize: Spacing.SCALE_25,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: UiColor.WHITE,
  stepStrokeWidth: Spacing.SCALE_2,
  stepStrokeFinishedColor: UiColor.ORANGE,
  stepStrokeUnFinishedColor: UiColor.GRAYLINE,
  separatorFinishedColor: UiColor.ORANGE,
  separatorUnFinishedColor: UiColor.GRAYLINE,
  stepIndicatorFinishedColor: UiColor.WHITE,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  // stepIndicatorLabelFontSize:  FontSize.FONT_SIZE_15,
  // currentStepIndicatorLabelFontSize: FontSize.FONT_SIZE_10,
  stepIndicatorLabelCurrentColor: UiColor.Blue,
  stepIndicatorLabelFinishedColor: UiColor.WHITE,
  // stepIndicatorLabelUnFinishedColor: UiColor.GRAYLINE,
  labelColor: TextColor.BLACK,
  labelSize: FontSize.FONT_SIZE_10,
  currentStepLabelColor: UiColor.WHITE,
};

const orderDetails = [
  {
    id: 1,
    orderId: '25455623',
    order_amount: '135',
    orderDescription: '',
    orderStatus: 'Packed',
    orderStatusId: '2',
    total_items: '5',
  },
  {
    id: 2,
    orderId: '25455623',
    order_amount: '135',
    orderDescription: '',
    orderStatus: 'Packed',
    orderStatusId: '4',
    total_items: '5',
  },
  {
    id: 3,
    orderId: '25455623',
    order_amount: '135',
    orderDescription: '',
    orderStatus: 'Packed',
    orderStatusId: '5',
    total_items: '5',
  },
  {
    id: 4,
    orderId: '25455623',
    order_amount: '135',
    orderDescription: '',
    orderStatus: 'Packed',
    orderStatusId: '6',
    total_items: '5',
  },
];
export default (MyOrders = props => {
  const [orders, setOrders] = useState([]);
  const [currentPosition, setCurrentPostion] = useState(0);
  // render() {
  return (
    <View style={{flex: 1}}>
      <AppHeader
        props={props}
        bgColor={UiColor.ORANGE}
        name="Your Order"
        showIcon={true}
        barType="light-content"
      />
      <ScrollView style={styles.mainContainer}>
        {!orders === [] ? (
          <>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                style={styles.img}
                source={IconAsset.ic_order}
              />
              <Text style={styles.emptyTxt}>You haven't shop yet</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => this.props.navigation.navigate('Home')}
              style={styles.btn}>
              <Text style={styles.btnText}>Start Shopping</Text>
            </TouchableOpacity>
          </>
        ) : (
          <FlatList
            data={orderDetails}
            keyExtractor={(item, index) => {
              item?.id;
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: UiColor.Light_Black_Border,
                    width: '95%',
                    alignSelf: 'center',
                    marginVertical: Spacing.SCALE_10,
                    padding: Spacing.SCALE_10,
                  }}>
                  {/* First Row */}
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/img/box.png')}
                      style={{
                        height: Spacing.SCALE_50,
                        width: Spacing.SCALE_47,
                        flex: 0.2,
                      }}
                      resizeMode="contain"
                    />
                    <View style={{flex: 1, paddingLeft: Spacing.SCALE_20}}>
                      <Text
                        style={{
                          fontSize: FontSize.FONT_SIZE_15,
                          color: TextColor.DARK_GRAY,
                          fontFamily: FontFamily.SEMIBOLD,
                        }}>
                        Order ID - {item?.orderId}
                      </Text>
                      <Text
                        style={{
                          fontSize: FontSize.FONT_SIZE_20,
                          color: TextColor.DARK_GRAY,
                          fontFamily: FontFamily.BOLD,
                        }}>
                        ₹{item?.order_amount}
                      </Text>
                      {item?.orderStatusId === '4' ? (
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Icon
                            name="ios-checkmark-circle"
                            size={FontSize.FONT_SIZE_20}
                            color={TextColor.GREEN}
                            style={{marginRight: Spacing.SCALE_5}}
                          />
                          <Text
                            style={{
                              fontSize: FontSize.FONT_SIZE_12,
                              color: TextColor.GREEN,
                              fontFamily: FontFamily.SEMIBOLD,
                            }}>
                            Deliverd
                          </Text>
                        </View>
                      ) : item?.orderStatusId === '5' ? (
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Icon
                            name="ios-close-circle"
                            size={FontSize.FONT_SIZE_20}
                            color={TextColor.cancelColor}
                            style={{marginRight: Spacing.SCALE_5}}
                          />
                          <Text
                            style={{
                              fontSize: FontSize.FONT_SIZE_12,
                              color: TextColor.cancelColor,
                              fontFamily: FontFamily.SEMIBOLD,
                            }}>
                            Cancelled
                          </Text>
                        </View>
                      ) : item?.orderStatusId === '6' ? (
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Icon
                            name="ios-sync"
                            size={FontSize.FONT_SIZE_20}
                            color={TextColor.BLUE}
                            style={{marginRight: Spacing.SCALE_5}}
                          />
                          <Text
                            style={{
                              fontSize: FontSize.FONT_SIZE_12,
                              color: TextColor.BLUE,
                              fontFamily: FontFamily.SEMIBOLD,
                            }}>
                            Cancelled
                          </Text>
                        </View>
                      ) : null}
                    </View>
                    <Icon
                      name="ios-chevron-down"
                      size={Spacing.SCALE_20}
                      style={{flex: 0.2, paddingTop: Spacing.SCALE_5}}
                    />
                  </View>
                  {/* step indicator Row */}
                  <View style={{paddingTop: Spacing.SCALE_5}}>
                    <Text
                      style={{
                        fontSize: FontSize.FONT_SIZE_12,
                        color: TextColor.LIGHT_GRAY,
                      }}>
                      Items - {item?.total_items}
                    </Text>
                    {item?.orderStatusId == '4' ||
                    item?.orderStatusId == '5' ||
                    item?.orderStatusId == '6' ? null : (
                      <StepIndicator
                        customStyles={customStyles}
                        currentPosition={item?.orderStatusId}
                        labels={labels}
                        stepCount={4}
                      />
                    )}
                  </View>
                  {/* Details View */}
                  <View style={{flex: 1, marginVertical: Spacing.SCALE_10}}>
                    <TouchableHighlight
                      underlayColor={UiColor.light_orange}
                      onPress={() => {
                        Alert.alert(
                          '',
                          'Details are not available!',
                          [
                            {
                              text: 'OK',
                              onPress: () => console.log('OK Pressed'),
                            },
                          ],
                          {cancelable: false},
                        );
                      }}
                      style={{
                        width: Spacing.SCALE_120,
                        backgroundColor: UiColor.ORANGE,
                        alignSelf: 'flex-end',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: Spacing.SCALE_5,
                      }}>
                      <Text
                        style={{
                          color: TextColor.WHITE,
                          fontSize: FontSize.FONT_SIZE_16,
                        }}>
                        View Details
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              );
            }}
          />
        )}
      </ScrollView>
    </View>
  );
});
// }
