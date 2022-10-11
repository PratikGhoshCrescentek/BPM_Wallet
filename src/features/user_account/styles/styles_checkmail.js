import { StyleSheet } from 'react-native'
import color from '../../../infrastructure/theme/colors';
import font from '../../../infrastructure/theme/fonts';
export const styles = StyleSheet.create({
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
height: 172, 
fontFamily: font.heading,
color: 'white',
fontSize: 28
  },
  SignInTitleText: 
  {
    height: 72, 
    fontFamily: font.body,
    color: 'white',
    fontSize: 16,
    alignSelf: 'center',
      },

      SkipTitleText: {
        height: 72, 
        fontFamily: font.body,
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
      
  
      OpenEmailTextContainer: {
        marginBottom: 10,
alignSelf: 'center'
      },
      

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
    paddingTop: 4, paddingBottom: 4, color: 'white',fontFamily: font.body,
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
      color: '#000', fontSize: 15.2, color: '#03BFB5',fontFamily: font.body,
      // fontWeight: '500',
    },
    intersectImage: {position: 'absolute',
    width: 95.83,
    height: 219.55,
    right: 0,
    top: 0}
    

})
export default styles;