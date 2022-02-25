import {GET_POKEMONS, SORT_POKES, FILTER_BY_TYPES, SORT_POKES_HP, DETAILS_POKE, GET_POKEMON_SEARCH_NAME, FILTER_BY_ORIGIN, POST_RESPONSE} from "../actions"
import {GET_TYPES} from "../actions"

const initialState = {
  pokemons: [],
  allPokes: [],
  searchPokemon: [],
  searchPokemonOriginal: [],
  types: [],
  detailsPoke: {},
  postMsg:{}
}

function rootReducer(state = initialState, action){
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
         pokemons: action.payload,
         allPokes: action.payload
      }
    
    case POST_RESPONSE:
    return {
      ...state,
      postMsg: action.resp
    }
    
    case GET_POKEMON_SEARCH_NAME:
      return {
        ...state,
        searchPokemon: action.payload,
        searchPokemonOriginal: action.payload
      }

    case GET_TYPES:
      return {
        ...state,
         types: action.payload
      }

    case DETAILS_POKE:
      return {
        ...state,
        detailsPoke: action.payload
      }

    case FILTER_BY_TYPES:
      return {
        ...state,
        pokemons: action.payload === "All" 
        ? state.allPokes
        :state.pokemons.filter((p) => p.types.includes(action.payload) || p.types.map(e => e.name).includes(action.payload))
      }

    case FILTER_BY_ORIGIN:
      const pokesOrigin = state.allPokes
      return {
        ...state,
        pokemons: action.payload === "created"
          ? pokesOrigin.filter(p => p.pokemonCreadoDB)  
          : action.payload === "API" 
            ? pokesOrigin.filter(p => !p.pokemonCreadoDB)
            : pokesOrigin
      }
    
    case "FILTER_SEARCH_BY_ORIGIN":
      const pokesSearchOrigin = state.searchPokemonOriginal
      return {
        ...state,
        searchPokemon: action.payload === "created"
          ? pokesSearchOrigin.filter(p => p.pokemonCreadoDB)  
          : action.payload === "API" 
            ? pokesSearchOrigin.filter(p => !p.pokemonCreadoDB)
            : pokesSearchOrigin
      }

    case SORT_POKES_HP:
      const pokesHP = state.allPokes
      return{
        ...state,
        pokemons: action.payload === "HP_ASC"
          ? pokesHP.sort((a,b) => a.hp - b.hp)
          : pokesHP.sort((a,b) => b.hp - a.hp)
      } 

    case SORT_POKES:
      return {
        ...state,
         pokemons: action.payload === "A-Z" 
          ? state.pokemons.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
          : state.pokemons.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
      } 

    case "RESET":
      return {
        ...state,
        pokemons: state.allPokes,
        searchPokemon: [],
        detailsPoke: {},
        postMsg: {}
      }
    default:
      return state;
  }
}

export default rootReducer;