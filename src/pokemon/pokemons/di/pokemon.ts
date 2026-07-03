import { PokemonRepositoryLocalImpl } from "../domain/repositories/PokemonRepositoryLocalImpl";
import { RestartPokemon } from "../domain/uses-cases/RestartPokemon";
import { SelectePokemon } from "../domain/uses-cases/SelecPokemon";

export const PokemonRepository = new PokemonRepositoryLocalImpl();

export const selectPokemonUseCase = new SelectePokemon(PokemonRepository);
export const restartPokemonusecase = new RestartPokemon(PokemonRepository);