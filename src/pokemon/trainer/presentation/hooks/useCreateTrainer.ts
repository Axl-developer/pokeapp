import { useState } from "react";
import { createTrainerUseCase } from "../../di/trainer";
import { type TrainerForm } from "../../domain/entities/TrainerForm";

export const useCreateTrainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const createTrainer = async (form: TrainerForm) => {
    try {
      setLoading(true);
      setError(null);
      await createTrainerUseCase.execute(form);

    } catch (e) {
      setError("Error creando entrenador");
    } finally {
      setLoading(false);
    }
  };

  return {
    createTrainer,
    loading,
    error,
  };
};