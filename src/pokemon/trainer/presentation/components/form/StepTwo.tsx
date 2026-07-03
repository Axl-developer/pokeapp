import { View } from "react-native";
import { DateInput } from '../common/DateInput';


export const StepTwo = () => {

  return (
    <View style={{width: 300, margin:'auto'}}>
        
        <DateInput
            name="birthDate"
            placeholder="Fecha de nacimiento"
        />
      </View>
  )
}
