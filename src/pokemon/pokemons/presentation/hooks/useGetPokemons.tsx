import { useQuery } from '@tanstack/react-query';
import { pokemonDataRepository, pokemonRepository } from '../../infrastructure/dependencies';

export const useGetPokemons = () => {

    const { data } = useQuery({
        queryKey: ["pokemons"],
        queryFn: () => pokemonRepository.getPokemons(),
        staleTime: 1000 * 69 * 60,
    });

    
    const urls = data?.result?.map( pokemon => pokemon.url ) ?? [];

    const detailsQuery  = useQuery({
        queryKey: ["pokemons-details", urls],
        enabled: urls.length > 0,
        queryFn: () =>
        Promise.all(
            urls.map((url) => pokemonDataRepository.getPokemons(url))
        ),
        staleTime: 1000 * 69 * 60,
    });

    return detailsQuery;
};