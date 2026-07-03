import { router } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import Animated, { LinearTransition, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { Pokemon } from "../types";
import { pokemonTypeColors } from "../types/colors";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = () => {
    scale.value = withSpring(0.97, {}, () => {
        scale.value = withSpring(1);
    });

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
    margin: 20,
    backgroundColor: "red",
    borderRadius: 10,
  },
  image: {
    position: "relative",
    top: -40,
    height: 100,
    width: 100,
  },
});