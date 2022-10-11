import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { SvgXml } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import svg_xml from '../../../infrastructure/iconAndImages/global_svgs';
import font from '../../../infrastructure/theme/fonts';


export default function custom_button({width, height, borderRadius, text, isArrowShown, onPress}){
  return(
      
<TouchableOpacity
onPress={onPress}
style={{borderWidth:1}}>
  <LinearGradient colors={['#03BFB5', '#0B7F79']} style={{borderRadius: borderRadius, 
    flexDirection: 'row', width: width, height: height, alignItems: 'center', justifyContent: 'center'}}>
 {isArrowShown && <SvgXml xml={svg_xml.nextBtnArrow} /> }
  <Text style={styles.textLabel}>
    {text}
  </Text>
</LinearGradient>
</TouchableOpacity>



  )
}
const styles = StyleSheet.create({
  textLabel: 
  {
    color: 'white', 
    paddingLeft: 5,
    fontFamily: font.body,
    fontWeight: '500',
    fontSize: 14

  },
  SignInButton: {borderWidth:1, flexDirection: 'row'},
  text:{
      fontWeight:'bold', 
      color:'white', 
      fontSize:16
  }
});