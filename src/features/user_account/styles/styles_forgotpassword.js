import { StyleSheet } from 'react-native'
import color from '../../../infrastructure/theme/colors';
import font from '../../../infrastructure/theme/fonts';
export const styles = StyleSheet.create({
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
    left: 16,
top: 125,
// backgroundColor: 'red',
  },
  titleLabelContainer: {
    flexDirection: 'row',
    position: 'absolute',
left: 16,
top: 186,
  },
  SignInTitleContainer: {
    flexDirection: 'row',
    position: 'absolute',
left: 16,
top: 250,
  },
  titleText: {
width: 343,
height: 172, 
fontFamily: font.heading,
// fontWeight: 'bold',
color: 'white',
fontSize: 28
  },
  SignInTitleText: {
    width: 343,
    height: 72, 
    fontFamily: font.body,
    // fontWeight: '400',
    color: 'white',
    fontSize: 16
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
fontFamily: font.heading,
// fontWeight: '500',
fontSize: 16
      },
      ForgotPasswordText: {
        color: '#03BFB5',
fontFamily: font.body,
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
        borderRadius: 4,
        backgroundColor: color.TextBoxBackgroundColor.primary,
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
        fontFamily: font.body,
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
    signupText: {
      color: '#000', fontSize: 15.2, color: '#03BFB5',
    },
    intersectImage: {position: 'absolute',
    width: 95.83,
    height: 219.55,
    right: 0,
    top: 0},
    errText: {
      marginTop: 5,
      color: 'red',
      fontSize: 11,
      marginBottom: -15,
      alignSelf: 'flex-start',
      marginLeft: 16,
      marginRight: 16,
      fontFamily: font.body,
  // fontWeight: '400',
  fontSize: 12
  },
    

})
export default styles;