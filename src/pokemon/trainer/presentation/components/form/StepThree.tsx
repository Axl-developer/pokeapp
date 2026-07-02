import { type TrainerForm } from "@/pokemon/trainer/domain/entities/TrainerForm";
import { SelectInput } from "@/shared/components/SelectInput";
import { View } from "react-native";

export const StepThree = () => {


    return (
    <View style={{width: 300, margin:'auto'}}>
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
    </View>
  )
}
