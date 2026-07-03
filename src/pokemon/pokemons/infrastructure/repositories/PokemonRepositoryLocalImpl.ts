import { Pokemon } from "@/shared/types";
import { usePokemonStore } from "@/store/pokemon.store";
import { PokemonRepositoryLocal } from "../../domain/entities/PokemonRepositoryLocal";


export class PokemonRepositoryLocalImpl implements PokemonRepositoryLocal {
  select(pokemon: Pokemon): void {
    usePokemonStore.getState().savePokemon(pokemon);
  }

  restart(): void {
    usePokemonStore.getState().restarPokemon();
  }
}