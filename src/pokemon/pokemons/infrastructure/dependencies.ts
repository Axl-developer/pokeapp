import { PokemonDataRepositoryImpl, PokemonRepositoryImpl, PokemonSpeciesRepositoryImpl } from "./repositories";

export const pokemonRepository = new PokemonRepositoryImpl();
export const pokemonDataRepository = new PokemonDataRepositoryImpl()
export const pokemonSpeciesRepository = new PokemonSpeciesRepositoryImpl()