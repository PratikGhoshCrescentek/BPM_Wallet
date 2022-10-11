import { StyleSheet } from 'react-native'
import color from '../../../infrastructure/theme/colors';
import font from '../../../infrastructure/theme/fonts';
export const styles = StyleSheet.create({
  backIconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 16,
top: 74,
  },
  logoIconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: 16,
top: 125,
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
color: 'white',
fontSize: 28
  },
  SignInTitleText: {
    width: 343,
    height: 72, 
    fontFamily: font.body,
    color: 'white',
    fontSize: 16
      },

     LoginBody: {
        width: '100%',
        position: 'absolute',
top: 328,
        flexDirection: 'column',
      },
      plainText: {
        marginBottom: 10,
        color: 'white',
        marginLeft: 16,
marginRight: 16,
fontFamily: font.heading,
fontSize: 16
      },
      ForgotPasswordText: {
        color: '#03BFB5',
fontFamily: font.body,
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
        backgroundColor: color.TextBoxBackgroundColor.primary,
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 4
        
      },
      inputIcon: {
        height: '100%',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputIconCheck: {
        height: '100%',
        width: 50,
        justifyContent: 'flex-end',
marginTop: -20,
marginLeft: -30
      },
      inputIconCheckForPasswordCross: {
        height: '100%',
        width: 50,
        justifyContent: 'flex-end',
marginTop: -20,
marginLeft: -50
      },
      inputIconCheckForPasswordHiddenOrShow: {
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
  fontSize: 12
  }
    

})
export default styles;