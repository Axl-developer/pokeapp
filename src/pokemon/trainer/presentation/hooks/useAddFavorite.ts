import { Pokemon } from "@/shared/types";
import { useState } from "react";
import { addFavoriteUsescase } from "../../di/trainer";

export const useAddFavorite = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const addFavorite = async (pokemon: Pokemon) => {
    try {
      setLoading(true);
      setError(null);
      await addFavoriteUsescase.execute(pokemon);

    } catch (e) {
      setError("Error creando entrenador");
    } finally {
      setLoading(false);
    }
  };

  return {
    addFavorite,
    loading,
    error,
  };
};