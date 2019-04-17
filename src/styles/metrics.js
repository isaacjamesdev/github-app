import { Dimensions } from 'react-native'
const { widht, height } = Dimensions.get('window');
export default {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 3,
  screenWidth: widht < height ? widht : height,
  screenHeight: widht < height ? height : widht
}
  ;
