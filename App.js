import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PokemonStack from './src/components/pokemon/PokemonStack';
import PerfilStack from './src/components/perfil/ProfileStack';
import CountStack from './src/components/count/CountStack';
import PokemonImage from './src/assets/pokemon.png';
import UsuarioImage from './src/assets/usuario.png';
import CountImage from './src/assets/count.png';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tabs.Screen
          name="Pokemons"
          component={PokemonStack}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={PokemonImage}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Perfil"
          component={PerfilStack}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={UsuarioImage}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Contador"
          component={CountStack}
          options={{
            tabBarIcon: ({size, color}) => (
              <Image
                style={{tintColor: color, width: size, height: size}}
                source={CountImage}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
