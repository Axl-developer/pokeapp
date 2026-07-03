import { type TrainerForm } from '@/pokemon/trainer/domain/entities/TrainerForm';
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { trainerSteps } from '../../constants/trainerSteps';
import { useCreateTrainer } from '../../hooks/useCreateTrainer';
import { useStepForm } from '../../hooks/useStepForm';
import { trainerSchema } from '../../validations/trainer.schema';
import { BackArrow } from '../common/BackArrow';
import { NextButton } from '../common/NextButton';
import { AnimatedStep } from './AnimatedStep';
import { StepIndicator } from './StepIndicator';

export const FormTrainer = () => {

    const methods = useForm({
        resolver: yupResolver(trainerSchema),
        defaultValues: {
            email: "",
            age: undefined,
            name: "",
            city: "",
            birthDate: new Date(),
        },
    });

    const { trigger, handleSubmit } = methods;

    const { createTrainer } = useCreateTrainer();

    const onSubmit = (data: TrainerForm) => {
        createTrainer(data);
        console.log('submit',{data})
    };
    
    const submit = handleSubmit(onSubmit);
    
    const { step, back, next, direction, totalSteps } = useStepForm({steps: trainerSteps, trigger, onSubmit: submit});

    const CurrentStep = trainerSteps[step].component;


  return (
    <FormProvider {...methods}>
      <View style={styles.heroSection}>
          
          <View style={styles.pokeball}/>

          <AnimatedStep
            animationKey={step}
            direction={direction}
          >
            <CurrentStep />
          </AnimatedStep>

          <View style={styles.buttons}>
            <BackArrow
              onPress={back}
              step={step}
            />
  
            <StepIndicator
              currentStep={step}
              totalSteps={totalSteps}
          />

            <NextButton
              onPress={next}
              isFinal={step === totalSteps - 1}
            />
          </View>
      </View>
    </FormProvider>
  )
}


const styles = StyleSheet.create({
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: 40,
    backgroundColor: '#ffffff'
  },
  buttons: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
  },

  pokeball: {
    backgroundColor: 'red',
    borderRadius: '50%',
    height: 200,
    width: 200,
  }
});
