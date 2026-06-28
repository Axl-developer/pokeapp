import { restartTrainerusecase } from "../../di/trainer";


export const useRestartTrainer = () => {

  const restartTrainer = async () => {
    try {
        await restartTrainerusecase.execute();
    }
    catch (e){
        console.error("Error reiniciando entrenador");
    }
  }

  return {
    restartTrainer,
  }
}

