import { StyleSheet, View } from 'react-native'
import { SvgXml } from 'react-native-svg';
import svg_xml from '../../../infrastructure/iconAndImages/global_svgs';


export default function custom_bgOverlay(){
  return(
<View style={styles.intersectImage}>
<SvgXml xml={svg_xml.intersectImage} />
</View> 
  )
}
const styles = StyleSheet.create({
  intersectImage: 
  {
    position: 'absolute',
    width: 95.83,
    height: 219.55,
    right: 0,
    top: 0
  }
});