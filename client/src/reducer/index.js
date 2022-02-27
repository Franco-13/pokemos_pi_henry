import {GET_POKEMONS, SORT_POKES, FILTER_BY_TYPES, SORT_POKES_HP, DETAILS_POKE, GET_POKEMON_SEARCH_NAME, FILTER_BY_ORIGIN, POST_RESPONSE, PUT_RESPONSE, DELETE_RESPONSE, FILTER_SEARCH_BY_ORIGIN, RESET} from "../actions"
import {GET_TYPES} from "../actions"

const initialState = {
  pokemons: [],
  allPokes: [],
  searchPokemon: [],
  searchPokemonOriginal: [],
  types: [],
  detailsPoke: {},
  postMsg: {},
  putMsg: {},
  delMsg: {},
  typeSortHp: "",
  typeSortName: "",
  typeFilterOrigin: "",
}

function rootReducer(state = initialState, action){
  switch (action.type) {
    case PUT_RESPONSE:
      return {
        ...state,
        putMsg: action.resp
      }

    case GET_POKEMONS:
      return {
        ...state,
         pokemons: action.payload,
         allPokes: action.payload
      }

    case DELETE_RESPONSE:
    return {
      ...state,
      delMsg: action.delMsg
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
        typeSortHp:"",
        typeSortName:"",
        typeFilterOrigin: action.payload,
        pokemons: action.payload === "created"
          ? pokesOrigin.filter(p => p.pokemonCreadoDB)  
          : action.payload === "API" 
            ? pokesOrigin.filter(p => !p.pokemonCreadoDB)
            : pokesOrigin
      }
    
    case FILTER_SEARCH_BY_ORIGIN:
      const pokesSearchOrigin = state.searchPokemonOriginal
      return {
        ...state,
        typeSortHp:"",
        typeSortName:"",
        typeFilterOrigin: action.payload,
        searchPokemon: action.payload === "created"
          ? pokesSearchOrigin.filter(p => p.pokemonCreadoDB)  
          : action.payload === "API" 
            ? pokesSearchOrigin.filter(p => !p.pokemonCreadoDB)
            : pokesSearchOrigin
      }

    case SORT_POKES_HP:
      //const pokesHP = state.allPokes
      return{
        ...state,
        typeSortHp: action.payload,
        typeSortName:"",
        typeFilterOrigin: "",
        pokemons: action.payload === "HP_ASC"
          ? state.pokemons.sort((a,b) => a.hp - b.hp)
          : state.pokemons.sort((a,b) => b.hp - a.hp)
      } 

    case SORT_POKES:
      //const pokesAZ = state.allPokes
      return {
        ...state,
        typeSortHp:"",
        typeFilterOrigin: "",
        typeSortName: action.payload,
         pokemons: action.payload === "A-Z" 
          ? state.pokemons.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
          : state.pokemons.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
      } 

    case RESET:
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