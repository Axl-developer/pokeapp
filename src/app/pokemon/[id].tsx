import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

export default function pokemonScreen () {
  const { id } = useLocalSearchParams();
  return (
    <Animated.View entering={FadeIn.springify()}>
      <Text>{id}xd</Text>
    </Animated.View>
  )
}

