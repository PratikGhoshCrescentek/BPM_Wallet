import React,{Component, useState} from 'react';
import { Modal, StatusBar, Keyboard, ActivityIndicator, View, Text, ImageBackground, StyleSheet, AsyncStorage, Platform, FlatList, ScrollView, TouchableOpacity, Linking, SafeAreaView, TextInput, Image, Dimensions } from 'react-native'
import { SvgXml } from 'react-native-svg';
import SignInBtn from '../components/SignInBtnUI';
import KeyboardManager from 'react-native-keyboard-manager';
import svg_xml from '../infrastructure/iconAndImages/global_svgs';



export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      email: '',
      password: '',
      errEmail: false,
      errPassword: false,
      TextBoxBackgroundColor: '#222222',
      TextBoxBorderColor: '#4F4F4F',
      TextBoxPlaceholderColor: '#969696',
      PWDTextBoxBackgroundColor: '#222222',
      PWDTextBoxBorderColor: '#4F4F4F',
      PWDTextBoxPlaceholderColor: '#969696',
      crossEmailVisible: false,
      crossPasswordVisible: false,
      passwordHiddenShowVisible: true,
      emailErrorText: '',
      passwordErrorText: '',
      PasswordHiddenShow: `<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.1184 5.2343C15.308 5.4443 15.4129 5.71713 15.4129 6.00002C15.4129 6.2829 15.308 6.55573 15.1184 6.76573C13.9184 8.05716 11.187 10.5714 7.99843 10.5714C4.80986 10.5714 2.07843 8.05716 0.878429 6.76573C0.688897 6.55573 0.583984 6.2829 0.583984 6.00002C0.583984 5.71713 0.688897 5.4443 0.878429 5.2343C2.07843 3.94287 4.80986 1.42859 7.99843 1.42859C11.187 1.42859 13.9184 3.94287 15.1184 5.2343Z" stroke="white" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.99817 8.28573C9.26054 8.28573 10.2839 7.26238 10.2839 6.00002C10.2839 4.73765 9.26054 3.7143 7.99817 3.7143C6.73581 3.7143 5.71246 4.73765 5.71246 6.00002C5.71246 7.26238 6.73581 8.28573 7.99817 8.28573Z" stroke="white" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      crossXMLForEmail: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM10.8294 9.88561C11.0897 10.146 11.0897 10.5681 10.8294 10.8284C10.569 11.0888 10.1469 11.0888 9.88657 10.8284L8.00061 8.94246L6.11463 10.8284C5.85428 11.0888 5.43217 11.0888 5.17182 10.8284C4.91148 10.5681 4.91148 10.146 5.17182 9.88563L7.0578 7.99965L5.17252 6.11437C4.91217 5.85402 4.91217 5.43191 5.17252 5.17157C5.43287 4.91122 5.85498 4.91122 6.11533 5.17157L8.00061 7.05684L9.88587 5.17159C10.1462 4.91124 10.5683 4.91124 10.8287 5.17159C11.089 5.43194 11.089 5.85405 10.8287 6.1144L8.94342 7.99965L10.8294 9.88561Z" fill="white"/>
</svg>
`,
crossXMLForPWD: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM10.8294 9.88561C11.0897 10.146 11.0897 10.5681 10.8294 10.8284C10.569 11.0888 10.1469 11.0888 9.88657 10.8284L8.00061 8.94246L6.11463 10.8284C5.85428 11.0888 5.43217 11.0888 5.17182 10.8284C4.91148 10.5681 4.91148 10.146 5.17182 9.88563L7.0578 7.99965L5.17252 6.11437C4.91217 5.85402 4.91217 5.43191 5.17252 5.17157C5.43287 4.91122 5.85498 4.91122 6.11533 5.17157L8.00061 7.05684L9.88587 5.17159C10.1462 4.91124 10.5683 4.91124 10.8287 5.17159C11.089 5.43194 11.089 5.85405 10.8287 6.1144L8.94342 7.99965L10.8294 9.88561Z" fill="white"/>
</svg>`,

    };
   
  }
  componentDidMount = async () => 
  {
  
    if (Platform.OS === 'ios') {
      KeyboardManager.setEnable(true);
    }
  }
  typingEmail = (text) =>
  {
    this.setState({email: text, crossEmailVisible: true, errEmail: false})

   
      console.log('heee dlaskdj')
    
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
  this.setState({passwordHiddenShowVisible: false, PasswordHiddenShow: `<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.0458 5.17149C14.4801 5.56006 14.8458 5.9372 15.1201 6.23435C15.3096 6.44435 15.4146 6.71718 15.4146 7.00006C15.4146 7.28294 15.3096 7.55577 15.1201 7.76577C13.9201 9.0572 11.1887 11.5715 8.00011 11.5715H7.54297M4.42324 10.5772C3.09939 9.83579 1.90321 8.88656 0.880382 7.76579C0.690851 7.55579 0.585937 7.28296 0.585938 7.00008C0.585937 6.7172 0.690851 6.44437 0.880382 6.23436C2.08038 4.94294 4.81181 2.42865 8.00038 2.42865C9.25727 2.45492 10.4874 2.79683 11.5775 3.42294M14.2863 0.714355L1.71484 13.2858M6.38913 8.6115C5.95989 8.18481 5.7174 7.6053 5.71484 7.00007C5.71484 6.39386 5.95566 5.81248 6.38431 5.38383C6.81297 4.95517 7.39435 4.71436 8.00056 4.71436C8.60579 4.71691 9.1853 4.9594 9.61199 5.38864M9.98894 8.14292C9.7855 8.4907 9.49374 8.77851 9.14323 8.97721" stroke="white" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`})
}
else
{
  this.setState({passwordHiddenShowVisible: true, PasswordHiddenShow: `<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.1184 5.2343C15.308 5.4443 15.4129 5.71713 15.4129 6.00002C15.4129 6.2829 15.308 6.55573 15.1184 6.76573C13.9184 8.05716 11.187 10.5714 7.99843 10.5714C4.80986 10.5714 2.07843 8.05716 0.878429 6.76573C0.688897 6.55573 0.583984 6.2829 0.583984 6.00002C0.583984 5.71713 0.688897 5.4443 0.878429 5.2343C2.07843 3.94287 4.80986 1.42859 7.99843 1.42859C11.187 1.42859 13.9184 3.94287 15.1184 5.2343Z" stroke="white" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.99817 8.28573C9.26054 8.28573 10.2839 7.26238 10.2839 6.00002C10.2839 4.73765 9.26054 3.7143 7.99817 3.7143C6.73581 3.7143 5.71246 4.73765 5.71246 6.00002C5.71246 7.26238 6.73581 8.28573 7.99817 8.28573Z" stroke="white" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`})
}
  }

  signInBtnPressed = () =>
  {
    Keyboard.dismiss()
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (this.state.email.trim() == '' && this.state.password.trim() == '')
    {
      this.setState({errEmail: true, errPassword: true, emailErrorText: 'Email Address field can not be blank',
    passwordErrorText: 'Password field can not be blank', 
    TextBoxBorderColor: 'red', PWDTextBoxBorderColor: 'red'})
    }
    else if (this.state.email.trim() == '')
    {
      this.setState({errEmail: true, emailErrorText: 'Email Address field can not be blank', TextBoxBorderColor: 'red'
    })
    }
    else if (this.state.password.trim() == '')
    {
      this.setState({errPassword: true, passwordErrorText: 'Password field can not be blank', PWDTextBoxBorderColor: 'red'})
    }
    else if (reg.test(this.state.email.trim()) === false) {
      
      this.setState({errEmail: true, emailErrorText: 'Email is Not Correct', TextBoxBorderColor: 'red'
    })
    }
    else 
    {
      this.setState({errEmail: false, TextBoxBorderColor: '#4F4F4F', PWDTextBoxBorderColor: '#4F4F4F'})
    }
  }
  
  render() {

   const { open, value, items } = this.state;

    return (
      
      <View style ={styles.container}>
<View style={styles.intersectImage}>
<SvgXml xml={svg_xml.intersectImage} />
</View> 
        <StatusBar backgroundColor='#4387bb' barStyle={'light-content'} />
<SafeAreaView>
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

<ScrollView
        keyboardShouldPersistTaps={'always'} style={styles.LoginBody}>
              <Text style={styles.plainText}>Email Address</Text>
              <View style={[styles.inputContainer, 
                {backgroundColor: this.state.TextBoxBackgroundColor, borderColor: this.state.TextBoxBorderColor}]}>
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
                {backgroundColor: this.state.PWDTextBoxBackgroundColor, borderColor: this.state.PWDTextBoxBorderColor}]}>
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
<SignInBtn style={{marginTop: 100}} onPress={() => this.signInBtnPressed()}></SignInBtn>
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

  onFocusEmail() {
    this.setState({
        TextBoxBorderColor: 'white',
        TextBoxPlaceholderColor: '#BEBEBE',
        crossXMLForEmail: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM10.8294 9.88561C11.0897 10.146 11.0897 10.5681 10.8294 10.8284C10.569 11.0888 10.1469 11.0888 9.88657 10.8284L8.00061 8.94246L6.11463 10.8284C5.85428 11.0888 5.43217 11.0888 5.17182 10.8284C4.91148 10.5681 4.91148 10.146 5.17182 9.88563L7.0578 7.99965L5.17252 6.11437C4.91217 5.85402 4.91217 5.43191 5.17252 5.17157C5.43287 4.91122 5.85498 4.91122 6.11533 5.17157L8.00061 7.05684L9.88587 5.17159C10.1462 4.91124 10.5683 4.91124 10.8287 5.17159C11.089 5.43194 11.089 5.85405 10.8287 6.1144L8.94342 7.99965L10.8294 9.88561Z" fill="white"/>
      </svg>
      `
    })
  }

  onBlurEmail() {
    this.setState({
      TextBoxBorderColor: '#4F4F4F',
      TextBoxPlaceholderColor: '#969696',
      crossEmailVisible: false
    })

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (this.state.email.trim() == '')
    {
      this.setState({errEmail: true, emailErrorText: 'Email Address field can not be blank',
    TextBoxBorderColor: 'red', })
    }
    else if (reg.test(this.state.email.trim()) === false) {
      
      this.setState({errEmail: true, emailErrorText: 'Email is Not Correct', TextBoxBorderColor: 'red'
    })
    }
    else 
    {
      this.setState({errEmail: false, TextBoxBorderColor: '#4F4F4F', 
      PWDTextBoxBorderColor: '#4F4F4F', crossEmailVisible: true,
      crossXMLForEmail: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_198_7292)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.63569 8.4544C1.37534 8.71475 1.37534 9.13686 1.63569 9.39721L4.92063 12.6821C4.92535 12.6872 4.93016 12.6921 4.93507 12.697C5.06322 12.8252 5.23056 12.8903 5.39851 12.8922C5.57192 12.8944 5.74602 12.8294 5.87833 12.697C5.8833 12.6921 5.88817 12.687 5.89295 12.682L14.3632 4.21175C14.6235 3.9514 14.6235 3.52929 14.3632 3.26894C14.1028 3.00859 13.6807 3.00859 13.4203 3.26894L5.4067 11.2826L2.5785 8.4544C2.31815 8.19405 1.89604 8.19405 1.63569 8.4544Z" fill="#008533"/>
  </g>
  <defs>
  <clipPath id="clip0_198_7292">
  <rect width="16" height="16" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  `
    })
    }

  }

  onFocusPWD() {
    this.setState({
      PWDTextBoxBorderColor: 'white',
      PWDTextBoxPlaceholderColor: '#BEBEBE',
      
        
    })
  }

  onBlurPWD() {
    this.setState({
      PWDTextBoxBorderColor: '#4F4F4F',
      PWDTextBoxPlaceholderColor: '#969696',
      crossPasswordVisible: false
    })

    if (this.state.password.trim() == '')
    {
      this.setState({errPassword: true, passwordErrorText: 'Password field can not be blank', PWDTextBoxBorderColor: 'red'})
    }
  }

}

