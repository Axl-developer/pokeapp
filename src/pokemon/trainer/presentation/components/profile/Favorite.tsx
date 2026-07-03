import { PokemonCard } from "@/shared/components/PokemonCard";
import { useSelectedPokemon } from "@/shared/hooks/useSelectedPokemon";
import { useTrainerStore } from "@/store/trainer.store";
import { FlatList, StyleSheet, Text, View } from "react-native";


export const Favorite = () => {

 const favorites = useTrainerStore( state => state.favorites );
 
 const { selectePokemon } = useSelectedPokemon();

  return (
    <View style={style.container}>
      <Text style={style.title}>Favoritos</Text>

      <FlatList
        style={{ marginLeft: -18, paddingTop: 30 }}
        data={favorites}
        keyExtractor={pokemon => pokemon.name}
        renderItem={({ item }) => <PokemonCard pokemon={item} handleSelectPokemon={selectePokemon} />}
        numColumns={2}
      />
    </View>
  )
}


const style = StyleSheet.create({
    container:{
      flex:1,
      marginTop: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: '500',
    },
})