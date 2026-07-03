import { Pokemon } from "@/shared/types";
import { selectPokemonUseCase } from "../../pokemon/pokemons/di/pokemon";


export const useSelectedPokemon = () => {

  const selectePokemon = async (pokemon: Pokemon) => {
    try {
        await selectPokemonUseCase.execute(pokemon);
    }
    catch (e){
        console.error("Error reiniciando pokemon");
    }
  }

  return {
    selectePokemon,
  }
}

