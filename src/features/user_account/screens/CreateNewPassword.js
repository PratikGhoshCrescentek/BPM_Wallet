import React,{Component} from 'react';
import { Keyboard, View, Text, Platform, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import { SvgXml } from 'react-native-svg';
import KeyboardManager from 'react-native-keyboard-manager';
import BGIntersectAtTop from '../components/BGIntersectAtTop';
import svg_xml from '../../../infrastructure/iconAndImages/global_svgs';
import color from '../../../infrastructure/theme/colors';
import styles from '../styles/styles_createnewpassword';
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
      confirm_email: '',
      confirm_emailErrorText: '',
      confirm_errEmail: false,
      confirm_crossEmailVisible: false,
      confirm_tickVisible: false,
      confirm_TextBoxBorderColor: color.TextBoxBorderColor.primary,
      confirm_TextBoxPlaceholderColor: color.TextBoxPlaceholderColor.primary,
      TickXML: svg_xml.tickXML_grey
    

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

        confirm_email: '',
        confirm_emailErrorText: '',
        confirm_errEmail: false,
        confirm_crossEmailVisible: false,
        confirm_tickVisible: false,
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
Create new password
    </Text>
</View>

<View style={styles.SignInTitleContainer}>
<Text style={styles.SignInTitleText}>
Your new password must be different from previous used passwords.
    </Text>
</View>

<ScrollView
        // keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps={'always'} style={styles.LoginBody}>
              <Text style={styles.plainText}>New password</Text>
              <View style={[styles.inputContainer, 
                {borderColor: this.state.TextBoxBorderColor}]}>
                <View style={styles.inputIcon}>
                  <SvgXml width={20} xml={svg_xml.PasswordXMLforSignIn} />
                </View>
                <TextInput
                  value={this.state.email}
                  onBlur={ () => this.onBlurEmail() }
        onFocus={ () => this.onFocusEmail() }
                  onChangeText={(text) => this.typingEmail(text)}
                  placeholder="Enter Email Address"
                  placeholderTextColor={this.state.TextBoxPlaceholderColor}
                  keyboardType='default'
                  style={styles.inputTag}
                  secureTextEntry={true}
                />
              {this.state.crossEmailVisible && <TouchableOpacity
      style={styles.inputIconCheck}
      onPress={() => this.clearEmailText()}>
                  <SvgXml width={20} xml={svg_xml.crossXML} />
                  </TouchableOpacity> }
              </View> 

              {this.state.errEmail && <Text style={styles.errText}>{this.state.emailErrorText}</Text> }

<Text style={[styles.plainText, { marginTop: 32 }]}>Confirm new password</Text>
              <View style={[styles.inputContainer, 
                {borderColor: this.state.confirm_TextBoxBorderColor}]}>
               <View style={styles.inputIcon}>
                  <SvgXml width={20} xml={this.state.TickXML} />
                </View>
                <TextInput
                  value={this.state.confirm_email}
                  onBlur={ () => this.onBlurConfirmEmail() }
        onFocus={ () => this.onFocusConfirmEmail() }
                  onChangeText={(text) => this.typingConfirmEmail(text)}
                  placeholder="Confirm your password"
                  placeholderTextColor={this.state.confirm_TextBoxPlaceholderColor}
                  keyboardType='default'
                  style={styles.inputTag}
                  secureTextEntry={true}
                />
              {this.state.confirm_crossEmailVisible && <TouchableOpacity
      style={styles.inputIconCheck}
      onPress={() => this.clearConfirmEmailText()}>
                  <SvgXml width={20} xml={svg_xml.crossXML} />
                  </TouchableOpacity> }
              </View> 

              {this.state.confirm_errEmail && <Text style={styles.errText}>{this.state.confirm_emailErrorText}</Text> }

           <View
style={[styles.ForgotPasswordContainer, {marginTop: 35}]}>
  <SignInBtn style={{marginTop: 100}} width= {160} height= {36} borderRadius={18} 
  text={'Reset Password'} isArrowShown={true} onPress={() => this.nextBtnPressed()}></SignInBtn>
</View>
              
            </ScrollView>


          </SafeAreaView>
          

      </View>     
      
    );
  }

  nextBtnPressed = () =>
  {
    Keyboard.dismiss()
    

    if (this.state.email.trim() == '' && this.state.confirm_email.trim() == '')
    {
      this.setState({errEmail: true, confirm_errEmail: true, emailErrorText: 'Password field can not be blank',
      confirm_emailErrorText: 'Confirm Password field can not be blank', 
    TextBoxBorderColor: color.TextBoxBorderColor.error, confirm_TextBoxBorderColor: color.TextBoxBorderColor.error})
    }
    else if (this.state.email.trim() == '')
    {
      this.setState({errEmail: true, emailErrorText: 'Password field can not be blank', TextBoxBorderColor: color.TextBoxBorderColor.error})
    }
    else if (this.state.confirm_email.trim() == '')
    {
      this.setState({confirm_errEmail: true,
        confirm_emailErrorText: 'Confirm Password field can not be blank', 
    confirm_TextBoxBorderColor: color.TextBoxBorderColor.error})
    }
    else if (this.state.email != this.state.confirm_email)
    {
      this.setState({confirm_errEmail: true,
        confirm_emailErrorText: 'Confirm Password did not match', 
    confirm_TextBoxBorderColor: color.TextBoxBorderColor.error})
    }
    else
    {
      this.props.navigation.navigate('ResetPasswordDonePage')
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
  }

  onFocusConfirmEmail() {
    this.setState({
      confirm_TextBoxBorderColor: color.TextBoxBorderColor.selected,
      confirm_TextBoxPlaceholderColor: color.TextBoxPlaceholderColor.selected
        
    })
  }

  onBlurConfirmEmail() {
    this.setState({
      confirm_TextBoxBorderColor: color.TextBoxBorderColor.primary,
      confirm_TextBoxPlaceholderColor: color.TextBoxPlaceholderColor.primary,
      confirm_crossEmailVisible: false
    })
  }
  typingEmail = (text) =>
  {
    this.setState({email: text, crossEmailVisible: true, errEmail: false})
    
  }
  clearEmailText = () =>
  {
    this.setState({email: '', crossEmailVisible: false})
  }

  typingConfirmEmail = (text) =>
  {
    this.setState({confirm_email: text, confirm_crossEmailVisible: true, confirm_errEmail: false})
    if (this.state.email == text)
    {
      this.setState({TickXML: svg_xml.tickXML})
    }
    else{
      this.setState({TickXML: svg_xml.tickXML_grey})
    }
  }
  clearConfirmEmailText = () =>
  {
    this.setState({confirm_email: '', confirm_crossEmailVisible: false, TickXML: svg_xml.tickXML_grey})
  }

}
