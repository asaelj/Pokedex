/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  Pressable,
  Image,
} from 'react-native';
import DeleteImage from '../../assets/basura.png';
import DetalleImage from '../../assets/busqueda.png';

const heightCard = Dimensions.get('screen').height / 2 - 87;
const style = StyleSheet.create({
  item: {
    height: heightCard,
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  avatar: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
  },
  contentImage: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
  },
  types: {
    color: '#c0c0c0',
  },
  moves: {
    color: '#c0c0c0',
  },
  options: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    width: 35,
    height: 35,
  },
  option: {
    marginRight: 20,
  },
});

const PokemonItem = ({item, onView, onDelete}) => {
  console.log('Item list', item);

  return (
    <View style={style.item}>
      <View style={style.contentImage}>
        <Image
          source={{uri: item.item.sprites.front_shiny}}
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            borderColor: '#c1c1c1',
            borderWidth: 1,
        }}
        />
      </View>
      <Text style={style.name}>{item.item.name.toUpperCase()}</Text>
      <Text style={style.types}>{`${item.item.types
        .map(i => i.type.name)
        .join('-')}`}</Text>
      <Text style={style.moves}>{`${item.item.moves[0].move.name} ${item.item.moves[item.item.moves.length - 1].move.name}`}</Text>
      <View style={style.options}>
        <Pressable style={style.option} onPress={onView}>
          <Image style={style.button} source={DetalleImage} />
        </Pressable>
        <Pressable style={style.option} onPress={onDelete}>
          <Image style={style.button} source={DeleteImage} />
        </Pressable>

      </View>
    </View>
  );
};

export default PokemonItem;
