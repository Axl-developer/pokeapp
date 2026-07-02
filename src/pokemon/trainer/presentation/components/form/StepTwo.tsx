import { type TrainerForm } from "@/pokemon/trainer/domain/entities/TrainerForm";
import { Input } from "@/shared/components/Input";
import { View } from "react-native";
import { DateInput } from '../common/DateInput';


export const StepTwo = () => {

  return (
    <View style={{width: 300, margin:'auto'}}>
        <Input<TrainerForm>
            name="age"
            placeholder="Edad"
            keyboardType="numeric"
        />
        
        <DateInput
            name="birthDate"
            placeholder="Fecha de nacimiento"
        />
      </View>
  )
}
