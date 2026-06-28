import Ionicons from "@react-native-vector-icons/ionicons";
import { Pressable, StyleSheet } from "react-native";

interface BackArrowProps {
    onPress: () => void;
    step: number;
}

export const BackArrow = ({
    onPress,step
}: BackArrowProps) => {
    
  const isInitial = step === 0;

  return (
    <Pressable
        onPress={onPress}
        disabled={isInitial}
        style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed,
            !isInitial && styles.canReturn,
        ]}
        >
        <Ionicons
            name="arrow-back-outline"
            size={24}
            color="#1F1F1F"
        />
    </Pressable>
  )
};


const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 45,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
    },
    
    pressed: {
        transform: [{ scale: 0.95 }],
    },

    canReturn: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.08,
        shadowRadius: 20,
        elevation: 8,
    }
})