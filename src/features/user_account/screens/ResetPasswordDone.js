import React,{Component} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { SvgXml } from 'react-native-svg';
import BGIntersectAtTop from '../components/BGIntersectAtTop';
import svg_xml from '../../../infrastructure/iconAndImages/global_svgs';
import styles from '../styles/styles_resetpassword';
import SignInBtn from '../components/SignInBtnUI';

export default class Profile extends Component {

  render() {

    return (
      
      <View style ={styles.container}>
<BGIntersectAtTop></BGIntersectAtTop>

<SafeAreaView>

<View style={styles.logoIconContainer}>
<SvgXml xml={svg_xml.bigTickXML} />
</View>

<View style={styles.titleLabelContainer}>
<Text style={styles.titleText}>
Congrats!
    </Text>
</View>

<View style={styles.SignInTitleContainer}>
<Text style={styles.SignInTitleText}>
Your password has been successfully
    </Text>
</View>
<View style={[styles.SignInTitleContainer,{marginTop: 24}]}>
<Text style={styles.SignInTitleText}>
reset.
    </Text>
</View>


<View style={styles.LoginBody}>
<View
style={[styles.ForgotPasswordContainer, {marginTop: 35}]}>
  <SignInBtn style={{marginTop: 100}} width= {96} height= {36} borderRadius={18} text={'Sign in'} isArrowShown={true} onPress={() => this.props.navigation.navigate('SignInPage')}></SignInBtn>
</View>
</View>

</SafeAreaView>   

<View style = {styles.donthaveanAccount1}>
<Text style={styles.donthaveanAccountText}>{""}</Text> 
<TouchableOpacity
      style={styles.SignUp}
      >
    <Text style={styles.signupText}>
    Back to homepage
    </Text>
    </TouchableOpacity>
</View>

</View>
      
    );
  }

}
