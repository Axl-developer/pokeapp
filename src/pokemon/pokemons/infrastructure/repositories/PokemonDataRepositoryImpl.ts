import { Pokemon } from "@/shared/types";
import { PokemonDataRepository } from "../../domain/repositories/PokemonDataRepository";
import { adapterResponsePokemon } from "../adapters/pokemon-adapters";
import { getPokemonData } from "../api/pokemon.api";

export class PokemonDataRepositoryImpl implements PokemonDataRepository<Pokemon> {

    async getPokemons(url: string): Promise<Pokemon> {
        const response = await getPokemonData(url);

        return adapterResponsePokemon(response);
    }

}