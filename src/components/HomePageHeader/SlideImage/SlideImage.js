import React, {Component} from 'react';
import {Text, View} from 'react-native';

class SlideImage extends Component {
  render() {
    return (
      <View>
        <View style={{backgroundColor: UiColor.GRAY_BACKGROUND}}>
          <SliderBox
            ImageComponentStyle={{
              borderRadius: 10,
              marginBottom: 30,
              marginTop: 20,
              backgroundColor: UiColor.GRAY,
            }}
            imageLoadingColor={UiColor.ORANGE}
            sliderBoxHeight={120}
            dotColor={UiColor.ORANGE}
            dotStyle={styles.slideDot}
            paginationBoxVerticalPadding={0}
            autoplay
            circleLoop
            inactiveDotColor={TextColor.GRAY}
            images={imagecollection}
          />
        </View>
      </View>
    );
  }
}
export default SlideImage;
