import { StyleSheet, Text, View } from "react-native";

export interface StatLabelProps {
  label: string;
  value: number;
}

export function StatLabel({
  label,
  value,
}: StatLabelProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 12,
  },

  label: {
    color: "#000",
    fontWeight: "600",
  },

  value: {
    color: "#000",
    fontWeight: "700",
  },
});