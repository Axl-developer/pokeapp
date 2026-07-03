import { useQuery } from '@tanstack/react-query';
import { pokemonSpeciesRepository } from '../../infrastructure/dependencies';

export const useGetPokemonsSpecies = (name: string) => {

    const { data } = useQuery({
        queryKey: ["pokemonsSpecies", name],
        queryFn: () => pokemonSpeciesRepository.getPokemonsSpecies(name),
        staleTime: 1000 * 69 * 60,
    });

    return data;
};