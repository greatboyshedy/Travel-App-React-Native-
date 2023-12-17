import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import Details from './screens/Details';

const St = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Details" component={Details} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default St