import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import StackScreen from './StackScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StackScreen/>  
      </SafeAreaProvider>
    </NavigationContainer>
  );

}