import { AddFavorite, CreateTrainer, RemoveFavorite, RestartTrainer } from "../domain/use-cases";
import { TrainerRepositoryLocalImpl } from "../infrastructure/repositories/TrainerRepositoryLocalImpl";
import { ExpoUuidGenerator } from "../infrastructure/services/ExpoUuidGenerator";

export const trainerRepository = new TrainerRepositoryLocalImpl();
const uuidGenerator = new ExpoUuidGenerator();

export const createTrainerUseCase = new CreateTrainer(trainerRepository, uuidGenerator);
export const restartTrainerusecase = new RestartTrainer(trainerRepository);
export const addFavoriteUsescase = new AddFavorite(trainerRepository);
export const removeFavoriteUsescase = new RemoveFavorite(trainerRepository);
