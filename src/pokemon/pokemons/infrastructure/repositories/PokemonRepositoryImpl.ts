import { RecordPokemon } from "@/shared/types";
import { PokemonRepository } from "../../domain/repositories/PokemonRepository";
import { adapterRecord } from "../adapters/pokemon-adapters";
import { getPokemons } from "../api/pokemon.api";

export class PokemonRepositoryImpl implements PokemonRepository<RecordPokemon> {

    async getPokemons(page: number, limit: number): Promise<RecordPokemon> {
        const response = await getPokemons(page, limit);

        return adapterRecord(response);
    }

}