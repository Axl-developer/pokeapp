import { CreateTrainer } from "../domain/use-cases/CreateTrainer";
import { RestartTrainer } from "../domain/use-cases/RestartTrainer";
import { TrainerRepositoryLocal } from "../infrastructure/repositories/TrainerRepositoryLocal";
import { ExpoUuidGenerator } from "../infrastructure/services/ExpoUuidGenerator";

export const trainerRepository = new TrainerRepositoryLocal();
const uuidGenerator = new ExpoUuidGenerator();

export const createTrainerUseCase = new CreateTrainer(trainerRepository, uuidGenerator);
export const restartTrainerusecase = new RestartTrainer(trainerRepository);