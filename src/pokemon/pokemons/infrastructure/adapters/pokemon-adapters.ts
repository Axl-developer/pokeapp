import { item, Pokemon, RecordPokemon } from "@/shared/types"
import { IResponsePokemon } from "../interface/IResponsePokemon"
import { IResponseRecord } from "../interface/IresponseRecord"
import { IResponseSpeciePokemon } from "../interface/IResponseSpeciePokemon"

export const adapterRecord = (response: IResponseRecord): RecordPokemon => {
    return {
        count: response.count,
        result: response.results
    }
}

export const adapterResponsePokemon = (response:IResponsePokemon):Pokemon => ({
    id: response.id,
    name: response.name,
    images: {
        generic: response.sprites.other.home.front_default,
        shiny:response.sprites.other.home.front_shiny
    },
    graphic: response.stats.map(elm => {
        return {
            name:elm.stat.name,
            baseStat:elm.base_stat
        }
    }),
    types: response.types.map(elm => ({
        name: elm.type.name,
        url:elm.type.url
    }))
})

export const adapterSpecies = (response: IResponseSpeciePokemon): Array<item> => response.varieties.map(elem => ({
        name: elem.pokemon.name,
        url: elem.pokemon.url
    }))