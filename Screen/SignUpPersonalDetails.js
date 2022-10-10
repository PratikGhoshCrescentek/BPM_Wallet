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
<path d="M16.0007 16C20.1034 16 23.4293 12.6741 23.4293 8.57139C23.4293 4.46871 20.1034 1.14282 16.0007 1.14282C11.898 1.14282 8.57214 4.46871 8.57214 8.57139C8.57214 12.6741 11.898 16 16.0007 16Z" stroke="white" stroke-width="2.28571" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M30.1264 30.8571C29.1668 27.8648 27.2818 25.2545 24.7431 23.4026C22.2044 21.5507 19.1431 20.5527 16.0007 20.5527C12.8583 20.5527 9.79707 21.5507 7.25835 23.4026C4.71963 25.2545 2.83459 27.8648 1.875 30.8571H30.1264Z" stroke="white" stroke-width="2.28571" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const PasswordXML = `<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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

const unionColor1 = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" r="9" fill="url(#paint0_linear_263_4054)"/>
<defs>
<linearGradient id="paint0_linear_263_4054" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
<stop stop-color="#00E4D8"/>
<stop offset="0.506433" stop-color="#03BFB5"/>
<stop offset="1" stop-color="#0B7F79"/>
</linearGradient>
</defs>
</svg>`;

const unionColor2 = `<svg width="113" height="4" viewBox="0 0 113 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="113" height="4" fill="#222222"/>
</svg>`;

const unionColor3 = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="9" r="9" fill="#222222"/>
</svg>`;

const unionColor4 = `<svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.4075 6V4.336H3.7355V16H1.8955V6H0.4075ZM12.4013 0.895999L8.04925 18.8H6.25725L10.5933 0.895999H12.4013ZM14.428 7.216C14.492 6.224 14.8707 5.45067 15.564 4.896C16.268 4.34133 17.164 4.064 18.252 4.064C18.9987 4.064 19.644 4.19733 20.188 4.464C20.732 4.73067 21.1427 5.09333 21.42 5.552C21.6973 6.01067 21.836 6.528 21.836 7.104C21.836 7.76533 21.66 8.33067 21.308 8.8C20.956 9.26933 20.5347 9.584 20.044 9.744V9.808C20.6733 10 21.164 10.352 21.516 10.864C21.868 11.3653 22.044 12.0107 22.044 12.8C22.044 13.4293 21.9 13.9893 21.612 14.48C21.324 14.9707 20.8973 15.36 20.332 15.648C19.7667 15.9253 19.0893 16.064 18.3 16.064C17.148 16.064 16.1987 15.7707 15.452 15.184C14.716 14.5867 14.3213 13.7333 14.268 12.624H16.028C16.0707 13.1893 16.2893 13.6533 16.684 14.016C17.0787 14.368 17.612 14.544 18.284 14.544C18.9347 14.544 19.436 14.368 19.788 14.016C20.14 13.6533 20.316 13.1893 20.316 12.624C20.316 11.8773 20.076 11.3493 19.596 11.04C19.1267 10.72 18.4013 10.56 17.42 10.56H17.004V9.056H17.436C18.3 9.04533 18.956 8.90133 19.404 8.624C19.8627 8.34667 20.092 7.90933 20.092 7.312C20.092 6.8 19.9267 6.39467 19.596 6.096C19.2653 5.78667 18.796 5.632 18.188 5.632C17.5907 5.632 17.1267 5.78667 16.796 6.096C16.4653 6.39467 16.268 6.768 16.204 7.216H14.428Z" fill="white"/>
</svg>`;



export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {

      date: '',
      dateTextBoxBackgroundColor: '#222222',
      dateTextBoxBorderColor: '#4F4F4F',
      dateTextBoxPlaceholderColor: '#969696',

      month: '',
      monthTextBoxBackgroundColor: '#222222',
      monthTextBoxBorderColor: '#4F4F4F',
      monthTextBoxPlaceholderColor: '#969696',

      year: '',
      yearTextBoxBackgroundColor: '#222222',
      yearTextBoxBorderColor: '#4F4F4F',
      yearTextBoxPlaceholderColor: '#969696',

      dobErrorText: '',
      errDob: false,

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
A bit about you
    </Text>
</View>

<View style={styles.SignInTitleContainer}>
<Text style={styles.SignInTitleText}>
First, we need some personal details. Please 
    </Text>
</View>

<View style={[styles.SignInTitleContainer,{marginTop: 25}]}>
<Text style={styles.SignInTitleText}>
enter your name and date of birth.
    </Text>
</View>

<View style={styles.LoginBody}>
              <Text style={styles.plainText}>First name</Text>
              <View style={[styles.inputContainer, 
                {backgroundColor: this.state.TextBoxBackgroundColor, borderColor: this.state.TextBoxBorderColor}]}>
                
                <TextInput
                  value={this.state.email}
                  onBlur={ (e) => this.onBlurEmail(e.nativeEvent.text) }
                  
        onFocus={ () => this.onFocusEmail() }
                  onChangeText={(text) => this.typingEmail(text)}
                  placeholder="Enter first name..."
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
           
              <Text style={[styles.plainText, { marginTop: 22 }]}>Last name</Text>
              <View style={[styles.inputContainer, 
                {backgroundColor: this.state.PWDTextBoxBackgroundColor, borderColor: this.state.PWDTextBoxBorderColor}]}>
                
                <TextInput
                onBlur={ (e) => this.onBlurPWD(e.nativeEvent.text) }
                onFocus={ () => this.onFocusPWD() }
                  value={this.state.password}
                  onChangeText={(text) => this.typingPassword(text)}
                  placeholder="Enter last name..."
                  placeholderTextColor={this.state.PWDTextBoxPlaceholderColor}
                  keyboardType='default'
                  style={styles.inputTag}
                />

{ this.state.crossPasswordVisible && <TouchableOpacity onPress={() => this.clearPasswordText()} style={styles.inputIconCheckForPasswordCross}>
                  <SvgXml width={20} xml={this.state.crossXMLForLName} />
                </TouchableOpacity> }

        
              </View>

              {this.state.errPassword && <Text style={styles.errText}>{this.state.passwordErrorText}</Text> }
              
              <Text style={[styles.plainText, { marginTop: 22 }]}>Date of birth</Text>
              <View style={{width: '60%', flexDirection: 'row'}}>
              <View style={[styles.inputContainerForDOB, 
                {backgroundColor: this.state.dateTextBoxBackgroundColor, borderColor: this.state.dateTextBoxBorderColor}]}>
                
                <TextInput
                onBlur={ (e) => this.onBlurDate(e.nativeEvent.text) }
                onFocus={ () => this.onFocusDate() }
                maxLength={2}
                  value={this.state.date}
                  onChangeText={(text) => this.typingDate(text)}
                  placeholder="DD"
                  placeholderTextColor={this.state.dateTextBoxPlaceholderColor}
                  keyboardType='decimal-pad'
                  style={[styles.inputTag, {textAlign: 'center'}]}
                />
        
              </View>

              <View style={[styles.inputContainerForMonth, 
                {backgroundColor: this.state.monthTextBoxBackgroundColor, borderColor: this.state.monthTextBoxBorderColor}]}>
                
                <TextInput
                onBlur={ (e) => this.onBlurMonth(e.nativeEvent.text) }
                onFocus={ () => this.onFocusMonth() }
                maxLength={2}
                  value={this.state.month}
                  onChangeText={(text) => this.typingMonth(text)}
                  placeholder="MM"
                  placeholderTextColor={this.state.monthTextBoxPlaceholderColor}
                  keyboardType='decimal-pad'
                  style={[styles.inputTag, {textAlign: 'center'}]}
                />
        
              </View>

              <View style={[styles.inputContainerForYear, 
                {backgroundColor: this.state.yearTextBoxBackgroundColor, borderColor: this.state.yearTextBoxBorderColor}]}>
                
                <TextInput
                onBlur={ (e) => this.onBlurYear(e.nativeEvent.text) }
                onFocus={ () => this.onFocusYear() }
                maxLength={4}
                  value={this.state.year}
                  onChangeText={(text) => this.typingYear(text)}
                  placeholder="YYYY"
                  placeholderTextColor={this.state.yearTextBoxPlaceholderColor}
                  keyboardType='decimal-pad'
                  style={[styles.inputTag, {textAlign: 'center'}]}
                />
        
              </View>
              </View>
              {this.state.errDob && <Text style={[styles.errText, {marginBottom: 30}]}>{this.state.dobErrorText}</Text> }
              
            </View>

          </SafeAreaView>
          
          <View style = {{width: 343, position:'absolute',bottom:60,alignSelf:'flex-end', justifyContent: 'flex-end'}}>
              <TouchableOpacity
onPress={() => console.log('testtt!')} 
style={[styles.ForgotPasswordContainer, {marginTop: 35}]}>
  <SvgXml xml={this.state.nextBtnXML} />
</TouchableOpacity></View>
                

      </View>
      

      

     
      
    );
  }

  onFocusEmail() {
    this.setState({
        //  TextBoxBackgroundColor: '#222222',
        TextBoxBorderColor: 'white',
        TextBoxPlaceholderColor: '#BEBEBE',
        crossXMLForFName: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM10.8294 9.88561C11.0897 10.146 11.0897 10.5681 10.8294 10.8284C10.569 11.0888 10.1469 11.0888 9.88657 10.8284L8.00061 8.94246L6.11463 10.8284C5.85428 11.0888 5.43217 11.0888 5.17182 10.8284C4.91148 10.5681 4.91148 10.146 5.17182 9.88563L7.0578 7.99965L5.17252 6.11437C4.91217 5.85402 4.91217 5.43191 5.17252 5.17157C5.43287 4.91122 5.85498 4.91122 6.11533 5.17157L8.00061 7.05684L9.88587 5.17159C10.1462 4.91124 10.5683 4.91124 10.8287 5.17159C11.089 5.43194 11.089 5.85405 10.8287 6.1144L8.94342 7.99965L10.8294 9.88561Z" fill="white"/>
      </svg>
      `,
        
    })
  }

  onBlurEmail(text) {

     console.log('text11156 is', text)

    this.setState({
      // TextBoxBackgroundColor: 'transparent',
      TextBoxBorderColor: '#4F4F4F',
      TextBoxPlaceholderColor: '#969696',
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
else
{
  this.setState({errEmail: true, emailErrorText: 'First Name field can not be blank',
  TextBoxBorderColor: 'red', crossEmailVisible: false})
}

this.checkAllValidations(text)

  }
  

  onFocusPWD() {
    this.setState({
      PWDTextBoxBorderColor: 'white',
      PWDTextBoxPlaceholderColor: '#BEBEBE',
      
        
    })
  }

  onBlurPWD(text) {
    this.setState({
     
      PWDTextBoxBorderColor: '#4F4F4F',
      PWDTextBoxPlaceholderColor: '#969696',
      // crossPasswordVisible: false
    })
    if (text.trim() != '')
    {
      this.setState({crossXMLForLName: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  this.setState({errPassword: true, passwordErrorText: 'Last Name field can not be blank',
  PWDTextBoxBorderColor: 'red', crossPasswordVisible: false})
}

    this.checkAllValidations(text)
    
  }

  onFocusDate(text) {
    this.setState({
      dateTextBoxBorderColor: 'white',
      dateTextBoxPlaceholderColor: '#BEBEBE',
      
        
    })

    
  }

  onBlurDate(text) {
    this.setState({
      dateTextBoxBorderColor: '#4F4F4F',
      dateTextBoxPlaceholderColor: '#969696',
    })

    // console.log('date: ', parseInt('0', 10) + 1)

    if (parseInt(text, 10) > 31)
    {
      this.setState({errDob: true, dobErrorText: 'Please enter a valid date'})
    }

    this.checkAllValidations(text)
  }

  onFocusMonth() {
    this.setState({
      monthTextBoxBorderColor: 'white',
      monthTextBoxPlaceholderColor: '#BEBEBE', 
    })

    
  }

  onBlurMonth(text) {
    this.setState({
      monthTextBoxBorderColor: '#4F4F4F',
      monthTextBoxPlaceholderColor: '#969696',
    })

    if (parseInt(text, 10) > 12)
    {
      this.setState({errDob: true, dobErrorText: 'Please enter a valid month'})
    }

    this.checkAllValidations(text)
  }

  onFocusYear() {
    this.setState({
      yearTextBoxBorderColor: 'white',
      yearTextBoxPlaceholderColor: '#BEBEBE',
      
        
    })
  }

  onBlurYear(text) {

    this.setState({
      yearTextBoxBorderColor: '#4F4F4F',
      yearTextBoxPlaceholderColor: '#969696',
    })

    if (parseInt(text, 10) > 2021)
    {
      this.setState({errDob: true, dobErrorText: 'Year should not be less than 2000. Please enter a valid year.'})
    }

    this.checkAllValidations(text)
    
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
    && (parseInt(this.state.year, 10) < 2022) && (parseInt(this.state.month, 10) < 13) && (parseInt(this.state.date, 10) < 32))
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

  typingDate = (text) =>
  {
    this.setState({date: text, errDob: false})
    this.resetNextButton()
    
  }

  typingMonth = (text) =>
  {
    this.setState({month: text, errDob: false})
    this.resetNextButton()

    
  }

  typingYear = (text) =>
  {
    this.setState({year: text, errDob: false})
    this.resetNextButton()
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
    fontFamily: 'Poppins-SemiBold',
    // fontWeight: 'bold',
    color: 'white',
    fontSize: 28
      },
      SignInTitleText: {
        // width: 343,
        height: 72, 
        fontFamily: 'Poppins-Light',
        // fontWeight: '400',
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
      inputContainerForDOB: {
        borderWidth: 1,
        height: 36,
        width: '30%',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 10,
        borderRadius: 4
        
      },
      inputContainerForMonth: {
        borderWidth: 1,
        height: 36,
        width: '30%',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 10,
        borderRadius: 4
        
      },
      inputContainerForYear: {
        borderWidth: 1,
        height: 36,
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
marginTop: -20,
marginLeft: 20
      },
      inputIconCheckForPasswordCross: {
        // backgroundColor: GlobalStyle.colorSet.iconBackGround,
        height: '100%',
        width: 50,
        justifyContent: 'flex-end',
marginTop: -18,
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
        width: '85%',
        paddingLeft: 8,
        paddingRight: 3,
        color: 'white',
        fontFamily: 'Poppins-Light',
// fontWeight: '400',
fontSize: 16,
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
  // fontWeight: '400',
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

})