import { SelectInput } from "@/shared/components/SelectInput";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";
import { TrainerForm } from "../types/TrainerForm";

export const StepThree = () => {


    return (
    <Animated.View
        entering={FadeInRight.duration(300)}
        exiting={FadeOutLeft.duration(300)}
    >
      <SelectInput<TrainerForm>
          name="city"
          placeholder="Ciudad"
          options={[
            {
              label: 'Lima',
              value: 'Lima'
            },
            {
              label: 'Lima',
              value: 'Lima2'
            },
          ]}
      />
    </Animated.View>
  )
}
