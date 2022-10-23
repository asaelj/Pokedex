import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CountScreen from './CountScreen';

const Stack = createStackNavigator();

const CountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contador de pokemons" component={CountScreen} />
    </Stack.Navigator>
  );
};

export default CountStack;
