import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInPage from './src/features/user_account/screens/SignIn';
import ForgotPasswordPage from './src/features/user_account/screens/ForgotPassword';
import CheckMailPage from './src/features/user_account/screens/CheckMail';
import IntroductionPage from './src/features/user_account/screens/Introduction';
import CreateNewPasswordPage from './src/features/user_account/screens/CreateNewPassword';
import ResetPasswordDonePage from './src/features/user_account/screens/ResetPasswordDone';
import SignUpPersonalDetailsPage from './src/features/user_account/screens/SignUpPersonalDetails';

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
