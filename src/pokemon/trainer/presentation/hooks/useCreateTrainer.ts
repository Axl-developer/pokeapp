import { useState } from "react";
import { createTrainerUseCase } from "../../di/trainer";
import { TrainerForm } from "../types/TrainerForm";

export const useCreateTrainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Dependencias (simple para este caso)
  console.log({createTrainerUseCase})
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