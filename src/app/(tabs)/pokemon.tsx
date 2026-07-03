import { PokemonsScreen } from "@/pokemon/pokemons/presentation/Screens/PokemonsScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function PokemonTab() {
    
    const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
        <PokemonsScreen />
    </QueryClientProvider>
  );
}