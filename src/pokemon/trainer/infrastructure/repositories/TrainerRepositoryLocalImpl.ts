import { Pokemon } from "@/shared/types";
import { useTrainerStore } from "@/store/trainer.store";
import { type Trainer } from "../../domain/entities/Trainer";
import { type TrainerRepository } from "../../domain/entities/TrainerRepository";

export class TrainerRepositoryLocalImpl implements TrainerRepository {
  create(trainer: Trainer): void {
    useTrainerStore.getState().saveTrainer(trainer);
  }

  restart(): void {
    useTrainerStore.getState().resetTrainer();
  }

  addFavorite(pokemon: Pokemon): void {
    useTrainerStore.getState().addFavorite(pokemon);
  }

  removeFavorite(id: number): void {
    useTrainerStore.getState().removeFavorite(id);
  }
}