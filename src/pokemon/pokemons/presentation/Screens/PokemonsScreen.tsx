import { PokemonCard } from "@/shared/components/PokemonCard";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useGetPokemons } from "../hooks/useGetPokemons";


export const PokemonsScreen = () => {
  const {
    data: pokemons,
    isLoading,
    error,
    refetch,
  } = useGetPokemons();

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Ocurrió un error al obtener los pokémon.</Text>
      </View>
    );
  }
console.log('---------------------',pokemons)
  return (
    <FlatList
      style={{flex: 1, display: 'flex', flexDirection: 'row',flexWrap: 'wrap'}}
      data={pokemons}
      keyExtractor={pokemon => pokemon.name}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
    />
  );
};

