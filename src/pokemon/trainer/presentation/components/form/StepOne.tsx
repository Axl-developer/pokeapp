import { type TrainerForm } from "@/pokemon/trainer/domain/entities/TrainerForm";
import { Input } from "@/shared/components/Input";
import { SwitchInput } from "@/shared/components/Switch";
import { View } from "react-native";

export const StepOne = () => {

  return (
      <View style={{width: 300, margin:'auto'}}>

        <SwitchInput
          label="entrenador"
          labelOff="entrenadora"
          name="sex"
        />

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
      </View>
  )
}
