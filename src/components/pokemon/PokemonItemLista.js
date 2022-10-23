/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ListItem, Avatar} from '@react-native-material/core';

const PokemonItem = ({item, onPress}) => {
  console.log('Item pokemon', item);
  return (
    <ListItem
      leadingMode="avatar"
      onPress={onPress}
      leading={
        <Avatar
          style={{
            backgroundColor: '#fff',
          }}
          image={{uri: item.item.sprites.front_shiny}}
        />
      }
      title={item.item.name.toUpperCase()}
      secondaryText={`
      Types: ${item.item.types.map(item => item.type.name).join('-')}\n
      Moves: ${item.item.moves[0].move.name}
      ${item.item.moves[item.item.moves.length - 1].move.name}
      `}
    />
  );
};

export default PokemonItem;
