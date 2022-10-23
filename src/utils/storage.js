import AsyncStorage from '@react-native-async-storage/async-storage';

export const setObjectValue = async value => {
  console.log('SetObjectValue', value.name);
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(value.name, jsonValue);
    console.log(JSON.parse(jsonValue));
  } catch (e) {
    console.log('Error al guardar', e.message);
  }
};

export const setObjectUser = async value => {
  console.log('SetObjectValue User');
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('user', jsonValue);
    console.log(JSON.parse(jsonValue));
  } catch (e) {
    console.log('Error al guardar', e.message);
  }
};

export const getData = async key => {
  console.log('getData', key);
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log(JSON.parse(value));
      return JSON.parse(value);
    } else {
      console.log('No encontrado');
    }
  } catch (e) {
    console.log('Error al cargar');
  }
};

export const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
    console.log(keys);
    return keys.filter(i => i !== 'user') || [];
  } catch (e) {
    console.log('Error al cargar');
  }

  console.log(keys);
  // example console.log result:
  // ['@MyApp_user', '@MyApp_key']
};

export const removeKey = async key => {
  try {
    const removed = await AsyncStorage.removeItem(key);
    console.log('Elemento borrado', removed);
  } catch (e) {
    console.log('Error al eliminar', e.message);
  }
};
