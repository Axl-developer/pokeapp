import { FlatList } from "react-native";

import { StatItem } from "../../types/StatsChart";
import { StatBar } from "./StatBar";

export interface StatsChartProps {
  data: StatItem[];
  maxValue: number;
  animated?: boolean;
  animationDuration?: number;
}

export function StatsChart({
  data,
  maxValue,
  animated = true,
  animationDuration = 800,
}: StatsChartProps) {
  return (
    <FlatList
      scrollEnabled={false}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => (
        <StatBar
          item={item}
          index={index}
          maxValue={maxValue}
          animated={animated}
          animationDuration={animationDuration}
        />
      )}
    />
  );
}