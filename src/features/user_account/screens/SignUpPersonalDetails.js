import React,{Component} from 'react';
import { Keyboard, View, Text, Platform, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native'
import { SvgXml } from 'react-native-svg';
import KeyboardManager from 'react-native-keyboard-manager';
import BGIntersectAtBottom from '../components/BGIntersectAtBottom';
import svg_xml from '../../../infrastructure/iconAndImages/global_svgs';
import color from '../../../infrastructure/theme/colors';
import styles from '../styles/styles_signuppersonaldetails';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {

      date: '',
      dateTextBoxBorderColor: color.TextBoxBorderColor.primary,
      dateTextBoxPlaceholderColor: color.TextBoxPlaceholderColor.primary,
      month: '',
      monthTextBoxBorderColor: color.TextBoxBorderColor.primary,
      monthTextBoxPlaceholderColor: color.TextBoxPlaceholderColor.primary,
      year: '',
      yearTextBoxBorderColor: color.TextBoxBorderColor.primary,
      yearTextBoxPlaceholderColor: color.TextBoxPlaceholderColor.primary,
      dobErrorText: '',
      errDob: false,
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
      nextBtnXML : svg_xml.nextBtnXMLForPersonalDetails_Grey,
      crossXMLForFName: svg_xml.crossXML,
      crossXMLForLName: svg_xml.crossXML

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
<BGIntersectAtBottom></BGIntersectAtBottom>

<SafeAreaView>

<View style={styles.StepIndicatorContainer}>
<TouchableOpacity
onPress={() => this.props.navigation.goBack()} style={styles.backIconContainer}>
<SvgXml xml={svg_xml.BackIconXML} />
</TouchableOpacity>
<View style={{marginLeft: 36}}>
<SvgXml left={16} xml={svg_xml.unionColor1StepIndicator}/></View>
<View style={{marginTop: 7}}>
<SvgXml left={16} xml={svg_xml.unionColor2StepIndicator}/></View>
<View>
<SvgXml left={16} xml={svg_xml.unionColor3StepIndicator}/></View>
<View style={{marginTop: 7}}>
<SvgXml left={16} xml={svg_xml.unionColor2StepIndicator}/></View>
<View>
<SvgXml left={16} xml={svg_xml.unionColor3StepIndicator}/></View>
<View style={{marginLeft: 15}}>
<SvgXml left={16} xml={svg_xml.unionColor4StepIndicator}/></View>
</View>



<View style={styles.logoIconContainer}>
<SvgXml xml={svg_xml.personalDetailsLogoXML} />
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
                { borderColor: this.state.TextBoxBorderColor}]}>
                
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
                { borderColor: this.state.PWDTextBoxBorderColor}]}>
                
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
                { borderColor: this.state.dateTextBoxBorderColor}]}>
                
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
                { borderColor: this.state.monthTextBoxBorderColor}]}>
                
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
                { borderColor: this.state.yearTextBoxBorderColor}]}>
                
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

      TextBoxBorderColor: color.TextBoxBorderColor.selected,
      TextBoxPlaceholderColor: color.TextBoxPlaceholderColor.selected,
        
    })
  }

  onBlurEmail(text) {

    this.setState({
      TextBoxBorderColor: color.TextBoxBorderColor.primary,
      TextBoxPlaceholderColor: color.TextBoxPlaceholderColor.primary,
    })

if (text.trim() != '')
{
  this.setState({crossXMLForFName: svg_xml.tickXML })
}
else
{
  this.setState({errEmail: true, emailErrorText: 'First Name field can not be blank',
  TextBoxBorderColor: color.TextBoxBorderColor.error, crossEmailVisible: false})
}

this.checkAllValidations(text)

}
  

onFocusPWD() {
    this.setState({
      PWDTextBoxBorderColor: color.TextBoxBorderColor.selected,
      PWDTextBoxPlaceholderColor: color.TextBoxPlaceholderColor.selected,
      
        
    })
  }

  onBlurPWD(text) {
    this.setState({
     
      PWDTextBoxBorderColor: color.TextBoxBorderColor.primary,
      PWDTextBoxPlaceholderColor: color.TextBoxPlaceholderColor.primary,
    })
    if (text.trim() != '')
    {
      this.setState({crossXMLForLName: svg_xml.tickXML })
    }
    else
{
  this.setState({errPassword: true, passwordErrorText: 'Last Name field can not be blank',
  PWDTextBoxBorderColor: color.TextBoxBorderColor.error, crossPasswordVisible: false})
}

    this.checkAllValidations(text)
    
  }

  onFocusDate(text) {
    this.setState({
      dateTextBoxBorderColor: color.TextBoxBorderColor.selected,
      dateTextBoxPlaceholderColor: color.TextBoxPlaceholderColor.selected,
    })

    
  }

  onBlurDate(text) {
    this.setState({
      dateTextBoxBorderColor: color.TextBoxBorderColor.primary,
      dateTextBoxPlaceholderColor: color.TextBoxPlaceholderColor.primary,
    })

    if (parseInt(text, 10) > 31)
    {
      this.setState({errDob: true, dobErrorText: 'Please enter a valid date'})
    }

    this.checkAllValidations(text)
  }

  onFocusMonth() {
    this.setState({
      monthTextBoxBorderColor: color.TextBoxBorderColor.selected,
      monthTextBoxPlaceholderColor: color.TextBoxPlaceholderColor.selected, 
    })

    
  }

  onBlurMonth(text) {
    this.setState({
      monthTextBoxBorderColor: color.TextBoxBorderColor.primary,
      monthTextBoxPlaceholderColor: color.TextBoxPlaceholderColor.primary,
    })

    if (parseInt(text, 10) > 12)
    {
      this.setState({errDob: true, dobErrorText: 'Please enter a valid month'})
    }

    this.checkAllValidations(text)
  }

  onFocusYear() {
    this.setState({
      yearTextBoxBorderColor: color.TextBoxBorderColor.selected,
      yearTextBoxPlaceholderColor: color.TextBoxPlaceholderColor.selected,
      
        
    })
  }

  onBlurYear(text) {

    this.setState({
      yearTextBoxBorderColor: color.TextBoxBorderColor.primary,
      yearTextBoxPlaceholderColor: color.TextBoxPlaceholderColor.primary,
    })

    if (parseInt(text, 10) > 2021)
    {
      this.setState({errDob: true, dobErrorText: 'Year should not be less than 2000. Please enter a valid year.'})
    }

    this.checkAllValidations(text)
    
  }

  resetNextButton = (text) =>
  {
    this.setState({nextBtnXML: svg_xml.nextBtnXMLForPersonalDetails_Grey})
  }

  checkAllValidations = (text) =>
  {

    if (this.state.email.trim() != '' && this.state.password.trim() != '' && 
    this.state.date.trim() != '' && this.state.month.trim() != '' && this.state.year.trim() != ''
    && (parseInt(this.state.year, 10) < 2022) && (parseInt(this.state.month, 10) < 13) && (parseInt(this.state.date, 10) < 32))
    {
      this.setState({nextBtnXML: svg_xml.nextBtnXMLForPersonalDetails_Green})
    }
  }
  typingEmail = (text) =>
  {
    this.setState({email: text, crossEmailVisible: true, errEmail: false, crossXMLForFName: svg_xml.crossXML})
    this.resetNextButton()
  }
  clearEmailText = () =>
  {
    this.setState({email: '', crossEmailVisible: false})
  }

  typingPassword = (text) =>
  {
    this.setState({password: text, crossPasswordVisible: true, errPassword: false, crossXMLForLName: svg_xml.crossXML})
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

}

