import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AppHeader from '../../components/AppHeader';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import {TextSize, UiColor} from '../../theme';
const data = [
  {
    category: 'Grocery & Staples',
    subCatergories: ['Pulse', 'Salt & sugar', 'Rice & Grains', 'Edible Oils'],
  },
  {
    category: 'Vegetables & fruits',
    subCatergories: ['Pulse', 'Salt & sugar', 'Rice & Grains', 'Edible Oils'],
  },
  {
    category: 'Grocery & Staples',
    subCatergories: ['Pulse', 'Salt & sugar', 'Rice & Grains', 'Edible Oils'],
  },
  {
    category: 'Vegetables & fruits',
    subCatergories: ['Pulse', 'Salt & sugar', 'Rice & Grains', 'Edible Oils'],
  },
];
class ShopByCategories extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        showData: false,
        selectCatergoryIndex: '',
        showSign: false,
        count: 0,
      });
  }
  _renderSubCategories = index => {
    this.setState({
      showData: !this.state.showData,
      selectCatergoryIndex: index,
      showSign: !this.state.showSign,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <AppHeader 
          props={this.props} 
          barType='light-content' 
          bgColor={UiColor.ORANGE} 
          showIcon={true}
          name='Shop By Category'
        />
        <FlatList
          data={data}
          extraData={this.state}
          style={{flex: 1}}
          renderItem={({item, index}) => (
            <View style={{flex: 1, marginVertical: 10}}>
              <View style={styles.outerContainer}>
                <TouchableOpacity
                  onPress={() => {
                    this._renderSubCategories(index);
                  }}>
                  <Text style={styles.outerContainerTitle}>
                    {item.category}
                  </Text>
                </TouchableOpacity>
                {this.state.showSign &&
                this.state.selectCatergoryIndex === index ? (
                  <TouchableOpacity
                    onPress={() => {
                      this._renderSubCategories(index);
                    }}>
                    <View style={styles.signContainer}>
                      <Text style={styles.sign}>-</Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      this._renderSubCategories(index);
                    }}>
                    <View style={styles.signContainer}>
                      <Text style={styles.sign}>+</Text>
                    </View>
                  </TouchableOpacity>
                )}
              </View>

              {this.state.showData &&
              this.state.selectCatergoryIndex === index ? (
                <FlatList
                  data={item.subCatergories}
                  extraData={this.state}
                  style={{flex: 1}}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item: subCatergories}) => (
                    <View style={styles.innerContainer}>
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate('CategoriesData',{name:subCatergories})
                        }>
                        <Text style={styles.innerContainerText}>
                          {subCatergories}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                />
              ) : null}
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
export default ShopByCategories;
