
import { type TrainerRepository } from '../entities/TrainerRepository';

export class RemoveFavorite {
  constructor(
     private repository: TrainerRepository,
  ) {}

  execute(id: number) {

    this.repository.removeFavorite(id);
  }
}