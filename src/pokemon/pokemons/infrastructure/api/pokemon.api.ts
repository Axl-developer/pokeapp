import { IResponsePokemon } from "../interface/IResponsePokemon";
import { IResponseRecord } from "../interface/IresponseRecord";
import { IResponseSpeciePokemon } from "../interface/IResponseSpeciePokemon";
import { api } from "./axios";

export const getPokemons = async (page: number, limit: number): Promise<IResponseRecord> => {
    const url = `/pokemon?offset=${ page  * 10 }&limit=${ limit }`
    const { data } = await api.get<IResponseRecord>(url);

    return data;
};


export const getPokemonData = async (url: string): Promise<IResponsePokemon> => {
    const { data } = await api.get<IResponsePokemon>(url);
    return data;
};

export const getPokemonEspecies = async (name: string): Promise<IResponseSpeciePokemon> => {
    const { data } = await api.get<IResponseSpeciePokemon>(`/pokemon-species/${name}`);
    return data;
};