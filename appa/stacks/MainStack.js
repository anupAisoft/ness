
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react'
import Profile from '../screens/profile';



import TabNaV from './Tab';
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNaV" component={TabNaV} />
      <Stack.Screen name="Profile" component={Profile} />
  
     
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainStack

