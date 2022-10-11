import React,{Component, useState} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { SvgXml } from 'react-native-svg';
import BGIntersectAtTop from '../components/BGIntersectAtTop';
import svg_xml from '../../../infrastructure/iconAndImages/global_svgs';
import styles from '../styles/styles_checkmail';
import SignInBtn from '../components/SignInBtnUI';

export default class Profile extends Component {
 

  OpenEmailAppBtnPressed = () =>
  {
    this.props.navigation.navigate('CreateNewPasswordPage')
  }
  
  render() {


    return (
      
      <View style ={styles.container}>

<BGIntersectAtTop></BGIntersectAtTop>

<SafeAreaView>

<View style={styles.logoIconContainer}>
<SvgXml xml={svg_xml.checkEmailLogoXML} />
</View>

<View style={styles.titleLabelContainer}>
<Text style={styles.titleText}>
Check your mail
    </Text>
</View>

<View style={styles.SignInTitleContainer}>
<Text style={styles.SignInTitleText}>
We have sent password recovery
    </Text>
</View>

<View style={[styles.SignInTitleContainer,{marginTop: 25}]}>
<Text style={styles.SignInTitleText}>
instructions to your email.
    </Text>
</View>

<View style={styles.LoginBody}>
<View
style={[styles.OpenEmailTextContainer, {marginTop: 35}]}>
  <SignInBtn style={{marginTop: 100}} width= {138} height= {36} borderRadius={18} 
  text={'Open email app'} isArrowShown={false} onPress={() => this.OpenEmailAppBtnPressed()}></SignInBtn>
</View>

<View style={[styles.SkipTitleContainer]}>
<Text style={styles.SkipTitleText}>
Skip, I’ll confirm later
    </Text>
</View>
  </View>
            

          </SafeAreaView>
          
          <View style = {styles.donthaveanAccount}>
<Text style={styles.donthaveanAccountText}>{"Didn’t receive an email? Check your junk"}</Text> 
</View>

<View style = {styles.donthaveanAccount1}>
<Text style={styles.donthaveanAccountText}>{" folder or "}</Text> 
<TouchableOpacity
      style={styles.SignUp}
      onPress={() => this.props.navigation.goBack()}>
    <Text style={styles.signupText}>
    try with another email address
    </Text>
    </TouchableOpacity>
</View>
      </View>

      
    );
  }


}
