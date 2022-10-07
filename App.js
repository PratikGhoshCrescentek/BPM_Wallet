import * as React from 'react';
import { View, Text, Button, StyleSheet,
  Image,
  TouchableOpacity, Platform,
  SafeAreaView, AsyncStorage, StatusBar, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {navigationRef} from './Route';
import SignInPage from './Screen/SignIn';
import IntroductionPage from './Screen/Introduction';
import ForgotPasswordPage from './Screen/ForgotPassword';
import CheckMailPage from './Screen/CheckMail';
import CreateNewPasswordPage from './Screen/CreateNewPassword';
import ResetPasswordDonePage from './Screen/ResetPasswordDone';
import SignUpPersonalDetailsPage from './Screen/SignUpPersonalDetails';

 const AuthStack = createNativeStackNavigator();
function HomeScreen({ navigation }) {

  React.useEffect( async () => 
  {
    LoginReg();
    
  }, []);
  const LoginReg = async () => {
    var token = await AsyncStorage.getItem('token');
    setTimeout(() => 
    {
      if (token == null || token == undefined) {
         navigation.replace('IntroductionPage')
        //  navigation.navigate('LoginPage'); // Dashboard_donation // StartCampaign  
      } else {
        // navigation.replace('LoginPage');
      }
    }, 2000);
  };
  return (
    <ImageBackground source={require('./Images/splash-screen.png')} style= {{
      flex: 1,
       width: null,
      height: null,
      resizeMode: 'cover',
      justifyContent: 'center',

    }} >
    <StatusBar
        backgroundColor="#090915"
        barStyle="light-content"
    />
</ImageBackground>
  );
}

const Stack = createNativeStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none" initialRouteName="Home">
    <AuthStack.Screen name="Home" component={HomeScreen} options={{
        headerShown: false,
      }}/>
      <AuthStack.Screen name="IntroductionPage" component={IntroductionPage}  options={{
        headerShown: false,
        headerTitle: 'Orders'
      }}/>
      <AuthStack.Screen name="SignInPage" component={SignInPage}  options={{
        headerShown: false,
        headerTitle: 'Orders'
      }}/>
      <AuthStack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage}  options={{
        headerShown: false,
        headerTitle: 'Orders'
      }}/>
      <AuthStack.Screen name="CheckMailPage" component={CheckMailPage}  options={{
        headerShown: false,
        headerTitle: 'Orders'
      }}/>
      <AuthStack.Screen name="CreateNewPasswordPage" component={CreateNewPasswordPage}  options={{
        headerShown: false,
        headerTitle: 'Orders'
      }}/>
      <AuthStack.Screen name="ResetPasswordDonePage" component={ResetPasswordDonePage}  options={{
        headerShown: false,
        headerTitle: 'Orders'
      }}/>
      <AuthStack.Screen name="SignUpPersonalDetailsPage" component={SignUpPersonalDetailsPage}  options={{
        headerShown: false,
        headerTitle: 'Orders'
      }}/>
      
  </AuthStack.Navigator>
);
const RootStack = createNativeStackNavigator();
const RootStackScreen = ({}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="App" component={AuthStackScreen} options={{
        headerShown: false,
      }}/>
  </RootStack.Navigator>
);

export default ({}) => (
  <NavigationContainer ref={navigationRef}>
    <RootStackScreen />
  </NavigationContainer>
);
// export default App;