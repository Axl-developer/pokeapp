import { Trainer } from "@/pokemon/trainer/domain/entities/Trainer";
import { create } from "zustand";

type TrainerStore={
    trainer?:Trainer;
    saveTrainer:(trainer:Trainer)=>void;
    restarTrainer: () => void;
}

export const useTrainerStore = create<TrainerStore>((set) => ({
  trainer: undefined,
  saveTrainer: (trainer) =>
    set({
      trainer,
    }),
  restarTrainer: () => 
    set({
      trainer: undefined,
    }),
}));