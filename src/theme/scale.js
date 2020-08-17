import {Dimensions} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth =  400;

export const scaleSize = (size) => 
    (WINDOW_WIDTH / guidelineBaseWidth) * size;