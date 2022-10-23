import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PokemonsScreen from '../pokemon/PokemonsScreen';
import PokemonListaScreen from '../pokemon/PokemonListaScreen';
import PokemonDetailScreen from '../pokemon/PokemonDetailScreen';
import {Button} from 'react-native';

const Stack = createStackNavigator();

const PokemonStack = ({navigation}) => {
  const getDetail = () => {
    navigation.navigate('Lista pokemon');
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokemonsScreen}
        options={{
          headerRight: () => <Button title="Agregar" onPress={getDetail} />,
        }}
      />
      <Stack.Screen name="Lista pokemon" component={PokemonListaScreen} />
      <Stack.Screen name="Detalle pokemon" component={PokemonDetailScreen} />
    </Stack.Navigator>
  );
};

export default PokemonStack;
