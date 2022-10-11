import { StyleSheet } from 'react-native'
import color from '../../../infrastructure/theme/colors';
import font from '../../../infrastructure/theme/fonts';
export const styles = StyleSheet.create({
  logoIconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: '57.29%',
    top: 164,
  },

  BText: {
    flexDirection: 'row',
    position: 'absolute',
    left: '47.53%',
    top: 180,
  },

  walletTextContainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: '47.53%',
    top: 214,
  },

  SignInButton: 
  {
    borderWidth:1,
    position:'absolute',
    bottom:106,
    alignSelf:'center'
  },

  donthaveanAccount: 
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
    paddingTop: 4, 
    paddingBottom: 4,  
    fontSize: 16, 
    color: 'white', 
    fontFamily: font.body
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
      color: '#000', 
      fontSize: 15.2, 
      color: '#03BFB5',
      fontFamily: font.body,
    }
    

})
export default styles;