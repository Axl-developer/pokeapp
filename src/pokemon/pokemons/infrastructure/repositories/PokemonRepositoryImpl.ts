import { RecordPokemon } from "@/shared/types";
import { PokemonRepository } from "../../domain/repositories/PokemonRepository";
import { adapterRecord } from "../adapters/pokemon-adapters";
import { getPokemons } from "../api/pokemon.api";

export class PokemonRepositoryImpl implements PokemonRepository<RecordPokemon> {

    async getPokemons(): Promise<RecordPokemon> {
        const response = await getPokemons(0,10);

        return adapterRecord(response);
    }

}