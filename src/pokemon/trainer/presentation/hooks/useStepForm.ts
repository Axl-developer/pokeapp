import { useState } from "react";
import { type TrainerForm } from "../../domain/entities/TrainerForm";

type field = (keyof TrainerForm);

interface Steps {
      component: React.ComponentType;
      fields: field[];
}

interface Props {
    steps: Steps[],
    trigger: (steps: field[]) => Promise<boolean>,
    onSubmit: () => void,
}

export const useStepForm = ({
  steps,
  trigger,
  onSubmit,
}: Props) => {

  const [step, setStep] = useState(0);

  const [direction, setDirection] = useState<"next" | "back">("next");

  const next = async () => {
    const isValid = await trigger(
      steps[step].fields
    );

    if (!isValid) {
        return;
    } 

    if (step === steps.length - 1) {
        onSubmit();
        return;
    }

    setDirection("next");
    setStep(prev => prev + 1);
  };

  const back = () => {
    setDirection("back");
    setStep(prev => Math.max(prev - 1, 0));
  };

  return {
    step,
    direction,
    next,
    back,
    totalSteps: steps.length,
  };
}

