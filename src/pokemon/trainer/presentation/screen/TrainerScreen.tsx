import { useTrainerStore } from "@/store/trainer.store";
import { FormTrainer } from "../components/FormTrainer";
import { Perfil } from "../components/Perfil";

export const TrainerScreen = () => {

  const trainer = useTrainerStore(
    state=>state.trainer
  );

  return trainer?.id
      ?<Perfil />
      :<FormTrainer />
}
