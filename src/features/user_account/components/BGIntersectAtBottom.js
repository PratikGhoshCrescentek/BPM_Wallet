import { StyleSheet, View } from 'react-native'
import { SvgXml } from 'react-native-svg';
import svg_xml from '../../../infrastructure/iconAndImages/global_svgs';


export default function custom_bgOverlay(){
  return(
<View style={styles.intersectImage}>
<SvgXml xml={svg_xml.intersectImageAtBottom} />
</View> 
  )
}
const styles = StyleSheet.create({
  intersectImage: 
  {
    position: 'absolute',
    width: '100%',
    height: 93.5,
    right: 0,
    bottom: 0},
    StepIndicatorContainer: {position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    height: 93.5,
    right: 0,
    top: 80
    
  },
});