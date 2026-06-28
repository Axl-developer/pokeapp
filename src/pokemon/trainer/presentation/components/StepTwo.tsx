import { Input } from "@/shared/components/Input";
import Animated from "react-native-reanimated";
import { TrainerForm } from "../types/TrainerForm";
import { DateInput } from './DateInput';


export const StepTwo = () => {

  return (
    <Animated.View>

        <Input<TrainerForm>
            name="age"
            placeholder="Edad"
            keyboardType="numeric"
        />
        
        <DateInput
            name="birthDate"
            placeholder="Fecha de nacimiento"
        />
      </Animated.View>
  )
}
