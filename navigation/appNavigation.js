import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';
import useAuth from '../hooks/useAuth';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import Chat from '../screens/Chat';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {

  const {user} = useAuth();

  if(user){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="Movie" options={{headerShown: false}} component={MovieScreen} />
          <Stack.Screen name="Person" options={{headerShown: false}} component={PersonScreen} />
          <Stack.Screen name="Search" options={{headerShown: false}} component={SearchScreen} />
          <Stack.Screen name="Chat" options={{headerShown: false}} component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    )

  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
          <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
          <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )

  }


  
  
}
