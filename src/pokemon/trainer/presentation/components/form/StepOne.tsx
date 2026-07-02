import { type TrainerForm } from "@/pokemon/trainer/domain/entities/TrainerForm";
import { Input } from "@/shared/components/Input";
import { useFormContext } from "react-hook-form";
import { View } from "react-native";

export const StepOne = () => {
  const { control, formState: { errors } } = useFormContext<TrainerForm>();

  return (
      <View style={{width: 300, margin:'auto'}}>
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
