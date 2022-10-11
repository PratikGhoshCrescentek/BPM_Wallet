import React,{Component} from 'react';
import { Keyboard, View, Text, Platform, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import { SvgXml } from 'react-native-svg';
import KeyboardManager from 'react-native-keyboard-manager';
import BGIntersectAtTop from '../components/BGIntersectAtTop';
import svg_xml from '../../../infrastructure/iconAndImages/global_svgs';
import color from '../../../infrastructure/theme/colors';
import styles from '../styles/styles_forgotpassword';
import SignInBtn from '../components/SignInBtnUI';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      email: '',
      emailErrorText: '',
      errEmail: false,
      TextBoxBorderColor: color.TextBoxBorderColor.primary,
      TextBoxPlaceholderColor: color.TextBoxPlaceholderColor.primary,
      crossEmailVisible: false,
    
    };
   
  }
  componentDidMount = async () => 
  {
    this.focusListener = this.props.navigation.addListener('focus', () => {

      this.setState({
        email: '',
        emailErrorText: '',
        errEmail: false,
        crossEmailVisible: false,
    })
     
    });

    if (Platform.OS === 'ios') {
      KeyboardManager.setEnable(true);
    }
    
  }
  
  render() {

   const { open, value, items } = this.state;

    return (
      
      <View style ={styles.container}>
<BGIntersectAtTop></BGIntersectAtTop>
<SafeAreaView>

<TouchableOpacity
onPress={() => this.props.navigation.goBack()} style={styles.backIconContainer}>
<SvgXml xml={svg_xml.BackIconXML} />
</TouchableOpacity>

<View style={styles.logoIconContainer}>
<SvgXml xml={svg_xml.forgotPasswordLogoXML} />
</View>

<View style={styles.titleLabelContainer}>
<Text style={styles.titleText}>
Forgot your password?
    </Text>
</View>

<View style={styles.SignInTitleContainer}>
<Text style={styles.SignInTitleText}>
Enter the email address assosiated with your account and we’ll send an email with instructions to reset your password.
    </Text>
</View>

       <ScrollView
        keyboardShouldPersistTaps={'always'} style={styles.LoginBody}>
              <Text style={styles.plainText}>Email Address</Text>
              <View style={[styles.inputContainer, 
                {backgroundColor: this.state.TextBoxBackgroundColor, borderColor: this.state.TextBoxBorderColor}]}>
                <View style={styles.inputIcon}>
                  <SvgXml width={20} xml={svg_xml.forgotPasswordMailXML} />
                </View>
                <TextInput
                  value={this.state.email}
                  onBlur={ () => this.onBlurEmail() }
        onFocus={ () => this.onFocusEmail() }
                  onChangeText={(text) => this.typingEmail(text)}
                  placeholder="Enter Email Address"
                  placeholderTextColor={this.state.TextBoxPlaceholderColor}
                  keyboardType="email-address"
                  autoCapitalize={false}
                  style={styles.inputTag}
                />
              {this.state.crossEmailVisible && <TouchableOpacity
      style={styles.inputIconCheck}
      onPress={() => this.clearEmailText()}>
                  <SvgXml width={20} xml={svg_xml.crossXML} />
                  </TouchableOpacity> }
              </View> 

              {this.state.errEmail && <Text style={styles.errText}>{this.state.emailErrorText}</Text> }
           
              

           <View
style={[styles.ForgotPasswordContainer, {marginTop: 35}]}>
  <SignInBtn style={{marginTop: 100}} width= {171} height= {36} borderRadius={18} text={'Send instructions'} isArrowShown={true} onPress={() => this.nextBtnPressed()}></SignInBtn>
</View>
              
            </ScrollView>


          </SafeAreaView>

      </View>
      
    );
  }

  nextBtnPressed = () =>
  {
    Keyboard.dismiss()
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

     if (this.state.email.trim() == '')
    {
      this.setState({errEmail: true, emailErrorText: 'Email Address field can not be blank'
    })
    }
    else if (reg.test(this.state.email.trim()) === false) {
      
      this.setState({errEmail: true, emailErrorText: 'Email is Not Correct'
    })
    }
    else 
    {
      this.setState({errEmail: false})
      this.props.navigation.navigate('CheckMailPage')
    }
  }

  onFocusEmail() {
    this.setState({
        TextBoxBorderColor: color.TextBoxBorderColor.selected,
        TextBoxPlaceholderColor: color.TextBoxPlaceholderColor.selected
        
    })
  }

  onBlurEmail() {
    this.setState({
      TextBoxBorderColor: color.TextBoxBorderColor.primary,
      TextBoxPlaceholderColor: color.TextBoxPlaceholderColor.primary,
      crossEmailVisible: false
    })

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

     if (this.state.email.trim() == '')
    {
      this.setState({errEmail: true, emailErrorText: 'Email Address field can not be blank', TextBoxBorderColor: color.TextBoxBorderColor.error
    })
    }
    else if (reg.test(this.state.email.trim()) === false) {
      
      this.setState({errEmail: true, emailErrorText: 'Email is Not Correct',TextBoxBorderColor: color.TextBoxBorderColor.error
    })
    }
    else 
    {

    }
  }
  typingEmail = (text) =>
  {
    this.setState({email: text, crossEmailVisible: true, errEmail: false})
    
  }
  clearEmailText = () =>
  {
    this.setState({email: '', crossEmailVisible: false})
  }

}
