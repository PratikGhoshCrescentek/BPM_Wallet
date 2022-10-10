import React,{Component, useState} from 'react';
import { Modal, StatusBar, Keyboard, ActivityIndicator, View, Text, ImageBackground, StyleSheet, AsyncStorage, Platform, FlatList, ScrollView, TouchableOpacity, Linking, SafeAreaView, TextInput, Image, Dimensions } from 'react-native'
import { SvgXml } from 'react-native-svg';
import SignInBtn from '../components/SignInBtnUI';
import KeyboardManager from 'react-native-keyboard-manager';
const userXML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00036 7.99998C10.0517 7.99998 11.7146 6.33704 11.7146 4.2857C11.7146 2.23435 10.0517 0.571411 8.00036 0.571411C5.94901 0.571411 4.28607 2.23435 4.28607 4.2857C4.28607 6.33704 5.94901 7.99998 8.00036 7.99998Z" stroke="#969696" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.0632 15.4286C14.5834 13.9324 13.6409 12.6273 12.3715 11.7013C11.1022 10.7753 9.57156 10.2764 8.00036 10.2764C6.42915 10.2764 4.89853 10.7753 3.62918 11.7013C2.35982 12.6273 1.4173 13.9324 0.9375 15.4286H15.0632Z" stroke="#969696" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const logoXML = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_68_4640)">
<path d="M5.46182 9.14282V3.42854C5.46182 2.82233 5.70264 2.24095 6.13129 1.81229C6.55995 1.38364 7.14133 1.14282 7.74754 1.14282H19.1761M19.1761 1.14282L30.6047 12.5714M19.1761 1.14282V12.5714H30.6047M30.6047 12.5714V28.5714C30.6047 29.1776 30.3639 29.759 29.9352 30.1876C29.5066 30.6163 28.9252 30.8571 28.319 30.8571H20.319M8.31896 14.8571V18.2857M8.31896 18.2857C5.79423 18.2857 3.74754 20.3324 3.74754 22.8571C3.74754 25.3818 5.79423 27.4285 8.31896 27.4285M8.31896 18.2857C10.8437 18.2857 12.8904 20.3324 12.8904 22.8571C12.8904 25.3818 10.8437 27.4285 8.31896 27.4285M1.39325 18.8571L4.36468 20.5714M1.39325 26.8571L4.36468 25.1428M8.31896 30.8571V27.4285M15.2447 26.8571L12.2732 25.1428M15.2447 18.8571L12.2732 20.5714" stroke="white" stroke-width="2.28571" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_68_4640">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>`;

