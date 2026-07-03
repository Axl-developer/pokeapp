import { useState } from "react";
import { removeFavoriteUsescase } from "../../di/trainer";

export const useRemoveFavorite = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const removeFavorite = async (id: number) => {
    try {
      setLoading(true);
      setError(null);
      await removeFavoriteUsescase.execute(id);

    } catch (e) {
      setError("Error creando entrenador");
    } finally {
      setLoading(false);
    }
  };

  return {
    removeFavorite,
    loading,
    error,
  };
};