import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import PagamentoFormScreen from './src/screens/PagamentoFormScreen';

const Stack = createStackNavigator();

export default function StackScreen() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerMode: 'none'}}
        />
        <Stack.Screen
          name="PagamentoFormScreen"
          component={PagamentoFormScreen}
          options={{title: 'Novo Pagamento'}}
        />
      </Stack.Navigator>
  );
  
  

}

