import { StatsChart } from "@/pokemon/pokemons/presentation/components/StatsChart";
import { useGetPokemonsSpecies } from "@/pokemon/pokemons/presentation/hooks";
import { useGetDataPokemon } from "@/pokemon/pokemons/presentation/hooks/useGetDataPokemon";
import { useAddFavorite } from "@/pokemon/trainer/presentation/hooks/useAddFavorite";
import { useRemoveFavorite } from "@/pokemon/trainer/presentation/hooks/useRemoveFavorite";
import { pokemonTypeColors } from "@/shared/types/colors";
import { usePokemonStore } from "@/store/pokemon.store";
import { useTrainerStore } from "@/store/trainer.store";
import Ionicons from "@react-native-vector-icons/ionicons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

export default function pokemonScreen () {
  const pokemon = usePokemonStore( state => state.pokemon );
  const { favorites } = useTrainerStore();
  const species = useGetPokemonsSpecies(pokemon?.name ?? '');
  const { fetchPokemon, isLoading } = useGetDataPokemon();
  const { addFavorite } = useAddFavorite();
  const { removeFavorite } = useRemoveFavorite();

  const [isShiny, setIsShiny] = useState(false);

  useEffect(() => {
    const random = Math.random() * 3
  
    Math.floor(random) === 0
    ?setIsShiny(true)
    :setIsShiny(false)
    
  }, [])

  const uri = isShiny ? pokemon?.images.shiny : pokemon?.images.generic

  const getColorPokemon = (type: string) => pokemonTypeColors[type] ?? "#777"

  const handleSelect = (name: string) => {
    fetchPokemon(name ?? '');

    router.push({
        pathname: "/pokemon/[id]",
        params: { id: pokemon?.id.toString() ?? '' },
    });
  }

  const favorite = favorites.find( favorite => favorite.id === pokemon?.id )

  const handleFavorite = () => {
    favorite ? removeFavorite(pokemon!.id) :addFavorite(pokemon!) 
  }

  if(isLoading) {
    return <Text>Loading</Text>
  }

  const getHeart = (): 'heart'|'heart-outline' => favorite ?'heart' :'heart-outline'
 

  return (
    <ScrollView>
      <Animated.View entering={FadeIn.springify()}>
        <View style={[
          style.banner,
          {
            backgroundColor: getColorPokemon(pokemon!.types[0].name),
          }
          ]}>
        <Image
          style={style.image}
          source={{uri}}
        />
        </View>
        <View style={style.target}>
          <Pressable onPress={handleFavorite}>
            <Ionicons
              name={getHeart()}
              size={32}
              color="red"
            />
          </Pressable>
          <View style={style.info}>
            <Text style={style.name}>{pokemon?.name}</Text>
              {
                isShiny && <Text style={{color: getColorPokemon(pokemon!.types[0].name), fontSize: 20}}>Shiny</Text>
              }
            <Text style={style.number}>#{pokemon?.id}</Text>
            <View style={style.types}>
              {
                pokemon?.types.map( typePokemon => 
                  <Text
                    style={[style.type, {
                      borderColor: getColorPokemon(typePokemon.name),
                      color: getColorPokemon(typePokemon.name),
                    }]}>{typePokemon.name}</Text>
                )
              }
            </View>
        </View>

          <StatsChart
            maxValue={255}
            data={pokemon?.graphic?.map(({ name, baseStat }, index) => ({
                id: index.toString(),
                label: name,
                value: baseStat,
                color: getColorPokemon(pokemon!.types[0].name),
              })) ?? []}
          />

          {
            (species?.[0]?.name?.length ?? 0) !== 0 &&
            <View style={style.varients}>
              <Text style={style.varientsText}>Selecionar Variantes</Text>
              <View style={style.variantButtons}>
                {
                  species?.map( varient => (
                    <Pressable onPress={() => handleSelect(varient?.name ?? '')} style={style.variantButton}>
                      <Text>{varient.name}</Text>
                    </Pressable>
                  ))
                }
              </View>
            </View>

          }

        </View>
      </Animated.View>
    </ScrollView>

  )
}

const style = StyleSheet.create({
  banner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  image: {
    height: 300,
    width: 300,
    zIndex: 3,
  },
  target: {
    backgroundColor: 'white',
    borderRadius: 25,
    display: 'flex',
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 20,
    position: 'relative',
    top: -50,
    width: '100%',
    zIndex: 2,
  },
  info:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
    color: '#444242'
  },
  number: {
    color: '#444242'
  },
  types: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    width: '100%',
  },
  type: {
    textAlign: 'center',
    borderRadius: 15,
    borderWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 40,
    fontWeight: '800',
  },
  varients: {
    marginTop: 20,
  },
  varientsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  variantButtons: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  variantButton: {
    backgroundColor: '#0000001a',
    borderRadius:10,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
  }
})