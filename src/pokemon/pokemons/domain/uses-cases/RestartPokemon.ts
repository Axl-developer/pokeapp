import { PokemonRepositoryLocal } from "../entities/PokemonRepositoryLocal";


export class RestartPokemon {
  constructor(
     private repository: PokemonRepositoryLocal,
  ) {}

  execute() {

    this.repository.restart();
  }
}