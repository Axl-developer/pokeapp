import { Pokemon } from "@/shared/types";
import { create } from "zustand";

type PokemonStore={
    pokemon?:Pokemon;
    savePokemon:(pokemon:Pokemon)=>void;
    restarPokemon: () => void;
}

export const usePokemonStore = create<PokemonStore>((set) => ({
  pokemon: undefined,
  savePokemon: (pokemon) =>
    set({
      pokemon,
    }),
  restarPokemon: () => 
    set({
      pokemon: undefined,
    }),
}));