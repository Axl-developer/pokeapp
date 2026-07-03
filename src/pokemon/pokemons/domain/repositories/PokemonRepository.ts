

export interface PokemonRepository<T> {
  getPokemons(): Promise<T>;
}