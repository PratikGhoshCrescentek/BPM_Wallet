import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInPage from './Screen/SignIn';
import IntroductionPage from './Screen/Introduction';
import ForgotPasswordPage from './Screen/ForgotPassword';
import CheckMailPage from './Screen/CheckMail';
import CreateNewPasswordPage from './Screen/CreateNewPassword';
import ResetPasswordDonePage from './Screen/ResetPasswordDone';
import SignUpPersonalDetailsPage from './Screen/SignUpPersonalDetails';
import SignUpAccountDetailsPage from './Screen/SignUpAccountDetails';

const AuthStack = createNativeStackNavigator();
const headerShownFlag = false
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none" initialRouteName="Home">
    <AuthStack.Screen name="IntroductionPage" component={IntroductionPage} options={{
        headerShown: headerShownFlag,
      }}/>
      <AuthStack.Screen name="SignInPage" component={SignInPage}  options={{
        headerShown: headerShownFlag,
      }}/>
      <AuthStack.Screen name="ForgotPasswordPage" component={ForgotPasswordPage}  options={{
        headerShown: headerShownFlag,
      }}/>
      <AuthStack.Screen name="CheckMailPage" component={CheckMailPage}  options={{
        headerShown: headerShownFlag,
      }}/>
      <AuthStack.Screen name="CreateNewPasswordPage" component={CreateNewPasswordPage}  options={{
        headerShown: headerShownFlag,
      }}/>
      <AuthStack.Screen name="ResetPasswordDonePage" component={ResetPasswordDonePage}  options={{
        headerShown: headerShownFlag,
      }}/>
      <AuthStack.Screen name="SignUpPersonalDetailsPage" component={SignUpPersonalDetailsPage}  options={{
        headerShown: headerShownFlag,
      }}/>
      <AuthStack.Screen name="SignUpAccountDetailsPage" component={SignUpAccountDetailsPage}  options={{
        headerShown: headerShownFlag,
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
  <NavigationContainer>
    <RootStackScreen />
  </NavigationContainer>
);
