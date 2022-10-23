/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {setObjectValue} from '../../utils/storage';

const style = StyleSheet.create({
  name: {
    fontSize: 30,
    fontWeight: '600',
  },
  details: {
    color: '#c1c1c1',
    fontSize: 20,
  },
  contentImage: {
    display: 'flex',
    alignItems: 'center',
  },
});

const PokemonDetailScreen = ({route, navigation}) => {
  const {pokemon, storage} = route.params;
  const [moves, setMoves] = useState('');

  const handleAddPokemon = () => {
    setObjectValue(pokemon.item);
    // eslint-disable-next-line no-alert
    alert('Pokemon guardado');
    navigation.navigate('Lista pokemon');
  };

  useEffect(() => {
    console.log('El move', pokemon.item.moves);

    if (pokemon.item !== undefined) {
      if (pokemon.item.moves.length > 5) {
        let stackMoves = [];
        for (
          let i = pokemon.item.moves.length - 5;
          i < pokemon.item.moves.length;
          i++
        ) {
          stackMoves.push(pokemon.item.moves[i].move.name);
        }
        console.log(stackMoves.join(','));
        setMoves(stackMoves);
      } else {
        let stackMoves = [];
        for (let mov of pokemon.item.moves) {
          stackMoves.push(mov.name);
        }
        setMoves(stackMoves);
      }
    }
  }, [pokemon]);

  return (
    <View>
      <View style={style.contentImage}>
        <Image
          source={{uri: pokemon.item.sprites.front_shiny}}
          style={{
            width: 250,
            height: 250,
            borderRadius: 100,
            borderColor: '#c1c1c1',
            borderWidth: 1,
          }}
        />
      </View>
      <Text style={style.name}>{pokemon.item.name.toUpperCase()}</Text>
      <Text style={style.details}>{`Types: ${pokemon.item.types
        .map(item => item.type.name)
        .join('-')}`}</Text>

      <Text style={style.details}>{`Moves: ${moves}`}</Text>
      {!storage && <Button title="Agregar" onPress={handleAddPokemon} />}
    </View>
  );
};

export default PokemonDetailScreen;
