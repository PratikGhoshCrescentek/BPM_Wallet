import { StyleSheet } from 'react-native'
import color from '../../../infrastructure/theme/colors';
import font from '../../../infrastructure/theme/fonts';
export const styles = StyleSheet.create({
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
    height: 172, 
    fontFamily: font.heading,
    color: 'white',
    fontSize: 28
      },
      SignInTitleText: {
        height: 72, 
        fontFamily: font.body,
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
fontFamily: font.heading,
fontSize: 16
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
      inputContainerForDOB: {
        borderWidth: 1,
        height: 36,
        width: '30%',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 16,
        marginRight: 10,
        borderRadius: 4,
        backgroundColor: color.TextBoxBackgroundColor.primary,
        
      },
      inputContainerForMonth: {
        borderWidth: 1,
        height: 36,
        width: '30%',
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 10,
        borderRadius: 4,
        backgroundColor: color.TextBoxBackgroundColor.primary,
        
      },
      inputContainerForYear: {
        borderWidth: 1,
        height: 36,
        width: '40%',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 4,
        backgroundColor: color.TextBoxBackgroundColor.primary,
        
      },
      inputIconCheck: {
        height: '100%',
        width: 50,
        justifyContent: 'flex-end',
        marginTop: -20,
        marginLeft: 20
      },
      inputIconCheckForPasswordCross: {
        height: '100%',
        width: 50,
        justifyContent: 'flex-end',
        marginTop: -18,
        marginLeft: 20
      },
      inputTag: 
      {
        width: '85%',
        paddingLeft: 8,
        paddingRight: 3,
        color: 'white',
        fontFamily: font.body,
        fontSize: 16,
        paddingRight: 10,
      },

  container: {
    flex: 1,
      backgroundColor: "black",
    marginTop: 0,
    zIndex: 0,
  },

    errText: 
    {
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
    StepIndicatorContainer: 
    {
    position: 'absolute',
    flexDirection: 'row',
    width: '100%',
    height: 93.5,
    right: 0,
    top: 80
    },
    backIconContainer: 
    {
      flexDirection: 'row',
      position: 'absolute',
      left: 16,
    },

    logoIconContainer: 
    {
    flexDirection: 'row',
    position: 'absolute',
    top: 130,
    alignSelf: 'center'
    },
    

})
export default styles;