const confirmEmailXML = `<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.8223 1.74859C9.45428 1.37374 9.01487 1.07644 8.53003 0.874263C8.04519 0.672082 7.52475 0.569117 6.99944 0.57145C5.93858 0.57145 4.92116 0.992877 4.17101 1.74302C3.42087 2.49317 2.99944 3.51058 2.99944 4.57145V6.28574M2.42801 6.28574H11.5709C12.2021 6.28574 12.7137 6.79741 12.7137 7.42859V14.2857C12.7137 14.9169 12.2021 15.4286 11.5709 15.4286H2.42801C1.79683 15.4286 1.28516 14.9169 1.28516 14.2857V7.42859C1.28516 6.79741 1.79683 6.28574 2.42801 6.28574ZM7.57087 10.8572C7.57087 11.1728 7.31503 11.4286 6.99944 11.4286C6.68385 11.4286 6.42801 11.1728 6.42801 10.8572C6.42801 10.5416 6.68385 10.2857 6.99944 10.2857C7.31503 10.2857 7.57087 10.5416 7.57087 10.8572Z" stroke="#969696" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;


const intersectImage = `<svg width="375" height="89" viewBox="0 0 375 89" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3508 15.0958C30.0746 43.3877 49.0092 70.5475 85.5 59.7861C122.138 48.9813 130.186 54.3241 144.221 63.6413C156.452 71.7614 173.231 82.9 217.443 88.9999H0V0.570557C3.53608 5.32071 6.95515 10.225 10.3508 15.0958ZM375 77.6401C369.288 76.6131 361.531 78.6302 350.539 81.4886C341.529 83.8314 330.346 86.7394 316.333 88.9999H375V77.6401Z" fill="url(#paint0_linear_84_6853)"/>
<defs>
<linearGradient id="paint0_linear_84_6853" x1="187.5" y1="0.570557" x2="187.5" y2="88.9999" gradientUnits="userSpaceOnUse">
<stop stop-color="#7878E7"/>
<stop offset="1" stop-color="#1982B3"/>
</linearGradient>
</defs>
</svg>
`;

const BackIconXML = `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.25161 13.6061C6.58634 13.9408 7.12906 13.9408 7.46379 13.6061C7.79853 13.2713 7.79853 12.7286 7.46379 12.3939L2.92703 7.85712L23.1429 7.85712C23.6162 7.85712 24 7.47336 24 6.99997C24 6.52659 23.6162 6.14283 23.1429 6.14283L2.92703 6.14283L7.46379 1.60607C7.79853 1.27133 7.79853 0.728618 7.46379 0.393883C7.12906 0.0591478 6.58634 0.0591478 6.25161 0.393883L0.269794 6.3757C0.103704 6.53202 0 6.75389 0 6.99997C0 7.24606 0.103704 7.46793 0.269794 7.62425L6.25161 13.6061Z" fill="white"/>
</svg>`;

const unionColor1 = `<svg width="136" height="18" viewBox="0 0 136 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C13.2832 18 16.8675 15.008 17.777 11H118.223C119.132 15.008 122.717 18 127 18C131.971 18 136 13.9706 136 9C136 4.02944 131.971 0 127 0C122.717 0 119.132 2.99202 118.223 7H17.777C16.8675 2.99202 13.2832 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z" fill="url(#paint0_linear_198_1076)"/>
<defs>
<linearGradient id="paint0_linear_198_1076" x1="68" y1="0" x2="68" y2="18" gradientUnits="userSpaceOnUse">
<stop stop-color="#00E4D8"/>
<stop offset="0.506433" stop-color="#03BFB5"/>
<stop offset="1" stop-color="#0B7F79"/>
</linearGradient>
</defs>
</svg>
`;

const unionColor2 = `<svg width="113" height="4" viewBox="0 0 113 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="113" height="4" fill="#222222"/>
</svg>`;

const unionColor3 = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" r="9" fill="#222222"/>
</svg>`;

const unionColor4 = `<svg width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.01488 13.52C3.03888 12.6347 3.84421 11.9093 4.43088 11.344C5.02821 10.768 5.52421 10.1707 5.91888 9.552C6.31354 8.93333 6.51088 8.31467 6.51088 7.696C6.51088 7.056 6.35621 6.55467 6.04688 6.192C5.74821 5.82933 5.27354 5.648 4.62288 5.648C3.99354 5.648 3.50288 5.85067 3.15088 6.256C2.80954 6.65067 2.62821 7.184 2.60688 7.856H0.846875C0.878875 6.64 1.24154 5.712 1.93488 5.072C2.63888 4.42133 3.52954 4.096 4.60688 4.096C5.76954 4.096 6.67621 4.416 7.32688 5.056C7.98821 5.696 8.31888 6.54933 8.31888 7.616C8.31888 8.384 8.12154 9.12533 7.72688 9.84C7.34288 10.544 6.87888 11.1787 6.33488 11.744C5.80154 12.2987 5.11888 12.944 4.28688 13.68L3.56688 14.32H8.63888V15.84H0.862875V14.512L2.01488 13.52ZM16.4013 0.895999L12.0493 18.8H10.2573L14.5933 0.895999H16.4013ZM18.428 7.216C18.492 6.224 18.8707 5.45067 19.564 4.896C20.268 4.34133 21.164 4.064 22.252 4.064C22.9987 4.064 23.644 4.19733 24.188 4.464C24.732 4.73067 25.1427 5.09333 25.42 5.552C25.6973 6.01067 25.836 6.528 25.836 7.104C25.836 7.76533 25.66 8.33067 25.308 8.8C24.956 9.26933 24.5347 9.584 24.044 9.744V9.808C24.6733 10 25.164 10.352 25.516 10.864C25.868 11.3653 26.044 12.0107 26.044 12.8C26.044 13.4293 25.9 13.9893 25.612 14.48C25.324 14.9707 24.8973 15.36 24.332 15.648C23.7667 15.9253 23.0893 16.064 22.3 16.064C21.148 16.064 20.1987 15.7707 19.452 15.184C18.716 14.5867 18.3213 13.7333 18.268 12.624H20.028C20.0707 13.1893 20.2893 13.6533 20.684 14.016C21.0787 14.368 21.612 14.544 22.284 14.544C22.9347 14.544 23.436 14.368 23.788 14.016C24.14 13.6533 24.316 13.1893 24.316 12.624C24.316 11.8773 24.076 11.3493 23.596 11.04C23.1267 10.72 22.4013 10.56 21.42 10.56H21.004V9.056H21.436C22.3 9.04533 22.956 8.90133 23.404 8.624C23.8627 8.34667 24.092 7.90933 24.092 7.312C24.092 6.8 23.9267 6.39467 23.596 6.096C23.2653 5.78667 22.796 5.632 22.188 5.632C21.5907 5.632 21.1267 5.78667 20.796 6.096C20.4653 6.39467 20.268 6.768 20.204 7.216H18.428Z" fill="white"/>
</svg>`;

const stepper = `<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3223 1.74847C10.9543 1.37362 10.5149 1.07632 10.03 0.874141C9.54519 0.67196 9.02475 0.568995 8.49944 0.571328C7.43858 0.571328 6.42116 0.992755 5.67101 1.7429C4.92087 2.49305 4.49944 3.51046 4.49944 4.57133V6.28561M3.92801 6.28561H13.0709C13.7021 6.28561 14.2137 6.79729 14.2137 7.42847V14.2856C14.2137 14.9168 13.7021 15.4285 13.0709 15.4285H3.92801C3.29683 15.4285 2.78516 14.9168 2.78516 14.2856V7.42847C2.78516 6.79729 3.29683 6.28561 3.92801 6.28561ZM9.07087 10.857C9.07087 11.1726 8.81503 11.4285 8.49944 11.4285C8.18385 11.4285 7.92801 11.1726 7.92801 10.857C7.92801 10.5415 8.18385 10.2856 8.49944 10.2856C8.81503 10.2856 9.07087 10.5415 9.07087 10.857Z" stroke="#969696" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {

      date: '',
      dateTextBoxBackgroundColor: 'null',
      dateTextBoxBorderColor: '#4F4F4F',
      dateTextBoxPlaceholderColor: '#4F4F4F',

      month: '',
      monthTextBoxBackgroundColor: 'null',
      monthTextBoxBorderColor: '#4F4F4F',
      monthTextBoxPlaceholderColor: '#4F4F4F',

      year: '',
      yearTextBoxBackgroundColor: 'null',
      yearTextBoxBorderColor: '#4F4F4F',
      yearTextBoxPlaceholderColor: '#4F4F4F',

      dobErrorText: '',
      errDob: false,

      email: '',
      password: '',
      errEmail: false,
      HasSentEmail: false,
      errPassword: false,
      TextBoxBackgroundColor: 'null',
      TextBoxBorderColor: '#4F4F4F',
      TextBoxPlaceholderColor: '#4F4F4F',
      PWDTextBoxBackgroundColor: 'null',
      PWDTextBoxBorderColor: '#4F4F4F',
      PWDTextBoxPlaceholderColor: '#4F4F4F',
      crossEmailVisible: false,
      crossPasswordVisible: false,
      passwordHiddenShowVisible: true,
      emailErrorText: '',
      passwordErrorText: '',
      showEmailDiv: false,
      showConfirmedEmailDiv: true,
      PasswordHiddenShow: `<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.1184 5.2343C15.308 5.4443 15.4129 5.71713 15.4129 6.00002C15.4129 6.2829 15.308 6.55573 15.1184 6.76573C13.9184 8.05716 11.187 10.5714 7.99843 10.5714C4.80986 10.5714 2.07843 8.05716 0.878429 6.76573C0.688897 6.55573 0.583984 6.2829 0.583984 6.00002C0.583984 5.71713 0.688897 5.4443 0.878429 5.2343C2.07843 3.94287 4.80986 1.42859 7.99843 1.42859C11.187 1.42859 13.9184 3.94287 15.1184 5.2343Z" stroke="white" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.99817 8.28573C9.26054 8.28573 10.2839 7.26238 10.2839 6.00002C10.2839 4.73765 9.26054 3.7143 7.99817 3.7143C6.73581 3.7143 5.71246 4.73765 5.71246 6.00002C5.71246 7.26238 6.73581 8.28573 7.99817 8.28573Z" stroke="white" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      nextBtnXML : `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="28" fill="#222222"/>
      <g clip-path="url(#clip0_63_3525)">
      <path d="M33.7486 21.3939C33.4139 21.0591 32.8712 21.0591 32.5365 21.3939C32.2017 21.7286 32.2017 22.2713 32.5365 22.6061L37.0732 27.1428H16.8574C16.384 27.1428 16.0002 27.5266 16.0002 28C16.0002 28.4734 16.384 28.8571 16.8574 28.8571H37.0732L32.5365 33.3939C32.2017 33.7286 32.2017 34.2713 32.5365 34.6061C32.8712 34.9408 33.4139 34.9408 33.7486 34.6061L39.7304 28.6242C39.8965 28.4679 40.0002 28.2461 40.0002 28C40.0002 27.7539 39.8965 27.532 39.7304 27.3757L33.7486 21.3939Z" fill="#4F4F4F"/>
      </g>
      <defs>
      <clipPath id="clip0_63_3525">
      <rect width="24" height="24" fill="white" transform="translate(16 16)"/>
      </clipPath>
      </defs>
      </svg>`,
      crossXMLForFName: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM10.8294 9.88561C11.0897 10.146 11.0897 10.5681 10.8294 10.8284C10.569 11.0888 10.1469 11.0888 9.88657 10.8284L8.00061 8.94246L6.11463 10.8284C5.85428 11.0888 5.43217 11.0888 5.17182 10.8284C4.91148 10.5681 4.91148 10.146 5.17182 9.88563L7.0578 7.99965L5.17252 6.11437C4.91217 5.85402 4.91217 5.43191 5.17252 5.17157C5.43287 4.91122 5.85498 4.91122 6.11533 5.17157L8.00061 7.05684L9.88587 5.17159C10.1462 4.91124 10.5683 4.91124 10.8287 5.17159C11.089 5.43194 11.089 5.85405 10.8287 6.1144L8.94342 7.99965L10.8294 9.88561Z" fill="white"/>
</svg>
`,

crossXMLForLName: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM10.8294 9.88561C11.0897 10.146 11.0897 10.5681 10.8294 10.8284C10.569 11.0888 10.1469 11.0888 9.88657 10.8284L8.00061 8.94246L6.11463 10.8284C5.85428 11.0888 5.43217 11.0888 5.17182 10.8284C4.91148 10.5681 4.91148 10.146 5.17182 9.88563L7.0578 7.99965L5.17252 6.11437C4.91217 5.85402 4.91217 5.43191 5.17252 5.17157C5.43287 4.91122 5.85498 4.91122 6.11533 5.17157L8.00061 7.05684L9.88587 5.17159C10.1462 4.91124 10.5683 4.91124 10.8287 5.17159C11.089 5.43194 11.089 5.85405 10.8287 6.1144L8.94342 7.99965L10.8294 9.88561Z" fill="white"/>
</svg>
`,

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
<View style={styles.intersectImage}>
<SvgXml xml={intersectImage} />
</View> 
        <StatusBar backgroundColor='#4387bb' barStyle={'light-content'} />
<SafeAreaView>

<View style={styles.StepIndicatorContainer}>
<TouchableOpacity
onPress={() => this.props.navigation.goBack()} style={styles.backIconContainer}>
<SvgXml xml={BackIconXML} />
</TouchableOpacity>
<View style={{marginLeft: 36}}>
<SvgXml left={16} xml={unionColor1}/></View>
<View style={{marginTop: 7}}>
<SvgXml left={16} xml={unionColor2}/></View>
<View>
<SvgXml left={16} xml={unionColor3}/></View>
<View style={{marginLeft: 15}}>
<SvgXml left={16} xml={unionColor4}/></View>
</View>


<View style={styles.logoIconContainer}>
<SvgXml xml={logoXML} />
</View>

<View style={styles.titleLabelContainer1}>
<Text style={styles.titleText}>
Account details
    </Text>
</View>

<View style={styles.SignInTitleContainer}>
<Text style={styles.SignInTitleText}>
Please enter and confirm both your email 
    </Text>
</View>

<View style={[styles.SignInTitleContainer,{marginTop: 25}]}>
<Text style={styles.SignInTitleText}>
address and password below.
    </Text>
</View>

<View style={styles.LoginBody}>
{this.state.showConfirmedEmailDiv && <View><View style={styles.passwordLockContainer}>
        <View style={{alignSelf: 'center', marginTop: 22}}>
<SvgXml xml={stepper} />
</View>
<Text style={styles.PasswordTitle}>Password</Text>
</View>
</View>}
  {this.state.showEmailDiv && <View>
              <Text style={styles.plainText}>Email address</Text>
              <View style={[styles.inputContainer, 
                {backgroundColor: this.state.TextBoxBackgroundColor, borderColor: this.state.TextBoxBorderColor}]}>
                <View style={styles.inputIcon}>
                  <SvgXml width={20} xml={userXML} />
                </View>
                <TextInput
                  value={this.state.email}
                  onBlur={ (e) => this.onBlurEmail(e.nativeEvent.text) }
                  
        onFocus={ () => this.onFocusEmail() }
                  onChangeText={(text) => this.typingEmail(text)}
                  placeholder="Enter email address"
                  placeholderTextColor={this.state.TextBoxPlaceholderColor}
                  keyboardType='default'
                  style={styles.inputTag}
                />
              {this.state.crossEmailVisible && <TouchableOpacity
      style={styles.inputIconCheck}
      onPress={() => this.clearEmailText()}>
                  <SvgXml width={20} xml={this.state.crossXMLForFName} />
                  </TouchableOpacity> }
              </View> 

              {this.state.errEmail && <Text style={styles.errText}>{this.state.emailErrorText}</Text> }
           
              <Text style={[styles.plainText, { marginTop: 22 }]}>Confirm email address</Text>
              <View style={[styles.inputContainer, 
                {backgroundColor: this.state.PWDTextBoxBackgroundColor, borderColor: this.state.PWDTextBoxBorderColor}]}>
                <View style={styles.inputIcon}>
                  <SvgXml width={20} xml={confirmEmailXML} />
                </View>
                <TextInput
                onBlur={ (e) => this.onBlurPWD(e.nativeEvent.text) }
                onFocus={ () => this.onFocusPWD() }
                  value={this.state.password}
                  onChangeText={(text) => this.typingPassword(text)}
                  placeholder="Confirm email address"
                  placeholderTextColor={this.state.PWDTextBoxPlaceholderColor}
                  keyboardType='default'
                  style={styles.inputTag}
                />

{ this.state.crossPasswordVisible && <TouchableOpacity onPress={() => this.clearPasswordText()} style={styles.inputIconCheckForPasswordCross}>
                  <SvgXml width={20} xml={this.state.crossXMLForLName} />
                </TouchableOpacity> }

        
              </View>

              {this.state.errPassword && <Text style={styles.errText}>{this.state.passwordErrorText}</Text> }
              {this.state.HasSentEmail && <Text style={styles.sentEmailText}>{'We’ve sent a confirmation email to you. Please confirm your email address before continuing.'}</Text> }
              </View>}
              <View style={styles.passwordLockContainer}>
        <View style={{alignSelf: 'center', marginTop: 22}}>
<SvgXml xml={stepper} />
</View>
<Text style={styles.PasswordTitle}>Password</Text>
</View>

              {/* <Text style={[styles.plainText, { marginTop: 22 }]}>Date of birth</Text> */}
              <View style={{width: '60%', flexDirection: 'row'}}>
              
              </View>
              {this.state.errDob && <Text style={styles.errText}>{this.state.dobErrorText}</Text> }
              
            </View>
            

          </SafeAreaView>
          
          <View style = {{width: 343, position:'absolute',bottom:60,alignSelf:'flex-end', justifyContent: 'flex-end'}}>
              <TouchableOpacity
// onPress={() => this.OpenEmailAppBtnPressed()}
style={[styles.ForgotPasswordContainer, {marginTop: 35}]}>
  <SvgXml xml={this.state.nextBtnXML} />
</TouchableOpacity></View>
                

      </View>
      

      

     
      
    );
  }

  onFocusEmail() {
    this.setState({
        TextBoxBackgroundColor: '#4F4F4F',
        TextBoxBorderColor: 'white',
        TextBoxPlaceholderColor: 'white'
        
    })
  }

  onBlurEmail(text) {

     console.log('text11156 is', text)

    this.setState({
      TextBoxBackgroundColor: 'transparent',
      TextBoxBorderColor: '#4F4F4F',
      TextBoxPlaceholderColor: '#4F4F4F',
      // crossEmailVisible: false
    })

if (text.trim() != '')
{
  this.setState({crossXMLForFName: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_198_7292)">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.63569 8.4544C1.37534 8.71475 1.37534 9.13686 1.63569 9.39721L4.92063 12.6821C4.92535 12.6872 4.93016 12.6921 4.93507 12.697C5.06322 12.8252 5.23056 12.8903 5.39851 12.8922C5.57192 12.8944 5.74602 12.8294 5.87833 12.697C5.8833 12.6921 5.88817 12.687 5.89295 12.682L14.3632 4.21175C14.6235 3.9514 14.6235 3.52929 14.3632 3.26894C14.1028 3.00859 13.6807 3.00859 13.4203 3.26894L5.4067 11.2826L2.5785 8.4544C2.31815 8.19405 1.89604 8.19405 1.63569 8.4544Z" fill="#008533"/>
  </g>
  <defs>
  <clipPath id="clip0_198_7292">
  <rect width="16" height="16" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  ` })
}

this.checkAllValidations(text)

  }
  

  onFocusPWD() {
    this.setState({
      PWDTextBoxBackgroundColor: '#4F4F4F',
      PWDTextBoxBorderColor: 'white',
      PWDTextBoxPlaceholderColor: 'white',
      
        
    })
  }

  onBlurPWD(text) {
    this.setState({
      PWDTextBoxBackgroundColor: 'transparent',
      PWDTextBoxBorderColor: '#4F4F4F',
      PWDTextBoxPlaceholderColor: '#4F4F4F',
      // crossPasswordVisible: false
    })
    if (text.trim() != '' && text.trim() == this.state.email)
    {
      this.setState({HasSentEmail: true,crossXMLForLName: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_198_7292)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.63569 8.4544C1.37534 8.71475 1.37534 9.13686 1.63569 9.39721L4.92063 12.6821C4.92535 12.6872 4.93016 12.6921 4.93507 12.697C5.06322 12.8252 5.23056 12.8903 5.39851 12.8922C5.57192 12.8944 5.74602 12.8294 5.87833 12.697C5.8833 12.6921 5.88817 12.687 5.89295 12.682L14.3632 4.21175C14.6235 3.9514 14.6235 3.52929 14.3632 3.26894C14.1028 3.00859 13.6807 3.00859 13.4203 3.26894L5.4067 11.2826L2.5785 8.4544C2.31815 8.19405 1.89604 8.19405 1.63569 8.4544Z" fill="#008533"/>
      </g>
      <defs>
      <clipPath id="clip0_198_7292">
      <rect width="16" height="16" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      ` })

      
    }
    else
    {
      this.setState({errPassword: true, crossPasswordVisible: false, passwordErrorText: 'Confirmed Email did not match'})
    }

    // this.checkAllValidations(text)
    
  }


  resetNextButton = (text) =>
  {
    this.setState({nextBtnXML: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" rx="28" fill="#222222"/>
    <g clip-path="url(#clip0_63_3525)">
    <path d="M33.7486 21.3939C33.4139 21.0591 32.8712 21.0591 32.5365 21.3939C32.2017 21.7286 32.2017 22.2713 32.5365 22.6061L37.0732 27.1428H16.8574C16.384 27.1428 16.0002 27.5266 16.0002 28C16.0002 28.4734 16.384 28.8571 16.8574 28.8571H37.0732L32.5365 33.3939C32.2017 33.7286 32.2017 34.2713 32.5365 34.6061C32.8712 34.9408 33.4139 34.9408 33.7486 34.6061L39.7304 28.6242C39.8965 28.4679 40.0002 28.2461 40.0002 28C40.0002 27.7539 39.8965 27.532 39.7304 27.3757L33.7486 21.3939Z" fill="#4F4F4F"/>
    </g>
    <defs>
    <clipPath id="clip0_63_3525">
    <rect width="24" height="24" fill="white" transform="translate(16 16)"/>
    </clipPath>
    </defs>
    </svg>`})
  }

  checkAllValidations = (text) =>
  {

    if (this.state.email.trim() != '' && this.state.password.trim() != '' && 
    this.state.date.trim() != '' && this.state.month.trim() != '' && this.state.year.trim() != ''
    && (parseInt(this.state.year, 10) > 2000) && (parseInt(this.state.month, 10) < 13) && (parseInt(this.state.date, 10) < 32))
    {
      this.setState({nextBtnXML: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="28" fill="url(#paint0_linear_72_5514)"/>
      <g clip-path="url(#clip0_72_5514)">
      <path d="M33.7489 21.3939C33.4141 21.0591 32.8714 21.0591 32.5367 21.3939C32.202 21.7286 32.202 22.2713 32.5367 22.6061L37.0735 27.1428H16.8576C16.3842 27.1428 16.0005 27.5266 16.0005 28C16.0005 28.4734 16.3842 28.8571 16.8576 28.8571H37.0735L32.5367 33.3939C32.202 33.7286 32.202 34.2713 32.5367 34.6061C32.8714 34.9408 33.4141 34.9408 33.7489 34.6061L39.7307 28.6242C39.8968 28.4679 40.0005 28.2461 40.0005 28C40.0005 27.7539 39.8968 27.532 39.7307 27.3757L33.7489 21.3939Z" fill="white"/>
      </g>
      <defs>
      <linearGradient id="paint0_linear_72_5514" x1="28" y1="0" x2="28" y2="56" gradientUnits="userSpaceOnUse">
      <stop stop-color="#03BFB5"/>
      <stop offset="1" stop-color="#0B7F79"/>
      </linearGradient>
      <clipPath id="clip0_72_5514">
      <rect width="24" height="24" fill="white" transform="translate(16 16)"/>
      </clipPath>
      </defs>
      </svg>
      `})
    }
  }
  typingEmail = (text) =>
  {
    this.setState({email: text, crossEmailVisible: true, errEmail: false})
    this.resetNextButton()
  }
  clearEmailText = () =>
  {
    this.setState({email: '', crossEmailVisible: false})
  }

  typingPassword = (text) =>
  {
    this.setState({password: text, crossPasswordVisible: true, errPassword: false})
    this.resetNextButton()
    
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

}

