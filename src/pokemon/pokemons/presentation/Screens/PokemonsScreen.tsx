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
      <View style={{flex:1, marginTop: 40}}>
        <Text style={{fontWeight:'bold', marginHorizontal: 20, fontSize: 30}} >Pokemons</Text>
        <FlatList
          data={pokemons}
          keyExtractor={pokemon => pokemon.name}
          renderItem={({ item }) => <PokemonCard pokemon={item} handleSelectPokemon={selectePokemon} />}
          numColumns={2}
        />
      </View>
  );
};

