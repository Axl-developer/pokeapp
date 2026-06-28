import Ionicons from "@react-native-vector-icons/ionicons";
import { Pressable, StyleSheet } from "react-native";

interface NextButtonProps {
    onPress: () => void;
    isFinal: boolean;
}

export const NextButton = ({ onPress,isFinal }: NextButtonProps) => {
    
  return (
    <Pressable
        onPress={onPress}
        // disabled={isFinal}
        style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed,
            !isFinal && styles.canPass,
        ]}
        >
        <Ionicons
            name="arrow-forward-outline"
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

    canPass: {
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