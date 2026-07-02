import { Trainer } from "./Trainer";

export interface TrainerRepository{
    create(trainer:Trainer):void;
    restart():void;
}