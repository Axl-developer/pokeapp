import { StyleSheet, View } from "react-native";

import { StatItem } from "../../types/StatsChart";
import { Fill } from "./Fill";
import { StatLabel } from "./StatLabel";
import { Track } from "./Track";

interface StatBarProps {
    item: StatItem;
    maxValue: number;
    animated?: boolean;
    animationDuration?: number;
    index: number;
}

export function StatBar({
  item,
  maxValue,
  index,
  animated,
  animationDuration,
}: StatBarProps) {

  const progress = item.value / maxValue;



  return (
    <View style={styles.container}>
      <StatLabel
        label={item.label}
        value={item.value}
      />
      <Track>
        <Fill
          progress={progress}
          color={item.color ?? "#777"}
          animated={animated}
          animationDuration={animationDuration}
          delay={index * 120}
        />
      </Track>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 14,
  },

});