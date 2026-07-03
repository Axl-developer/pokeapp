import { Text, View } from "react-native";
import { DateInput } from '../common/DateInput';


export const StepTwo = () => {

  return (
    <View style={{width: 300, margin:'auto'}}>
        <Text style={{marginBottom: 10}}>Fecha de nacimiento</Text>
        <DateInput
            name="birthDate"
            placeholder="Fecha de nacimiento"
        />
      </View>
  )
}
