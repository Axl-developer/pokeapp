import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

type Status = "completed" | "current" | "pending";

interface Props {
  status: Status;
}

export const Circle = ({ status }: Props) => {
  const ringScale = useSharedValue(
    status === "current" ? 1 : 0
  );

  useEffect(() => {
    ringScale.value = withSpring(
      status === "current" ? 1 : 0
    );
  }, [status]);

  const ringStyle = useAnimatedStyle(() => ({
    transform: [{ scale: ringScale.value }],
    opacity: ringScale.value,
  }));

  const dotScale = useSharedValue(
    status === "current" ? 1.2 : 1
  );

  useEffect(() => {
    dotScale.value = withSpring(
      status === "current" ? 1.2 : 1
    );
  }, [status]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.ring, ringStyle]}
      />
      <Animated.View
        style={[
          styles.dot,
          status === "completed" &&
            styles.completedDot,
        ]}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        width: 28,
        height: 28,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    ring: {
        position: "absolute",
        width: 28,
        height: 28,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: "red",
    },
    dot: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: "gray",
    },
    completedDot: {
        backgroundColor: "red",
    },

})