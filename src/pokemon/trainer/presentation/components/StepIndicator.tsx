import { View } from "react-native";
import { Circle } from "./Circle";

export const StepIndicator = ({
  totalSteps,
  currentStep,
}: {
  totalSteps: number;
  currentStep: number;
}) => {
  return (
    <View style={{width:'auto', flexDirection: 'row', marginVertical: 20}}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <Circle
          key={index}
           status={
            index < currentStep
                ? "completed"
                : index === currentStep
                ? "current"
                : "pending"
            }
        />
      ))}
    </View>
  );
};

