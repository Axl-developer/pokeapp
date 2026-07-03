import { Pokemon } from "@/shared/types";

export interface PokemonRepositoryLocal {
    select(pokemon: Pokemon):void;
    restart():void;
}