import { StyleSheet } from 'react-native'
import color from '../../../infrastructure/theme/colors';
import font from '../../../infrastructure/theme/fonts';
export const styles = StyleSheet.create({
  scrollViewStyle: {height: '100%', width: '100%'},
  titleLabelContainer: {
    flexDirection: 'row',
left: 16,
marginTop: '23.39%',
  },
  SignInTitleContainer: {
    flexDirection: 'row',
left: 16,
marginTop: 10,
  },
  titleText: {
width: 298,
height: 82, 
fontFamily: font.heading,
color: 'white',
fontSize: 28
  },
  SignInTitleText: {
    width: 343,
    height: 24, 
    fontFamily: font.body,
    color: 'white',
    fontSize: 16
      },

     LoginBody: {
        width: '100%',
        top: 32,
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
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 4,
        backgroundColor: color.TextBoxBackgroundColor.primary,
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
marginTop: -18,
marginLeft: -50
      },
      inputIconCheckForPasswordHiddenOrShow: {
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
        fontFamily: font.body,
fontSize: 14,
paddingRight: 40
      },
  donthaveanAccount: {width: 343,flexDirection: 'row', borderWidth:1,position:'absolute',bottom:60,alignSelf:'center',
  alignItems: 'center', justifyContent: 'center'},
  container: {
    flex: 1,
      backgroundColor: "black",
    marginTop: 0,
    zIndex: 0,

  },
  donthaveanAccountText: {
    paddingTop: 4, paddingBottom: 4,  fontSize: 16, color: 'white', fontFamily: font.body,
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
      fontFamily: font.body,
  fontSize: 12
  },
    signupText: {
      color: '#000', fontSize: 15.2, color: '#03BFB5', fontFamily: font.body,
    },
    

})
export default styles;