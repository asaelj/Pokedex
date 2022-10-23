import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import ProfileFormScreen from './ProfileFormScreen';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Perfil de usuario" component={ProfileScreen} />
      <Stack.Screen name="Editar perfil" component={ProfileFormScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
