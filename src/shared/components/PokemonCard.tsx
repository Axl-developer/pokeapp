import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import Animated, { LinearTransition, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Pokemon } from "../types";
import { pokemonTypeColors } from "../types/colors";

interface PokemonCardProps {
  pokemon: Pokemon;
  handleSelectPokemon: (pokemon: Pokemon) => Promise<void>
}

export const PokemonCard = ({ pokemon, handleSelectPokemon }: PokemonCardProps) => {

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    scale.value = withSpring(0.97, {}, () => {
        scale.value = withSpring(1);
    });

    handleSelectPokemon(pokemon)

    router.push({
        pathname: "/pokemon/[id]",
        params: { id: pokemon.id.toString() },
    });
  }

  return (
    <Animated.View style={animatedStyle} layout={LinearTransition.springify()}>
      <Pressable
        style={[
          styles.target,
          {
            backgroundColor:
              pokemonTypeColors[pokemon.types[0].name] ?? "#777",
          },
        ]}
        onPress={handlePress}
      >
        <Image source={{ uri: pokemon.images.generic }} style={styles.image} />
        <Text style={{ color: "white" }}>{pokemon.name}</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  target: {
    marginVertical: 15,
    marginHorizontal: 10,
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    height: 100,
    width: 180,
    display: 'flex',
    justifyContent: 'flex-end',
    flex: 1 / 2
  },
  image: {
    position: "absolute",
    top: -40,
    right: -20,
    height: 130,
    width: 130,
  },
});