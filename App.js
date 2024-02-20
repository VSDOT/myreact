import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/HomeScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import Onbording2 from './src/Screens/Onbording2';
import LoginScreen from './src/Screens/LoginScreen';
import MovieTicketScreen from './src/Screens/MovieTicketScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import ProfileTicketStatus from './src/Screens/ProfileTicketStatus';
import ProfileHelpFeedback from './src/Screens/ProfileHelpFeedback';
import ProfileHelpFeedback2 from './src/Screens/ProfileHelpFeedback2';
import ProfileSettings from './src/Screens/ProfileSettings';
import ProfileTermsTopBar from './src/Screens/ProfileTermsTopBar';
import ProfileTerms1 from './src/Screens/ProfileTerms1';
import ProfileTerms2 from './src/Screens/ProfileTerms2';
import ProfileAmountStatus from './src/Screens/ProfileAmountStatus/ProfileAmountStatus';
import TicketBookingScreen from './src/Screens/TicketBookingScreen';
import CompleteBooking from './src/Screens/CompleteBooking';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{headerShown : false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="OnbordScreen2" component={Onbording2} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MovieTicketScreen" component={MovieTicketScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="ProfileAmountStatus" component={ProfileAmountStatus} />
        <Stack.Screen name="ProfileTicketStatus" component={ProfileTicketStatus} />
        <Stack.Screen name="ProfileHelpFeedback" component={ProfileHelpFeedback} />
        <Stack.Screen name="ProfileHelpFeedback2" component={ProfileHelpFeedback2} />
        <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
        <Stack.Screen name="ProfileTermsTopBar" component={ProfileTermsTopBar} />
        <Stack.Screen name="ProfileTerms1" component={ProfileTerms1} />
        <Stack.Screen name="ProfileTerms2" component={ProfileTerms2} />
        <Stack.Screen name="TicketBookingScreen" component={TicketBookingScreen} />
        <Stack.Screen name="CompleteBooking" component={CompleteBooking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

