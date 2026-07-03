

export interface PokemonSpeciesRepository<T> {
  getPokemonsSpecies(name: string): Promise<T[]>;
}