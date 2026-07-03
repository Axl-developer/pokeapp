export interface IResponsePokemon {
    id: number;
    name: string;
    stats: Array<{
        base_stat: number;
        stat:{
            name:string
        }
    }>
    sprites: {
        other: {
            home: {
                front_default: string;
                front_shiny: string;
           }
       }
    };
    types:Array<{
        type: {
            name: string;
            url:string
        }
    }>
}
