/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Dimensions,
  View,
  Button,
  FlatList,
} from 'react-native';
import PokemonItem from './PokemonItemLista';

const centerScreen = Dimensions.get('screen').width / 2 - 10;

const style = StyleSheet.create({
  loading: {
    position: 'absolute',
    width: 20,
    bottom: 2,
    right: centerScreen,
  },
});

const PokemonListaScreen = ({navigation}) => {
  const [pokemons, setPokemons] = useState([]);
  const [pages, setPages] = useState({});
  const [loading, setLoading] = useState(false);

  const getDetail = pokemon => {
    navigation.navigate('Detalle pokemon', {pokemon});
  };

  // Bucle de request para que se vea el pokemon
  // Poco optimo pero bonito :)
  const getPokemons = async url => {
    setLoading(true);
    const req = await fetch(url);
    let json = await req.json();
    const pokemonsTemp = json.results;
    const listaPokemon = [];
    for (const pokemonTemp of pokemonsTemp) {
      const reqPok = await fetch(pokemonTemp.url);
      let jsonPok = await reqPok.json();
      listaPokemon.push(jsonPok);
    }
    setPokemons([...pokemons, ...listaPokemon]);
    setPages({
      count: json.count,
      next: json.next,
      previous: json.previous,
    });
    setLoading(false);
  };

  useEffect(() => {
    getPokemons('https://pokeapi.co/api/v2/pokemon');
  }, []);

  useEffect(() => {
    console.log(pokemons);
  }, [pages]);

  useEffect(() => {
    console.log('State pokemon', pokemons);
    console.log('Pages', pages);
  }, [pokemons, pages]);

  return (
    <View>
      <FlatList
        data={pokemons}
        renderItem={item => (
          <PokemonItem onPress={() => getDetail(item)} item={item} />
        )}
        onEndReached={() => getPokemons(pages.next)}
      />
      {loading && (
        <ActivityIndicator style={style.loading} color="blue" size="large" />
      )}
    </View>
  );
};

export default PokemonListaScreen;
