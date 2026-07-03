import { useMutation } from '@tanstack/react-query';
import { selectPokemonUseCase } from '../../di/pokemon';
import { pokemonDataRepository } from '../../infrastructure/dependencies';

export const useGetDataPokemon = () => {
  const mutation = useMutation({
    mutationFn: async (name: string) => {
      const data = await pokemonDataRepository.getPokemons('pokemon/' + name);
      await selectPokemonUseCase.execute(data);
      return data;
    },
  });

  return {
    fetchPokemon: mutation.mutateAsync,
    isLoading: mutation.isPending,
    data: mutation.data,
    error: mutation.error,
  };
};