import { StyleSheet, View } from "react-native";

export interface TrackProps {
  children: React.ReactNode;
}


export function Track({
  children,
}: TrackProps) {
  return (
    <View style={styles.track}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 10,
    backgroundColor: "#0000001a",
    borderRadius: 999,
    overflow: "hidden",
    width: 200,
  },
});