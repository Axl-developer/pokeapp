import { PokemonType } from "./IResponseTypePokemon";

export interface IResponseRecord{
    count: number;
    results:Array<PokemonType>
}