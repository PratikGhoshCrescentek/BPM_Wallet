import { StyleSheet } from 'react-native'
import font from '../../../infrastructure/theme/fonts';
export const styles = StyleSheet.create({
  logoIconContainer: 
  {
    flexDirection: 'row',
    position: 'absolute',
    top: 185,
    alignSelf: 'center'
  },
  LoginBody: 
  {
    width: '100%',
    position: 'absolute',
    top: 348,
    flexDirection: 'column',
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
titleText: 
{
height: 172, 
fontFamily: font.body,
color: 'white',
fontSize: 28
},
SignInTitleText: 
  {
    height: 72, 
    fontFamily: font.heading,
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
  },
      
ForgotPasswordContainer: 
{
 marginBottom: 10,
 alignSelf: 'center'
},

donthaveanAccount1: 
{
  width: 343,
  flexDirection: 'row', 
  borderWidth:1,
  position:'absolute',
  bottom:60,
  alignSelf:'center',
  alignItems: 'center',
  justifyContent: 'center'
},

  container: {
    flex: 1,
      backgroundColor: "black",
    marginTop: 0,
    zIndex: 0,

  },
  donthaveanAccountText: {
    paddingTop: 4, paddingBottom: 4, color: 'white',fontFamily: font.heading,
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
      color: '#000', fontSize: 14, color: 'white',fontFamily: font.heading,
    },
    

})
export default styles;