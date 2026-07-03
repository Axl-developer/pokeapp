import { PokemonCard } from "@/shared/components/PokemonCard";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useGetPokemons } from "../hooks/useGetPokemons";
import { useSelectedPokemon } from "../hooks/useSelectedPokemon";


export const PokemonsScreen = () => {
  const { selectePokemon } = useSelectedPokemon();

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

  return (
      <View style={{flex:1}}>
        <FlatList
          data={pokemons}
          keyExtractor={pokemon => pokemon.name}
          renderItem={({ item }) => <PokemonCard pokemon={item} handleSelectPokemon={selectePokemon} />}
          numColumns={2}
        />
      </View>
  );
};

