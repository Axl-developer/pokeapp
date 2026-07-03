

export interface PokemonRepository<T> {
  getPokemons(page: number, limit: number): Promise<T>;
}