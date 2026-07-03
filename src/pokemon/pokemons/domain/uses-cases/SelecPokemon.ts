
import { Pokemon } from '@/shared/types';
import { PokemonRepositoryLocal } from '../entities/PokemonRepositoryLocal';

export class SelectePokemon {
  constructor(
     private repository: PokemonRepositoryLocal,
  ) {}

  execute(pokemon: Pokemon) {
    this.repository.select(pokemon);
  }
}