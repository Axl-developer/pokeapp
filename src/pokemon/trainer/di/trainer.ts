import { CreateTrainer } from "../domain/use-cases/CreateTrainer";
import { RestartTrainer } from "../domain/use-cases/RestartTrainer";
import { TrainerRepositoryLocalImpl } from "../infrastructure/repositories/TrainerRepositoryLocalImpl";
import { ExpoUuidGenerator } from "../infrastructure/services/ExpoUuidGenerator";

export const trainerRepository = new TrainerRepositoryLocalImpl();
const uuidGenerator = new ExpoUuidGenerator();

export const createTrainerUseCase = new CreateTrainer(trainerRepository, uuidGenerator);
export const restartTrainerusecase = new RestartTrainer(trainerRepository);