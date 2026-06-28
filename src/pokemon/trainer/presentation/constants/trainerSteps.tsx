import { StepOne } from "../components/StepOne";
import { StepThree } from "../components/StepThree";
import { StepTwo } from "../components/StepTwo";
import { TrainerForm } from "../types/TrainerForm";


export interface Step {
  component: React.ComponentType;
  fields: (keyof TrainerForm)[];
}

export const trainerSteps: Step[] = [
  {
    component: StepOne,
    fields: ["name", "email"],
  },
  {
    component: StepTwo,
    fields: ["age", "birthDate"],
  },
  {
    component: StepThree,
    fields: ["city"],
  },
];