import React,{Component, useState} from 'react';
import { Modal, StatusBar, Keyboard, ActivityIndicator, View, Text, ImageBackground, StyleSheet, AsyncStorage, Platform, FlatList, ScrollView, TouchableOpacity, Linking, SafeAreaView, TextInput, Image, Dimensions } from 'react-native'
import { SvgXml } from 'react-native-svg';
import SignInBtn from '../components/SignInBtnUI';


const logoXML = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_79_5302)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.08823 21.1365C3.43735 21.7874 3.43735 22.8427 4.08822 23.4935L12.3014 31.7067C12.3129 31.7189 12.3247 31.7311 12.3367 31.743C12.6381 32.0445 13.0263 32.2063 13.4208 32.2285C13.8786 32.2547 14.3451 32.0928 14.6948 31.7431C14.7075 31.7304 14.72 31.7176 14.7322 31.7046L35.9069 10.5298C36.5578 9.87897 36.5578 8.82369 35.9069 8.17282C35.256 7.52194 34.2007 7.52194 33.5499 8.17281L13.5157 28.207L6.44525 21.1365C5.79437 20.4856 4.7391 20.4856 4.08823 21.1365Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_79_5302">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const intersectImage = `<svg width="96" height="220" viewBox="0 0 96 220" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M96 55.7572V218.579C81.6108 227.036 74.0181 179.174 65.0293 122.512C60.3952 93.2994 55.39 61.748 48.8911 34.3687C67.4237 44.9196 83.091 51.3263 96 55.7572ZM38.849 0C39.6032 1.95213 40.3208 3.95177 41 5.99997C43.8732 14.6637 46.4845 24.2302 48.8911 34.3687C39.3572 28.9409 29.065 22.4164 18 14.5C11.2474 9.6689 5.32747 4.83058 0.174251 0L38.849 0Z" fill="url(#paint0_linear_84_6358)"/>
<defs>
<linearGradient id="paint0_linear_84_6358" x1="48.0871" y1="0" x2="48.0871" y2="219.553" gradientUnits="userSpaceOnUse">
<stop stop-color="#7878E7"/>
<stop offset="1" stop-color="#1982B3"/>
</linearGradient>
</defs>
</svg>`;

const nextBtnXML = `<svg width="96" height="36" viewBox="0 0 96 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="96" height="36" rx="18" fill="url(#paint0_linear_79_5329)"/>
<path d="M23.8323 13.596C23.6091 13.3728 23.2473 13.3728 23.0241 13.596C22.801 13.8191 22.801 14.1809 23.0241 14.4041L26.0486 17.4286H12.5714C12.2558 17.4286 12 17.6844 12 18C12 18.3156 12.2558 18.5714 12.5714 18.5714H26.0486L23.0241 21.596C22.801 21.8191 22.801 22.1809 23.0241 22.4041C23.2473 22.6272 23.6091 22.6272 23.8323 22.4041L27.8201 18.4162C27.9309 18.312 28 18.1641 28 18C28 17.836 27.9309 17.688 27.8201 17.5838L23.8323 13.596Z" fill="white"/>
<path d="M40.6857 23.098C40.0324 23.098 39.4444 22.986 38.9217 22.762C38.399 22.5287 37.9884 22.202 37.6897 21.782C37.391 21.362 37.2417 20.872 37.2417 20.312H38.9497C38.987 20.732 39.1504 21.0773 39.4397 21.348C39.7384 21.6187 40.1537 21.754 40.6857 21.754C41.2364 21.754 41.6657 21.6233 41.9737 21.362C42.2817 21.0913 42.4357 20.746 42.4357 20.326C42.4357 19.9993 42.3377 19.7333 42.1417 19.528C41.955 19.3227 41.717 19.164 41.4277 19.052C41.1477 18.94 40.7557 18.8187 40.2517 18.688C39.617 18.52 39.099 18.352 38.6977 18.184C38.3057 18.0067 37.9697 17.736 37.6897 17.372C37.4097 17.008 37.2697 16.5227 37.2697 15.916C37.2697 15.356 37.4097 14.866 37.6897 14.446C37.9697 14.026 38.3617 13.704 38.8657 13.48C39.3697 13.256 39.953 13.144 40.6157 13.144C41.5584 13.144 42.3284 13.382 42.9257 13.858C43.5324 14.3247 43.8684 14.9687 43.9337 15.79H42.1697C42.1417 15.4353 41.9737 15.132 41.6657 14.88C41.3577 14.628 40.9517 14.502 40.4477 14.502C39.9904 14.502 39.617 14.6187 39.3277 14.852C39.0384 15.0853 38.8937 15.4213 38.8937 15.86C38.8937 16.1587 38.9824 16.406 39.1597 16.602C39.3464 16.7887 39.5797 16.938 39.8597 17.05C40.1397 17.162 40.5224 17.2833 41.0077 17.414C41.6517 17.5913 42.1744 17.7687 42.5757 17.946C42.9864 18.1233 43.3317 18.3987 43.6117 18.772C43.901 19.136 44.0457 19.626 44.0457 20.242C44.0457 20.7367 43.9104 21.2033 43.6397 21.642C43.3784 22.0807 42.991 22.4353 42.4777 22.706C41.9737 22.9673 41.3764 23.098 40.6857 23.098ZM46.7409 14.264C46.4516 14.264 46.2089 14.166 46.0129 13.97C45.8169 13.774 45.7189 13.5313 45.7189 13.242C45.7189 12.9527 45.8169 12.71 46.0129 12.514C46.2089 12.318 46.4516 12.22 46.7409 12.22C47.0209 12.22 47.2589 12.318 47.4549 12.514C47.6509 12.71 47.7489 12.9527 47.7489 13.242C47.7489 13.5313 47.6509 13.774 47.4549 13.97C47.2589 14.166 47.0209 14.264 46.7409 14.264ZM47.5249 15.286V23H45.9289V15.286H47.5249ZM52.7283 15.16C53.3256 15.16 53.853 15.2813 54.3103 15.524C54.777 15.7573 55.141 16.0513 55.4023 16.406V15.286H57.0123V23.126C57.0123 23.8353 56.863 24.4653 56.5643 25.016C56.2656 25.576 55.8316 26.0147 55.2623 26.332C54.7023 26.6493 54.0303 26.808 53.2463 26.808C52.201 26.808 51.333 26.5607 50.6423 26.066C49.9516 25.5807 49.5596 24.918 49.4663 24.078H51.0483C51.1696 24.4793 51.4263 24.8013 51.8183 25.044C52.2196 25.296 52.6956 25.422 53.2463 25.422C53.8903 25.422 54.4083 25.226 54.8003 24.834C55.2016 24.442 55.4023 23.8727 55.4023 23.126V21.838C55.1316 22.202 54.763 22.51 54.2963 22.762C53.839 23.0047 53.3163 23.126 52.7283 23.126C52.0563 23.126 51.4403 22.958 50.8803 22.622C50.3296 22.2767 49.891 21.8007 49.5643 21.194C49.247 20.578 49.0883 19.8827 49.0883 19.108C49.0883 18.3333 49.247 17.6473 49.5643 17.05C49.891 16.4527 50.3296 15.9907 50.8803 15.664C51.4403 15.328 52.0563 15.16 52.7283 15.16ZM55.4023 19.136C55.4023 18.604 55.2903 18.142 55.0663 17.75C54.8516 17.358 54.567 17.0593 54.2123 16.854C53.8576 16.6487 53.475 16.546 53.0643 16.546C52.6536 16.546 52.271 16.6487 51.9163 16.854C51.5616 17.05 51.2723 17.344 51.0483 17.736C50.8336 18.1187 50.7263 18.576 50.7263 19.108C50.7263 19.64 50.8336 20.1067 51.0483 20.508C51.2723 20.9093 51.5616 21.2173 51.9163 21.432C52.2803 21.6373 52.663 21.74 53.0643 21.74C53.475 21.74 53.8576 21.6373 54.2123 21.432C54.567 21.2267 54.8516 20.928 55.0663 20.536C55.2903 20.1347 55.4023 19.668 55.4023 19.136ZM63.0006 15.16C63.6073 15.16 64.1486 15.286 64.6246 15.538C65.1099 15.79 65.4879 16.1633 65.7586 16.658C66.0293 17.1527 66.1646 17.75 66.1646 18.45V23H64.5826V18.688C64.5826 17.9973 64.4099 17.47 64.0646 17.106C63.7193 16.7327 63.2479 16.546 62.6506 16.546C62.0533 16.546 61.5773 16.7327 61.2226 17.106C60.8773 17.47 60.7046 17.9973 60.7046 18.688V23H59.1086V15.286H60.7046V16.168C60.9659 15.8507 61.2973 15.6033 61.6986 15.426C62.1093 15.2487 62.5433 15.16 63.0006 15.16ZM72.6491 14.264C72.3598 14.264 72.1171 14.166 71.9211 13.97C71.7251 13.774 71.6271 13.5313 71.6271 13.242C71.6271 12.9527 71.7251 12.71 71.9211 12.514C72.1171 12.318 72.3598 12.22 72.6491 12.22C72.9291 12.22 73.1671 12.318 73.3631 12.514C73.5591 12.71 73.6571 12.9527 73.6571 13.242C73.6571 13.5313 73.5591 13.774 73.3631 13.97C73.1671 14.166 72.9291 14.264 72.6491 14.264ZM73.4331 15.286V23H71.8371V15.286H73.4331ZM79.4205 15.16C80.0272 15.16 80.5685 15.286 81.0445 15.538C81.5298 15.79 81.9078 16.1633 82.1785 16.658C82.4492 17.1527 82.5845 17.75 82.5845 18.45V23H81.0025V18.688C81.0025 17.9973 80.8298 17.47 80.4845 17.106C80.1392 16.7327 79.6678 16.546 79.0705 16.546C78.4732 16.546 77.9972 16.7327 77.6425 17.106C77.2972 17.47 77.1245 17.9973 77.1245 18.688V23H75.5285V15.286H77.1245V16.168C77.3858 15.8507 77.7172 15.6033 78.1185 15.426C78.5292 15.2487 78.9632 15.16 79.4205 15.16Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_79_5329" x1="48" y1="0" x2="48" y2="36" gradientUnits="userSpaceOnUse">
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
Congrats!
    </Text>
</View>

<View style={styles.SignInTitleContainer}>
<Text style={styles.SignInTitleText}>
Your password has been successfully
    </Text>
</View>
<View style={[styles.SignInTitleContainer,{marginTop: 24}]}>
<Text style={styles.SignInTitleText}>
reset.
    </Text>
</View>


<View style={styles.LoginBody}>
<TouchableOpacity
onPress={() => this.props.navigation.navigate('SignInPage')}
style={[styles.ForgotPasswordContainer, {marginTop: 35}]}>
  <SvgXml xml={nextBtnXML} />
</TouchableOpacity>

              
            </View>
            

          </SafeAreaView>
          
          

<View style = {styles.donthaveanAccount1}>
<Text style={styles.donthaveanAccountText}>{""}</Text> 
<TouchableOpacity
      style={styles.SignUp}
      >
    <Text style={styles.signupText}>
    Back to homepage
    </Text>
    </TouchableOpacity>
</View>
      </View>
      

      

     
      
    );
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
top: 348,
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
      color: '#000', fontSize: 14, color: 'white',fontFamily: 'Poppins-Light',
      // fontWeight: '600',
    },
    intersectImage: {position: 'absolute',
    width: 95.83,
    height: 219.55,
    right: 0,
    top: 0}

})