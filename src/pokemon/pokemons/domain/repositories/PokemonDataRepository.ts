

export interface PokemonDataRepository<T> {
  getPokemons(url: string): Promise<T>;
}