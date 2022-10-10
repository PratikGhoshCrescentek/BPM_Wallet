import React,{Component, useState} from 'react';
import { Modal, StatusBar, Keyboard, ActivityIndicator, View, Text, ImageBackground, StyleSheet, AsyncStorage, Platform, FlatList, ScrollView, TouchableOpacity, Linking, SafeAreaView, TextInput, Image, Dimensions } from 'react-native'
import { SvgXml } from 'react-native-svg';
import SignInBtn from '../components/SignInBtnUI';


const logoXML = `<svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.42871 5.6143L18.1573 19.7314C18.6728 20.1665 19.3256 20.4052 20.0001 20.4052C20.6747 20.4052 21.3275 20.1665 21.843 19.7314L38.5716 5.6143M1.42871 2H38.5716V32H1.42871V2Z" stroke="white" stroke-width="2.85714" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const intersectImage = `<svg width="96" height="220" viewBox="0 0 96 220" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M96 55.7572V218.579C81.6108 227.036 74.0181 179.174 65.0293 122.512C60.3952 93.2994 55.39 61.748 48.8911 34.3687C67.4237 44.9196 83.091 51.3263 96 55.7572ZM38.849 0C39.6032 1.95213 40.3208 3.95177 41 5.99997C43.8732 14.6637 46.4845 24.2302 48.8911 34.3687C39.3572 28.9409 29.065 22.4164 18 14.5C11.2474 9.6689 5.32747 4.83058 0.174251 0L38.849 0Z" fill="url(#paint0_linear_84_6358)"/>
<defs>
<linearGradient id="paint0_linear_84_6358" x1="48.0871" y1="0" x2="48.0871" y2="219.553" gradientUnits="userSpaceOnUse">
<stop stop-color="#7878E7"/>
<stop offset="1" stop-color="#1982B3"/>
</linearGradient>
</defs>
</svg>`;

const nextBtnXML = `<svg width="139" height="36" viewBox="0 0 139 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="138" height="36" rx="18" fill="url(#paint0_linear_79_5203)"/>
<path d="M17.99 23.098C17.0846 23.098 16.2493 22.888 15.484 22.468C14.728 22.0387 14.126 21.446 13.678 20.69C13.2393 19.9247 13.02 19.066 13.02 18.114C13.02 17.162 13.2393 16.308 13.678 15.552C14.126 14.796 14.728 14.208 15.484 13.788C16.2493 13.3587 17.0846 13.144 17.99 13.144C18.9046 13.144 19.74 13.3587 20.496 13.788C21.2613 14.208 21.8633 14.796 22.302 15.552C22.7406 16.308 22.96 17.162 22.96 18.114C22.96 19.066 22.7406 19.9247 22.302 20.69C21.8633 21.446 21.2613 22.0387 20.496 22.468C19.74 22.888 18.9046 23.098 17.99 23.098ZM17.99 21.712C18.634 21.712 19.208 21.5673 19.712 21.278C20.216 20.9793 20.608 20.5593 20.888 20.018C21.1773 19.4673 21.322 18.8327 21.322 18.114C21.322 17.3953 21.1773 16.7653 20.888 16.224C20.608 15.6827 20.216 15.2673 19.712 14.978C19.208 14.6887 18.634 14.544 17.99 14.544C17.346 14.544 16.772 14.6887 16.268 14.978C15.764 15.2673 15.3673 15.6827 15.078 16.224C14.798 16.7653 14.658 17.3953 14.658 18.114C14.658 18.8327 14.798 19.4673 15.078 20.018C15.3673 20.5593 15.764 20.9793 16.268 21.278C16.772 21.5673 17.346 21.712 17.99 21.712ZM26.1265 16.42C26.3971 16.0653 26.7658 15.7667 27.2325 15.524C27.6991 15.2813 28.2265 15.16 28.8145 15.16C29.4865 15.16 30.0978 15.328 30.6485 15.664C31.2085 15.9907 31.6471 16.4527 31.9645 17.05C32.2818 17.6473 32.4405 18.3333 32.4405 19.108C32.4405 19.8827 32.2818 20.578 31.9645 21.194C31.6471 21.8007 31.2085 22.2767 30.6485 22.622C30.0978 22.958 29.4865 23.126 28.8145 23.126C28.2265 23.126 27.7038 23.0093 27.2465 22.776C26.7891 22.5333 26.4158 22.2347 26.1265 21.88V26.668H24.5305V15.286H26.1265V16.42ZM30.8165 19.108C30.8165 18.576 30.7045 18.1187 30.4805 17.736C30.2658 17.344 29.9765 17.05 29.6125 16.854C29.2578 16.6487 28.8751 16.546 28.4645 16.546C28.0631 16.546 27.6805 16.6487 27.3165 16.854C26.9618 17.0593 26.6725 17.358 26.4485 17.75C26.2338 18.142 26.1265 18.604 26.1265 19.136C26.1265 19.668 26.2338 20.1347 26.4485 20.536C26.6725 20.928 26.9618 21.2267 27.3165 21.432C27.6805 21.6373 28.0631 21.74 28.4645 21.74C28.8751 21.74 29.2578 21.6373 29.6125 21.432C29.9765 21.2173 30.2658 20.9093 30.4805 20.508C30.7045 20.1067 30.8165 19.64 30.8165 19.108ZM41.0888 18.954C41.0888 19.2433 41.0701 19.5047 41.0328 19.738H35.1388C35.1854 20.354 35.4141 20.8487 35.8248 21.222C36.2354 21.5953 36.7394 21.782 37.3368 21.782C38.1954 21.782 38.8021 21.4227 39.1568 20.704H40.8787C40.6454 21.4133 40.2208 21.9967 39.6048 22.454C38.9981 22.902 38.2421 23.126 37.3368 23.126C36.5994 23.126 35.9368 22.9627 35.3488 22.636C34.7701 22.3 34.3128 21.8333 33.9768 21.236C33.6501 20.6293 33.4868 19.9293 33.4868 19.136C33.4868 18.3427 33.6454 17.6473 33.9628 17.05C34.2894 16.4433 34.7421 15.9767 35.3208 15.65C35.9088 15.3233 36.5808 15.16 37.3368 15.16C38.0648 15.16 38.7134 15.3187 39.2828 15.636C39.8521 15.9533 40.2954 16.4013 40.6128 16.98C40.9301 17.5493 41.0888 18.2073 41.0888 18.954ZM39.4228 18.45C39.4134 17.862 39.2034 17.3907 38.7928 17.036C38.3821 16.6813 37.8734 16.504 37.2668 16.504C36.7161 16.504 36.2448 16.6813 35.8528 17.036C35.4608 17.3813 35.2274 17.8527 35.1528 18.45H39.4228ZM46.5514 15.16C47.158 15.16 47.6994 15.286 48.1754 15.538C48.6607 15.79 49.0387 16.1633 49.3094 16.658C49.58 17.1527 49.7154 17.75 49.7154 18.45V23H48.1334V18.688C48.1334 17.9973 47.9607 17.47 47.6154 17.106C47.27 16.7327 46.7987 16.546 46.2014 16.546C45.604 16.546 45.128 16.7327 44.7734 17.106C44.428 17.47 44.2554 17.9973 44.2554 18.688V23H42.6594V15.286H44.2554V16.168C44.5167 15.8507 44.848 15.6033 45.2494 15.426C45.66 15.2487 46.094 15.16 46.5514 15.16ZM62.4579 18.954C62.4579 19.2433 62.4392 19.5047 62.4019 19.738H56.5079C56.5546 20.354 56.7832 20.8487 57.1939 21.222C57.6046 21.5953 58.1086 21.782 58.7059 21.782C59.5646 21.782 60.1712 21.4227 60.5259 20.704H62.2479C62.0146 21.4133 61.5899 21.9967 60.9739 22.454C60.3672 22.902 59.6112 23.126 58.7059 23.126C57.9686 23.126 57.3059 22.9627 56.7179 22.636C56.1392 22.3 55.6819 21.8333 55.3459 21.236C55.0192 20.6293 54.8559 19.9293 54.8559 19.136C54.8559 18.3427 55.0146 17.6473 55.3319 17.05C55.6586 16.4433 56.1112 15.9767 56.6899 15.65C57.2779 15.3233 57.9499 15.16 58.7059 15.16C59.4339 15.16 60.0826 15.3187 60.6519 15.636C61.2212 15.9533 61.6646 16.4013 61.9819 16.98C62.2992 17.5493 62.4579 18.2073 62.4579 18.954ZM60.7919 18.45C60.7826 17.862 60.5726 17.3907 60.1619 17.036C59.7512 16.6813 59.2426 16.504 58.6359 16.504C58.0852 16.504 57.6139 16.6813 57.2219 17.036C56.8299 17.3813 56.5966 17.8527 56.5219 18.45H60.7919ZM73.3665 15.16C73.9732 15.16 74.5145 15.286 74.9905 15.538C75.4758 15.79 75.8538 16.1633 76.1245 16.658C76.4045 17.1527 76.5445 17.75 76.5445 18.45V23H74.9625V18.688C74.9625 17.9973 74.7898 17.47 74.4445 17.106C74.0992 16.7327 73.6278 16.546 73.0305 16.546C72.4332 16.546 71.9572 16.7327 71.6025 17.106C71.2572 17.47 71.0845 17.9973 71.0845 18.688V23H69.5025V18.688C69.5025 17.9973 69.3298 17.47 68.9845 17.106C68.6392 16.7327 68.1678 16.546 67.5705 16.546C66.9732 16.546 66.4972 16.7327 66.1425 17.106C65.7972 17.47 65.6245 17.9973 65.6245 18.688V23H64.0285V15.286H65.6245V16.168C65.8858 15.8507 66.2172 15.6033 66.6185 15.426C67.0198 15.2487 67.4492 15.16 67.9065 15.16C68.5225 15.16 69.0732 15.2907 69.5585 15.552C70.0438 15.8133 70.4172 16.1913 70.6785 16.686C70.9118 16.2193 71.2758 15.8507 71.7705 15.58C72.2652 15.3 72.7972 15.16 73.3665 15.16ZM78.0434 19.108C78.0434 18.3333 78.2021 17.6473 78.5194 17.05C78.8461 16.4527 79.2847 15.9907 79.8354 15.664C80.3954 15.328 81.0114 15.16 81.6834 15.16C82.2901 15.16 82.8174 15.2813 83.2654 15.524C83.7227 15.7573 84.0867 16.0513 84.3574 16.406V15.286H85.9674V23H84.3574V21.852C84.0867 22.216 83.7181 22.5193 83.2514 22.762C82.7847 23.0047 82.2527 23.126 81.6554 23.126C80.9927 23.126 80.3861 22.958 79.8354 22.622C79.2847 22.2767 78.8461 21.8007 78.5194 21.194C78.2021 20.578 78.0434 19.8827 78.0434 19.108ZM84.3574 19.136C84.3574 18.604 84.2454 18.142 84.0214 17.75C83.8067 17.358 83.5221 17.0593 83.1674 16.854C82.8127 16.6487 82.4301 16.546 82.0194 16.546C81.6087 16.546 81.2261 16.6487 80.8714 16.854C80.5167 17.05 80.2274 17.344 80.0034 17.736C79.7887 18.1187 79.6814 18.576 79.6814 19.108C79.6814 19.64 79.7887 20.1067 80.0034 20.508C80.2274 20.9093 80.5167 21.2173 80.8714 21.432C81.2354 21.6373 81.6181 21.74 82.0194 21.74C82.4301 21.74 82.8127 21.6373 83.1674 21.432C83.5221 21.2267 83.8067 20.928 84.0214 20.536C84.2454 20.1347 84.3574 19.668 84.3574 19.136ZM88.8757 14.264C88.5863 14.264 88.3437 14.166 88.1477 13.97C87.9517 13.774 87.8537 13.5313 87.8537 13.242C87.8537 12.9527 87.9517 12.71 88.1477 12.514C88.3437 12.318 88.5863 12.22 88.8757 12.22C89.1557 12.22 89.3937 12.318 89.5897 12.514C89.7857 12.71 89.8837 12.9527 89.8837 13.242C89.8837 13.5313 89.7857 13.774 89.5897 13.97C89.3937 14.166 89.1557 14.264 88.8757 14.264ZM89.6597 15.286V23H88.0637V15.286H89.6597ZM93.3511 12.64V23H91.7551V12.64H93.3511ZM98.5512 19.108C98.5512 18.3333 98.7099 17.6473 99.0272 17.05C99.3539 16.4527 99.7925 15.9907 100.343 15.664C100.903 15.328 101.519 15.16 102.191 15.16C102.798 15.16 103.325 15.2813 103.773 15.524C104.231 15.7573 104.595 16.0513 104.865 16.406V15.286H106.475V23H104.865V21.852C104.595 22.216 104.226 22.5193 103.759 22.762C103.293 23.0047 102.761 23.126 102.163 23.126C101.501 23.126 100.894 22.958 100.343 22.622C99.7925 22.2767 99.3539 21.8007 99.0272 21.194C98.7099 20.578 98.5512 19.8827 98.5512 19.108ZM104.865 19.136C104.865 18.604 104.753 18.142 104.529 17.75C104.315 17.358 104.03 17.0593 103.675 16.854C103.321 16.6487 102.938 16.546 102.527 16.546C102.117 16.546 101.734 16.6487 101.379 16.854C101.025 17.05 100.735 17.344 100.511 17.736C100.297 18.1187 100.189 18.576 100.189 19.108C100.189 19.64 100.297 20.1067 100.511 20.508C100.735 20.9093 101.025 21.2173 101.379 21.432C101.743 21.6373 102.126 21.74 102.527 21.74C102.938 21.74 103.321 21.6373 103.675 21.432C104.03 21.2267 104.315 20.928 104.529 20.536C104.753 20.1347 104.865 19.668 104.865 19.136ZM110.167 16.42C110.438 16.0653 110.807 15.7667 111.273 15.524C111.74 15.2813 112.267 15.16 112.855 15.16C113.527 15.16 114.139 15.328 114.689 15.664C115.249 15.9907 115.688 16.4527 116.005 17.05C116.323 17.6473 116.481 18.3333 116.481 19.108C116.481 19.8827 116.323 20.578 116.005 21.194C115.688 21.8007 115.249 22.2767 114.689 22.622C114.139 22.958 113.527 23.126 112.855 23.126C112.267 23.126 111.745 23.0093 111.287 22.776C110.83 22.5333 110.457 22.2347 110.167 21.88V26.668H108.571V15.286H110.167V16.42ZM114.857 19.108C114.857 18.576 114.745 18.1187 114.521 17.736C114.307 17.344 114.017 17.05 113.653 16.854C113.299 16.6487 112.916 16.546 112.505 16.546C112.104 16.546 111.721 16.6487 111.357 16.854C111.003 17.0593 110.713 17.358 110.489 17.75C110.275 18.142 110.167 18.604 110.167 19.136C110.167 19.668 110.275 20.1347 110.489 20.536C110.713 20.928 111.003 21.2267 111.357 21.432C111.721 21.6373 112.104 21.74 112.505 21.74C112.916 21.74 113.299 21.6373 113.653 21.432C114.017 21.2173 114.307 20.9093 114.521 20.508C114.745 20.1067 114.857 19.64 114.857 19.108ZM119.656 16.42C119.926 16.0653 120.295 15.7667 120.762 15.524C121.228 15.2813 121.756 15.16 122.344 15.16C123.016 15.16 123.627 15.328 124.178 15.664C124.738 15.9907 125.176 16.4527 125.494 17.05C125.811 17.6473 125.97 18.3333 125.97 19.108C125.97 19.8827 125.811 20.578 125.494 21.194C125.176 21.8007 124.738 22.2767 124.178 22.622C123.627 22.958 123.016 23.126 122.344 23.126C121.756 23.126 121.233 23.0093 120.776 22.776C120.318 22.5333 119.945 22.2347 119.656 21.88V26.668H118.06V15.286H119.656V16.42ZM124.346 19.108C124.346 18.576 124.234 18.1187 124.01 17.736C123.795 17.344 123.506 17.05 123.142 16.854C122.787 16.6487 122.404 16.546 121.994 16.546C121.592 16.546 121.21 16.6487 120.846 16.854C120.491 17.0593 120.202 17.358 119.978 17.75C119.763 18.142 119.656 18.604 119.656 19.136C119.656 19.668 119.763 20.1347 119.978 20.536C120.202 20.928 120.491 21.2267 120.846 21.432C121.21 21.6373 121.592 21.74 121.994 21.74C122.404 21.74 122.787 21.6373 123.142 21.432C123.506 21.2173 123.795 20.9093 124.01 20.508C124.234 20.1067 124.346 19.64 124.346 19.108Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_79_5203" x1="69.5" y1="0" x2="69.5" y2="36" gradientUnits="userSpaceOnUse">
<stop stop-color="#03BFB5"/>
<stop offset="1" stop-color="#0B7F79"/>
</linearGradient>
</defs>
</svg>`;


const BackIconXML = `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.25161 13.6061C6.58634 13.9408 7.12906 13.9408 7.46379 13.6061C7.79853 13.2713 7.79853 12.7286 7.46379 12.3939L2.92703 7.85712L23.1429 7.85712C23.6162 7.85712 24 7.47336 24 6.99997C24 6.52659 23.6162 6.14283 23.1429 6.14283L2.92703 6.14283L7.46379 1.60607C7.79853 1.27133 7.79853 0.728618 7.46379 0.393883C7.12906 0.0591478 6.58634 0.0591478 6.25161 0.393883L0.269794 6.3757C0.103704 6.53202 0 6.75389 0 6.99997C0 7.24606 0.103704 7.46793 0.269794 7.62425L6.25161 13.6061Z" fill="white"/>
</svg>`;

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      email: '',


    };
   
  }
  componentDidMount = async () => 
  {
  
    
  }
  

  OpenEmailAppBtnPressed = () =>
  {
    this.props.navigation.navigate('CreateNewPasswordPage')
  }
  
  render() {


    return (
      
      <View style ={styles.container}>
<View style={styles.intersectImage}>
<SvgXml xml={intersectImage} />
</View> 
        <StatusBar backgroundColor='#4387bb' barStyle={'light-content'} />
<SafeAreaView>

{/* <TouchableOpacity
onPress={() => this.props.navigation.goBack()} style={styles.backIconContainer}>
<SvgXml xml={BackIconXML} />
</TouchableOpacity> */}

<View style={styles.logoIconContainer}>
<SvgXml xml={logoXML} />
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
<TouchableOpacity
onPress={() => this.OpenEmailAppBtnPressed()}
style={[styles.ForgotPasswordContainer, {marginTop: 35}]}>
  <SvgXml xml={nextBtnXML} />
</TouchableOpacity>

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

  onFocusEmail() {
    this.setState({
        TextBoxBackgroundColor: '#4F4F4F',
        TextBoxBorderColor: 'white',
        TextBoxPlaceholderColor: 'white'
        
    })
  }

  onBlurEmail() {
    this.setState({
      TextBoxBackgroundColor: 'transparent',
      TextBoxBorderColor: '#4F4F4F',
      TextBoxPlaceholderColor: '#4F4F4F'
    })
  }


}

const styles = StyleSheet.create({
  backIconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 16,
top: 74,
// backgroundColor: 'red',
  },
  logoIconContainer: {
    flexDirection: 'row',
    position: 'absolute',
top: 185,
alignSelf: 'center'
// backgroundColor: 'red',
  },
  titleLabelContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
top: 246,
  },
  SignInTitleContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
top: 305,
  },
  SkipTitleContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
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

      SkipTitleText: {
        // width: 343,
        height: 72, 
        fontFamily: 'Poppins-Light',
        // fontWeight: '500',
        color: 'white',
        fontSize: 14,
        alignSelf: 'center',
          },

     LoginBody: {
        width: '100%',
        position: 'absolute',
top: 358,
        flexDirection: 'column',
      },
      plainText: {
        marginBottom: 10,
        color: 'white',
        marginLeft: 16,
marginRight: 16,
fontFamily: 'Poppins-Light',
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
alignSelf: 'center'
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
marginLeft: -30
      },
      inputIconCheckForPasswordCross: {
        // backgroundColor: GlobalStyle.colorSet.iconBackGround,
        height: '100%',
        width: 50,
        justifyContent: 'flex-end',
marginTop: -32,
marginLeft: -50
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
        paddingLeft: 0,
        paddingRight: 3,
        color: 'white',
        fontFamily: 'Poppins-Light',
// fontWeight: '400',
fontSize: 16,
paddingRight: 40
      },
  SignInButton: {borderWidth:1,position:'absolute',bottom:106,alignSelf:'center'},
  donthaveanAccount: {width: 343,flexDirection: 'row', borderWidth:1,position:'absolute',bottom:83,alignSelf:'center',
  alignItems: 'center', justifyContent: 'center'},

  donthaveanAccount1: {width: 343,flexDirection: 'row', borderWidth:1,position:'absolute',bottom:60,alignSelf:'center',
  alignItems: 'center', justifyContent: 'center'},

  container: {
    flex: 1,
      backgroundColor: "black",
    marginTop: 0,
    zIndex: 0,

  },
  donthaveanAccountText: {
    paddingTop: 4, paddingBottom: 4, color: 'white',fontFamily: 'Poppins-Light',
    // fontWeight: '500',
    fontSize: 16,
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
    signupText: {
      color: '#000', fontSize: 15.2, color: '#03BFB5',fontFamily: 'Poppins-Light',
      // fontWeight: '500',
    },
    intersectImage: {position: 'absolute',
    width: 95.83,
    height: 219.55,
    right: 0,
    top: 0}

})