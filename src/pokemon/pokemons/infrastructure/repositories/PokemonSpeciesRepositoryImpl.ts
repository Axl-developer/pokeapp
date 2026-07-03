import { item } from "@/shared/types";
import { PokemonSpeciesRepository } from "../../domain/repositories/PokemonSpeciesRepository";
import { adapterSpecies } from "../adapters/pokemon-adapters";
import { getPokemonEspecies } from "../api/pokemon.api";

export class PokemonSpeciesRepositoryImpl implements PokemonSpeciesRepository<item> {

    async getPokemonsSpecies(name: string): Promise<item[]> {
        const response = await getPokemonEspecies(name);

        return adapterSpecies(response);
    }

}