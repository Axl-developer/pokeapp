import { Pokemon } from "@/shared/types";
import { Trainer } from "./Trainer";

export interface TrainerRepository{
    create(trainer:Trainer):void;
    restart():void;
    addFavorite(pokemon: Pokemon): void;
    removeFavorite(id: number): void;
}