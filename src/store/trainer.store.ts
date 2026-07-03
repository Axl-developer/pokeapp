import { Trainer } from "@/pokemon/trainer/domain/entities/Trainer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TrainerStore = {
  trainer?: Trainer;
  saveTrainer: (trainer: Trainer) => void;
  resetTrainer: () => void;
};

export const useTrainerStore = create<TrainerStore>()(
  persist(
    (set) => ({
      trainer: undefined,

      saveTrainer: (trainer) =>
        set({
          trainer,
        }),

      resetTrainer: () =>
        set({
          trainer: undefined,
        }),
    }),
    {
      name: "trainer-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);