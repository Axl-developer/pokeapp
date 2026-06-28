import { BackArrow } from '@/pokemon/trainer/presentation/components/BackArrow';
import { StepIndicator } from '@/pokemon/trainer/presentation/components/StepIndicator';
import { StepOne } from '@/pokemon/trainer/presentation/components/StepOne';
import { StepThree } from '@/pokemon/trainer/presentation/components/StepThree';
import { StepTwo } from '@/pokemon/trainer/presentation/components/StepTwo';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeOutLeft,
  FadeOutRight,
  useAnimatedStyle, useSharedValue,
  withTiming
} from "react-native-reanimated";

export const AnimatedScreen = () => {

    const [direction, setDirection] = useState<"next" | "back">("next");
    const [step, setStep] = useState(0);

    const steps = [
      <StepOne key="1" />,
      <StepTwo key="2" />,
      <StepThree key="3" />,
    ];

    const totalSteps = steps.length;

    const next = () => {
      setDirection("next");
      setStep(prev => Math.min(prev + 1, totalSteps - 1));
    };

    const back = () => {
      setDirection("back");
      setStep(prev => Math.max(prev - 1, 0));
    };

  return (
      <View style={styles.container}>
        <ProgressBar
            currentStep={step}
            totalSteps={totalSteps}
        />

        <StepIndicator
            currentStep={step}
            totalSteps={totalSteps}
        />

        <Animated.View
            key={step}
            entering={
                direction === "next"
                    ? FadeInRight.duration(300)
                    : FadeInLeft.duration(300)
            }
            exiting={
                direction === "next"
                    ? FadeOutLeft.duration(300)
                    : FadeOutRight.duration(300)
            }
        >
            {steps[step]}
        </Animated.View>

        <View style={styles.buttons}>
          <BackArrow
            onPress={back}
            step={step}
          />

          <Ionicons
            name="arrow-forward-outline"
            size={24}
            color="#000"
            onPress={next}
            disabled={step === totalSteps - 1}
          />
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    marginVertical: 24,
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#D1D5DB",
    borderWidth: 2,
    borderColor: "#D1D5DB",
    marginHorizontal: 10,
  },
  progressBackground: {
    height: 4,
    width: "100%",
    backgroundColor: "#E5E7EB",
    borderRadius: 2,
  },
  progressFill: {
      height: "100%",
      backgroundColor: "#2563EB",
      borderRadius: 2,
  },
  buttons: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  outerCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: "#F59E92",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },

  currentOuter: {
    borderColor: "#F59E92",
  },

  completedOuter: {
    borderColor: "#2563EB",
  },

  innerCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#F59E92",
  },

  completedInner: {
    backgroundColor: "#2563EB",
  },

});











const ProgressBar = ({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withTiming(
      (currentStep + 1) / totalSteps,
      { duration: 300 }
    );
  }, [currentStep]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  return (
    <View style={styles.progressBackground}>
      <Animated.View
        style={[styles.progressFill, animatedStyle]}
      />
    </View>
  );
};
