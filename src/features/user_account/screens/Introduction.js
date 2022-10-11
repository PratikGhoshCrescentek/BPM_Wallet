import React,{Component} from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, SafeAreaView } from 'react-native'
import { SvgXml } from 'react-native-svg';
import svg_xml from '../../../infrastructure/iconAndImages/global_svgs';
import styles from '../styles/styles_introduction';

export default class Profile extends Component {
  

  render() {

    return(
      
      <View style ={styles.container}>
       
<SafeAreaView>
<View style={styles.logoIconContainer}>
<SvgXml xml={svg_xml.intro_logo} />
</View>

<View style={styles.BText}>
<SvgXml xml={svg_xml.BXML} />
<SvgXml xml={svg_xml.PXML} left={4}/>
<SvgXml xml={svg_xml.MXML} left={7}/>
</View>

<View style={styles.walletTextContainer}>
<SvgXml xml={svg_xml.WXML} />
<SvgXml xml={svg_xml.AXML} left={2} />
<SvgXml xml={svg_xml.L1XML} left={8} top={-6}/>
<SvgXml xml={svg_xml.L2XML} left={14} top={-6}/>
<SvgXml xml={svg_xml.EXML} left={17}/>
<SvgXml xml={svg_xml.TXML} left={19} top={-4}/>
</View>
          </SafeAreaView>


          <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignInPage')}
                style={styles.SignInButton}>
                  <SvgXml xml={svg_xml.nextBtnXMLForIntroduction} />
                </TouchableOpacity>


                <View style = {styles.donthaveanAccount}>
<Text style={styles.donthaveanAccountText}>{"Don't have an account? "}</Text> 
<TouchableOpacity
      style={styles.SignUp}
      onPress={() => this.props.navigation.navigate('SignUpPersonalDetailsPage')}>
    <Text style={styles.signupText}>
      Sign Up
    </Text>
    </TouchableOpacity>
</View>

      </View>
      
    );
  }

}
