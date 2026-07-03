
import { Pokemon } from '@/shared/types';
import { type TrainerRepository } from '../entities/TrainerRepository';

export class AddFavorite {
  constructor(
     private repository: TrainerRepository,
  ) {}

  execute(pokemon: Pokemon) {

    this.repository.addFavorite(pokemon);
  }
}