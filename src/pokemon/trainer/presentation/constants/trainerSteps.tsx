import { type TrainerForm } from "../../domain/entities/TrainerForm";
import { StepOne } from "../components/form/StepOne";
import { StepThree } from "../components/form/StepThree";
import { StepTwo } from "../components/form/StepTwo";


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