const styles = StyleSheet.create({
  titleLabelContainer: {
    flexDirection: 'row',
    position: 'absolute',
left: 16,
top: 156,
  },
  titleLabelContainer1: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
top: 191,
  },
  SignInTitleContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
top: 250,
  },
  titleText: {
    // width: 343,
    height: 172, 
    fontFamily: 'Poppins-Light',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 28
      },
      SignInTitleText: {
        // width: 343,
        height: 72, 
        fontFamily: 'Poppins-Light',
        fontWeight: '400',
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
          },

     LoginBody: {
        width: '100%',
        position: 'absolute',
top: 330,
        flexDirection: 'column',
      },
      plainText: {
        marginBottom: 10,
        color: 'white',
        marginLeft: 16,
marginRight: 16,
fontFamily: 'Poppins-Light',
fontWeight: '500',
fontSize: 16
      },
      ForgotPasswordText: {
        color: '#03BFB5',
fontFamily: 'Poppins-Light',
fontWeight: '400',
fontSize: 12,
      },
      ForgotPasswordContainer: {
        marginBottom: 10,
        marginRight: 16,
alignSelf: 'flex-end'
      },
      inputContainer: {
        borderWidth: 1,
        height: 50,
        alignItems: 'center',
        // borderColor: '#4F4F4F',
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 4
        
      },
      inputContainerForDOB: {
        borderWidth: 1,
        height: 50,
        width: '30%',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 10,
        borderRadius: 4
        
      },
      inputContainerForMonth: {
        borderWidth: 1,
        height: 50,
        width: '30%',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 10,
        borderRadius: 4
        
      },
      inputContainerForYear: {
        borderWidth: 1,
        height: 50,
        width: '40%',
        alignItems: 'center',
        flexDirection: 'row',
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
marginTop: -35,
marginLeft: 20
      },
      inputIconCheckForPasswordCross: {
        // backgroundColor: GlobalStyle.colorSet.iconBackGround,
        height: '100%',
        width: 50,
        justifyContent: 'flex-end',
marginTop: -32,
marginLeft: 20
      },
      inputIconCheckForPasswordHiddenOrShow: {
        // backgroundColor: GlobalStyle.colorSet.iconBackGround,
        height: '100%',
        width: 50,
        justifyContent: 'flex-end',
marginTop: -35,
marginLeft: -25
      },
      inputTag: {
        width: '73%',
        paddingLeft: 0,
        paddingRight: 3,
        color: 'white',
        fontFamily: 'Poppins-Light',
fontWeight: '400',
fontSize: 14,
paddingRight: 10,
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
    paddingTop: 4, paddingBottom: 4,  fontSize: 16, color: 'white'
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
  fontWeight: '400',
  fontSize: 12
  },
  sentEmailText: {
    marginTop: 5,
    color: '#BEBEBE',
    fontSize: 11,
    marginBottom: -15,
    alignSelf: 'flex-start',
    marginLeft: 16,
    marginRight: 16,
    fontFamily: 'Poppins-Light',
fontWeight: '400',
fontSize: 12
},
    signupText: {
      color: '#000', fontSize: 15.2, color: '#03BFB5',
    },
    intersectImage: {position: 'absolute',
    width: '100%',
    height: 93.5,
    right: 0,
    bottom: 0},
    StepIndicatorContainer: {position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    height: 93.5,
    right: 0,
    top: 80},
    backIconContainer: {
      flexDirection: 'row',
      position: 'absolute',
      left: 16,
  // top: 74,
  // backgroundColor: 'red',
    },
    logoIconContainer: {
      flexDirection: 'row',
      position: 'absolute',
  top: 130,
  alignSelf: 'center'
  // backgroundColor: 'red',
    },
    PasswordTitle: { marginTop: 5, alignSelf: 'center', color: '#969696', fontFamily: 'Poppins-Light',
    fontWeight: '400', fontSize: 14, },
    passwordLockContainer: {marginTop: 40, marginLeft: 16, marginRight: 16, height: 80, borderWidth: 1,
      borderColor: '#4F4F4F', borderRadius: 4}


})