import { Input } from "@/shared/components/Input";
import { useFormContext } from "react-hook-form";
import Animated, { FadeInRight, FadeOutLeft } from "react-native-reanimated";
import { TrainerForm } from "../types/TrainerForm";

export const StepOne = () => {
  const { control, formState: { errors } } = useFormContext<TrainerForm>();

  return (
      <Animated.View
        entering={FadeInRight.duration(300)}
        exiting={FadeOutLeft.duration(300)}
      >
        <Input<TrainerForm>
            name="email"
            placeholder="Correo"
            keyboardType="email-address"
            autoCapitalize="none"
        />

        <Input<TrainerForm>
            name="name"
            placeholder="Nombre"
        />
      </Animated.View>
  )
}
