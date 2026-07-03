import { PokemonDataRepositoryImpl, PokemonRepositoryImpl } from "./repositories";

export const pokemonRepository = new PokemonRepositoryImpl();
export const pokemonDataRepository = new PokemonDataRepositoryImpl()