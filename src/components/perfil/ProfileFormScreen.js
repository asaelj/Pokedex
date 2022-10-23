/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Button, Pressable} from 'react-native';
import {TextInput, Stack} from '@react-native-material/core';
import {getData, setObjectUser} from '../../utils/storage';
import {launchCamera} from 'react-native-image-picker';

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

const ProfileScreenForm = ({navigation}) => {
  const [user, setUser] = useState({});

  const getUserData = async () => {
    const data = await getData('user');
    console.log('user', data);
    data === undefined ? setUser({}) : setUser(data);
  };

  const handleSubmit = () => {
    console.log(user);
    setObjectUser(user);
    // eslint-disable-next-line no-alert
    alert('Datos guardados');
    navigation.navigate('Perfil de usuario');
  };

  const handleChange = (e, input) => {
    setUser({
      ...user,
      [input]: e,
    });
  };

  const handlePic = () => {
    launchCamera(
      {
        mediaType: 'photo',
        maxWidth: 350,
        maxHeight: 350,
        quality: 0.5,
        cameraType: 'front',
        includeBase64: true,
      },
      response => {
        console.log(response);
        console.log('Uri', response.assets[0].base64);
        setUser({
          ...user,
          pic: response.assets[0].base64,
        });
      },
    );
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <View style={style.container}>
      <Pressable onPress={handlePic}>
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
      </Pressable>
      <Stack
        spacing={2}
        style={{
          margin: 16,
          width: '100%',
        }}>
        <TextInput
          label="Nombre"
          variant="outlined"
          value={user.nombre}
          onChangeText={e => handleChange(e, 'nombre')}
        />
        <TextInput
          label="Fecha nacimiento"
          variant="outlined"
          value={user.fecha}
          onChangeText={e => handleChange(e, 'fecha')}
        />
      </Stack>
      <Button title="Guardar" onPress={handleSubmit} />
    </View>
  );
};

export default ProfileScreenForm;
