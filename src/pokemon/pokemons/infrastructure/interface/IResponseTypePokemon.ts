export interface PokemonType{
    name: string;
    url:string
}
export interface IResponseTypes{
    results:Array<PokemonType>
}
export interface IResponseTypePokemon{
    name: string;
    pokemon:Array<{pokemon:PokemonType}>
}