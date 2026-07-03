import { Pokemon } from "@/shared/types";
import { selectPokemonUseCase } from "../../di/pokemon";


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

