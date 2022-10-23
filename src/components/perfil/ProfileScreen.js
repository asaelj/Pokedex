/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image, Button} from 'react-native';
import {getData} from '../../utils/storage';

const style = StyleSheet.create({
  container: {
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    fontWeight: '800',
  },
  fecha: {
    fontSize: 20,
  },
});

const ProfileScreen = ({navigation}) => {
  const [user, setUser] = useState({});

  const getUserData = async () => {
    const data = await getData('user');
    console.log('user', data);
    data === undefined ? setUser({}) : setUser(data);
  };

  const handleEdit = () => {
    navigation.navigate('Editar perfil');
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getUserData();
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <View style={style.container}>
      <Image
        source={{uri: `data:image/jpeg;base64,${user.pic}`}}
        style={{
          width: 150,
          height: 150,
          borderRadius: 100,
          borderColor: '#c1c1c1',
          borderWidth: 1,
        }}
      />
      <Text style={style.name}>{user.nombre}</Text>
      <Text style={style.fecha}>{user.fecha}</Text>
      <Button
        title={Object.entries(user).length === 0 ? 'Crear' : 'Editar'}
        onPress={handleEdit}
      />
    </View>
  );
};

export default ProfileScreen;
