import { Pokemon } from "@/shared/types";

export interface PokemonRepository{
    create(trainer: Pokemon):void;
    restart():void;
}