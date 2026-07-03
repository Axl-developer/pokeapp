import { RestartPokemon } from "../domain/uses-cases/RestartPokemon";
import { SelectePokemon } from "../domain/uses-cases/SelecPokemon";
import { PokemonRepositoryLocalImpl } from "../infrastructure/repositories/PokemonRepositoryLocalImpl";

export const PokemonRepository = new PokemonRepositoryLocalImpl();

export const selectPokemonUseCase = new SelectePokemon(PokemonRepository);
export const restartPokemonusecase = new RestartPokemon(PokemonRepository);