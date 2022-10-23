/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {getAllKeys, getData, removeKey} from '../../utils/storage';
import {FlatList, View} from 'react-native';
import PokemonItem from './PokemonItem';
import {setCount} from '../../redux/actions';
import {connect} from 'react-redux';

const PokemonsScreen = ({navigation, ...props}) => {
  const [pokemons, setPokemons] = useState([]);

  const handleGetAll = async () => {
    // obtiene las keys para luego obtener los objetos de cada pokemon
    const keys = await getAllKeys();
    const res = [];
    for (const k of keys) {
      const v = await getData(k);
      res.push(v);
    }
    setPokemons(res);
    console.log('GetAll', res);
  };

  const handleView = pokemon => {
    console.log(pokemon.item);
    navigation.navigate('Detalle pokemon', {pokemon, storage: true});
  };

  const handleDelete = pokemon => {
    console.log(pokemon.item);
    removeKey(pokemon.item.name);
    handleGetAll();
  };

  useEffect(() => {
    console.log('State', pokemons);
    props.setCount(pokemons.length);
  }, [pokemons]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      handleGetAll();
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <View>
      <FlatList
        data={pokemons}
        renderItem={poke => (
          <PokemonItem
            onView={() => handleView(poke)}
            onDelete={() => handleDelete(poke)}
            item={poke}
          />
        )}
      />
    </View>
  );
};

const mapDispatchToProps = {
  setCount,
};

export default connect(null, mapDispatchToProps)(PokemonsScreen);
