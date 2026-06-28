import { Trainer } from "../entities/Trainer";

export interface TrainerRepository{
    create(trainer:Trainer):void;
    restart():void;
}