import { useEffect } from "react";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

export interface FillProps {
  progress: number;
  color: string;
  animated?: boolean;
  animationDuration?: number;
  delay?: number;
}

export function Fill({
  progress,
  color,
  animated = true,
  animationDuration = 800,
  delay = 0,
}: FillProps) {

  const width = useSharedValue(0);

  useEffect(() => {

    if (animated) {

      width.value = withDelay(
        delay,
        withTiming(progress, {
          duration: animationDuration,
        }),
      );

    } else {

      width.value = progress;

    }

  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${width.value * 100}%`,
  }));

  return (
    <Animated.View
      style={[
        {
          height: "100%",
          backgroundColor: color,
          borderRadius: 999,
        },
        animatedStyle,
      ]}
    />
  );
}