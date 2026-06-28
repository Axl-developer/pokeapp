import { useTrainerStore } from "@/store/trainer.store";
import { Trainer } from "../../domain/entities/Trainer";
import { TrainerRepository } from "../../domain/repositories/TrainerRepository";

export class TrainerRepositoryLocal implements TrainerRepository {
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