const styles = StyleSheet.create({
  titleLabelContainer: {
    flexDirection: 'row',
    position: 'absolute',
left: 16,
top: 156,
  },
  SignInTitleContainer: {
    flexDirection: 'row',
    position: 'absolute',
left: 16,
top: 250,
  },
  titleText: {
width: 298,
height: 172, 
fontFamily: 'Poppins-SemiBold',
// fontWeight: 'bold',
color: 'white',
fontSize: 28
  },
  SignInTitleText: {
    width: 343,
    height: 24, 
    fontFamily: 'Poppins-Light',
    // fontWeight: '400',
    color: 'white',
    fontSize: 16
      },

     LoginBody: {
        width: '100%',
        position: 'absolute',
top: 300,
        flexDirection: 'column',
      },
      plainText: {
        marginBottom: 10,
        color: 'white',
        marginLeft: 16,
marginRight: 16,
fontFamily: 'Poppins-SemiBold',
// fontWeight: '500',
fontSize: 16
      },
      ForgotPasswordText: {
        color: '#03BFB5',
fontFamily: 'Poppins-Light',
// fontWeight: '400',
fontSize: 12,
      },
      ForgotPasswordContainer: {
        marginBottom: 10,
        marginRight: 16,
alignSelf: 'flex-end'
      },
      inputContainer: {
        borderWidth: 1,
        height: 36,
        alignItems: 'center',
        // borderColor: '#4F4F4F',
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 4
        
      },
      inputIcon: {
        // backgroundColor: GlobalStyle.colorSet.iconBackGround,
        height: '100%',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputIconCheck: {
        // backgroundColor: GlobalStyle.colorSet.iconBackGround,
        height: '100%',
        width: 50,
        justifyContent: 'flex-end',
marginTop: -20,
marginLeft: -30
      },
      inputIconCheckForPasswordCross: {
        // backgroundColor: GlobalStyle.colorSet.iconBackGround,
        height: '100%',
        width: 50,
        justifyContent: 'flex-end',
marginTop: -18,
marginLeft: -50
      },
      inputIconCheckForPasswordHiddenOrShow: {
        // backgroundColor: GlobalStyle.colorSet.iconBackGround,
        height: '100%',
        width: 50,
        justifyContent: 'flex-end',
marginTop: -20,
marginLeft: -25
      },
      inputTag: {
        width: '85%',
        paddingLeft: 0,
        paddingRight: 3,
        color: 'white',
        fontFamily: 'Poppins-Light',
// fontWeight: '400',
fontSize: 14,
paddingRight: 40
      },
  SignInButton: {borderWidth:1,position:'absolute',bottom:106,alignSelf:'center'},
  donthaveanAccount: {width: 343,flexDirection: 'row', borderWidth:1,position:'absolute',bottom:60,alignSelf:'center',
  alignItems: 'center', justifyContent: 'center'},
  container: {
    flex: 1,
      backgroundColor: "black",
    marginTop: 0,
    zIndex: 0,

  },
  donthaveanAccountText: {
    paddingTop: 4, paddingBottom: 4,  fontSize: 16, color: 'white', fontFamily: 'Poppins-Light',
    },
    SignUp: [
      {
        marginTop: 0,
        
        ...Platform.select({
          ios: {
            
           
          },
          android: {
            marginTop: 7.5
          },
        })
      },
    ],
    errText: {
      marginTop: 5,
      color: 'red',
      fontSize: 11,
      marginBottom: -15,
      alignSelf: 'flex-start',
      marginLeft: 16,
      marginRight: 16,
      fontFamily: 'Poppins-Light',
  // fontWeight: '400',
  fontSize: 12
  },
    signupText: {
      color: '#000', fontSize: 15.2, color: '#03BFB5', fontFamily: 'Poppins-Light',
      // fontWeight: '400',
    },
    intersectImage: {position: 'absolute',
    width: 95.83,
    height: 219.55,
    right: 0,
    top: 0}

})