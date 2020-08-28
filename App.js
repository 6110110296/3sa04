import React from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherScreen from './screen/WeatherScreen';
import RegionScreen from './screen/RegionScreen';
import ZipCodeScreen from './screen/ZipCodeScreen';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={RegionScreen}/>
        <Stack.Screen name="Province" component={ZipCodeScreen}/>
        <Stack.Screen name="Weather" component={WeatherScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}