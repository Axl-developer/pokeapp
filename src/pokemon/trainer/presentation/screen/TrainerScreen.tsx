import { useTrainerStore } from "@/store/trainer.store";
import { FormTrainer } from "../components/form/FormTrainer";
import { Profile } from "../components/profile/Profile";

export const TrainerScreen = () => {

  const trainer = useTrainerStore(
    state=>state.trainer
  );

  return trainer?.id
      ?<Profile />
      :<FormTrainer />
}
