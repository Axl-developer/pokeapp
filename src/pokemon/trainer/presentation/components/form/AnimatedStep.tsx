import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeOutLeft,
  FadeOutRight,
} from "react-native-reanimated";

type Props = PropsWithChildren<{
  animationKey: number;
  direction: "next" | "back";
}>;

export function AnimatedStep({
  children,
  animationKey,
  direction,
}: Props) {

    const entering =
        direction === "next"
            ? FadeInRight
            : FadeInLeft;

    const exiting =
        direction === "next"
            ? FadeOutLeft
            : FadeOutRight;
console.log('direction------',direction,animationKey)
  return (
    <Animated.View
        key={animationKey}
        entering={entering.duration(600)}
        exiting={exiting.duration(300)}
        style={style.form}
    >
      {children}
    </Animated.View>
  );
}

const style = StyleSheet.create({
  form: {
    width: '100%',
    padding: 10,
    height: 200,
  }
})