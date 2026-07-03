import { type TrainerForm } from "@/pokemon/trainer/domain/entities/TrainerForm";
import { SelectInput } from "@/shared/components/SelectInput";
import { View } from "react-native";
import { limaDistricts } from "../../constants/districts";
import { pokemonRegions } from "../../constants/regions";

export const StepThree = () => {


    return (
    <View style={{width: 300, margin:'auto'}}>
      <SelectInput<TrainerForm>
          name="city"
          placeholder="Ciudad"
          options={limaDistricts}
      />

      <SelectInput<TrainerForm>
          name="region"
          placeholder="Región"
          options={pokemonRegions}
      />
    </View>
  )
}
