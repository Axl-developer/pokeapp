import { Trainer } from "@/pokemon/trainer/domain/entities/Trainer";
import { Pokemon } from "@/shared/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TrainerStore = {
  trainer?: Trainer;
  saveTrainer: (trainer: Trainer) => void;
  resetTrainer: () => void;
  favorites: Pokemon[];
  addFavorite: (pokemon: Pokemon) => void;
  removeFavorite: (id: number) => void;
};

export const useTrainerStore = create<TrainerStore>()(
  persist(
    (set) => ({
      trainer: undefined,
      favorites: [],

      saveTrainer: (trainer) =>
        set({
          trainer,
        }),

      resetTrainer: () =>
        set({
          trainer: undefined,
          favorites: [],
        }),
      addFavorite: (pokemon) =>
        set((state) => {
          const exists = state.favorites.some(p => p.id === pokemon.id);

          if (exists) return state;

          return {
            favorites: [...state.favorites, pokemon],
          };
        }),
      removeFavorite: (id: number) =>
        set((state) => ({
          favorites: state.favorites.filter(p => p.id !== id),
        })),
    }),
    {
      name: "trainer-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);