import React,{Component} from 'react';
import { Keyboard, View, Text, Platform, ScrollView, TouchableOpacity, SafeAreaView, TextInput, Dimensions } from 'react-native'
import { SvgXml } from 'react-native-svg';
import KeyboardManager from 'react-native-keyboard-manager';
import LinearGradient from 'react-native-linear-gradient';
import SignInBtn from '../components/SignInBtnUI';
import BGIntersectAtTop from '../components/BGIntersectAtTop';
import svg_xml from '../../../infrastructure/iconAndImages/global_svgs';
import color from '../../../infrastructure/theme/colors';
import styles from '../styles/styles_signin';


export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      email: '',
      password: '',
      errEmail: false,
      errPassword: false,
      TextBoxBorderColor: color.TextBoxBorderColor.primary,
      TextBoxPlaceholderColor: color.TextBoxPlaceholderColor.primary,
      PWDTextBoxBorderColor: color.TextBoxBorderColor.primary,
      PWDTextBoxPlaceholderColor: color.TextBoxPlaceholderColor.primary,
      crossEmailVisible: false,
      crossPasswordVisible: false,
      passwordHiddenShowVisible: true,
      emailErrorText: '',
      passwordErrorText: '',
      PasswordHiddenShow: svg_xml.PasswordHidden,
      crossXMLForEmail: svg_xml.crossXML,
      crossXMLForPWD: svg_xml.crossXML,

    };
   
  }
  componentDidMount = async () => 
  {
  
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
<ScrollView keyboardShouldPersistTaps={'always'} style={styles.scrollViewStyle}>

<View style={styles.titleLabelContainer}>
<Text style={styles.titleText}>
Hello. Welcome to BPM Wallet! 👋🏼
    </Text>
</View>

<View style={styles.SignInTitleContainer}>
<Text style={styles.SignInTitleText}>
Sign in to your account
    </Text>
</View>

       <View style={styles.LoginBody}>
              <Text style={styles.plainText}>Email Address</Text>
              <View style={[styles.inputContainer, 
                { borderColor: this.state.TextBoxBorderColor}]}>
                <View style={styles.inputIcon}>
                  <SvgXml width={20} xml={svg_xml.userXMLforSignIn} />
                </View>
                <TextInput
                  value={this.state.email}
                  onBlur={ () => this.onBlurEmail() }
        onFocus={ () => this.onFocusEmail() }
                  onChangeText={(text) => this.typingEmail(text)}
                  placeholder="Enter Email Address"
                  placeholderTextColor={this.state.TextBoxPlaceholderColor}
                  keyboardType="email-address"
                  style={styles.inputTag}
                />
              {this.state.crossEmailVisible && <TouchableOpacity
      style={styles.inputIconCheck}
      onPress={() => this.clearEmailText()}>
                  <SvgXml width={20} xml={this.state.crossXMLForEmail} />
                  </TouchableOpacity> }
              </View> 

              {this.state.errEmail && <Text style={styles.errText}>{this.state.emailErrorText}</Text> }
           
              <Text style={[styles.plainText, { marginTop: 32 }]}>Password</Text>
              <View style={[styles.inputContainer, 
                { borderColor: this.state.PWDTextBoxBorderColor}]}>
                <View style={styles.inputIcon}>
                  <SvgXml width={20} xml={svg_xml.PasswordXMLforSignIn} />
                </View>
                <TextInput
                onBlur={ () => this.onBlurPWD() }
                onFocus={ () => this.onFocusPWD() }
                  value={this.state.password}
                  onChangeText={(text) => this.typingPassword(text)}
                  placeholder="Enter Password"
                  placeholderTextColor={this.state.PWDTextBoxPlaceholderColor}
                  keyboardType='default'
                  secureTextEntry={this.state.passwordHiddenShowVisible}
                  style={styles.inputTag}
                />

{ this.state.crossPasswordVisible && <TouchableOpacity onPress={() => this.clearPasswordText()} style={styles.inputIconCheckForPasswordCross}>
                  <SvgXml width={20} xml={this.state.crossXMLForPWD} />
                </TouchableOpacity> }

                { this.state.crossPasswordVisible && <TouchableOpacity onPress={() => this.passwordHiddenOrShow()} style={styles.inputIconCheckForPasswordHiddenOrShow}>
                  <SvgXml width={20} xml={this.state.PasswordHiddenShow} />
                </TouchableOpacity> }
              </View>

              {this.state.errPassword && <Text style={styles.errText}>{this.state.passwordErrorText}</Text> }

              <TouchableOpacity
      style={styles.ForgotPasswordContainer}
      onPress={() => this.props.navigation.navigate('ForgotPasswordPage')}>
              <Text style={[styles.ForgotPasswordText, { marginTop: 12 }]}>Forgot Password?</Text>
              </TouchableOpacity>


              <View style={[styles.ForgotPasswordContainer, {marginTop: 20}]}>          
<SignInBtn style={{marginTop: 100}} width= {96} height= {36} borderRadius={18} text={'Sign in'} isArrowShown={true} onPress={() => this.signInBtnPressed()}></SignInBtn>
</View>
              
            </View>
            </ScrollView>

          </SafeAreaView>
          

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

  signInBtnPressed = () =>
  {
    Keyboard.dismiss()
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (this.state.email.trim() == '' && this.state.password.trim() == '')
    {
      this.setState({errEmail: true, errPassword: true, emailErrorText: 'Email Address field can not be blank',
    passwordErrorText: 'Password field can not be blank', 
    TextBoxBorderColor: color.TextBoxBorderColor.error, PWDTextBoxBorderColor: color.TextBoxBorderColor.error})
    }
    else if (this.state.email.trim() == '')
    {
      this.setState({errEmail: true, emailErrorText: 'Email Address field can not be blank', TextBoxBorderColor: color.TextBoxBorderColor.error
    })
    }
    else if (this.state.password.trim() == '')
    {
      this.setState({errPassword: true, passwordErrorText: 'Password field can not be blank', PWDTextBoxBorderColor: color.TextBoxBorderColor.error})
    }
    else if (reg.test(this.state.email.trim()) === false) {
      
      this.setState({errEmail: true, emailErrorText: 'Email is Not Correct', TextBoxBorderColor: color.TextBoxBorderColor.error
    })
    }
    else 
    {
      this.setState({errEmail: false, TextBoxBorderColor: color.TextBoxBorderColor.primary, PWDTextBoxBorderColor: color.TextBoxBorderColor.primary})
    }
  }

  onFocusEmail() {
    this.setState({
        TextBoxBorderColor: color.TextBoxBorderColor.selected,
        TextBoxPlaceholderColor: color.TextBoxPlaceholderColor.selected,
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
    this.setState({errEmail: true, emailErrorText: 'Email Address field can not be blank',
    TextBoxBorderColor: color.TextBoxBorderColor.error, })
    }
    else if (reg.test(this.state.email.trim()) === false) 
    {
      this.setState({errEmail: true, emailErrorText: 'Email is Not Correct', TextBoxBorderColor: color.TextBoxBorderColor.error
    })
    }
    else 
    {
      this.setState({errEmail: false, TextBoxBorderColor: color.TextBoxBorderColor.primary, 
      PWDTextBoxBorderColor: color.TextBoxBorderColor.primary, crossEmailVisible: true,
      crossXMLForEmail: svg_xml.tickXML
    })
    }

  }

  onFocusPWD() {
    this.setState({
      PWDTextBoxBorderColor: color.TextBoxBorderColor.selected,
      PWDTextBoxPlaceholderColor: color.TextBoxPlaceholderColor.selected,
      
        
    })
  }

  onBlurPWD() {
    this.setState({
      PWDTextBoxBorderColor: color.TextBoxBorderColor.primary,
      PWDTextBoxPlaceholderColor: color.TextBoxPlaceholderColor.primary,
      crossPasswordVisible: false
    })

    if (this.state.password.trim() == '')
    {
      this.setState({errPassword: true, passwordErrorText: 'Password field can not be blank', PWDTextBoxBorderColor: color.TextBoxBorderColor.error})
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

  typingPassword = (text) =>
  {
    this.setState({password: text, crossPasswordVisible: true, errPassword: false})
      console.log('heee dlaskdj')
    
  }
  clearPasswordText = () =>
  {
    this.setState({password: '', crossPasswordVisible: false})
  }
  passwordHiddenOrShow= () =>
  {
if (this.state.passwordHiddenShowVisible == true)
{
  this.setState({passwordHiddenShowVisible: false, PasswordHiddenShow: svg_xml.PasswordHidden})
}
else
{
  this.setState({passwordHiddenShowVisible: true, PasswordHiddenShow: svg_xml.PasswordShow})
}
  }

}

