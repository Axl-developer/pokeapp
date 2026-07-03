import { useTrainerStore } from "@/store/trainer.store";
import { type Trainer } from "../../domain/entities/Trainer";
import { type TrainerRepository } from "../../domain/entities/TrainerRepository";

export class TrainerRepositoryLocalImpl implements TrainerRepository {
  create(trainer: Trainer): void {
    useTrainerStore.getState().saveTrainer(trainer);
  }

  getTrainer(): Trainer | undefined {
    return useTrainerStore.getState().trainer;
  }

  restart(): void {
    useTrainerStore.getState().restarTrainer();
  }
}