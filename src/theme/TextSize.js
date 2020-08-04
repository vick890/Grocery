import {Platform} from 'react-native';
import {totalSize} from '../utils/Dimensions';

export const TextSize = {
  bigSize: Platform.OS === 'ios' ? totalSize(3.4) : totalSize(3.6),
  h1: Platform.OS === 'ios' ? totalSize(3) : totalSize(3.2),
  h2: Platform.OS === 'ios' ? totalSize(2.6) : totalSize(2.8),

  h3: Platform.OS === 'ios' ? totalSize(2.4) : totalSize(2.6),

  h4: Platform.OS === 'ios' ? totalSize(2.2) : totalSize(2.4),
  h5: Platform.OS === 'ios' ? totalSize(2) : totalSize(2.2),
  h6: Platform.OS === 'ios' ? totalSize(1.8) : totalSize(2),
  h7: Platform.OS === 'ios' ? totalSize(1.6) : totalSize(1.8),
  h8: Platform.OS === 'ios' ? totalSize(1.4) : totalSize(1.6),
  h9: Platform.OS === 'ios' ? totalSize(1.2) : totalSize(1.4),
};
