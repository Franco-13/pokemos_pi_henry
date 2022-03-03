import {GET_POKEMONS, SORT_POKES, FILTER_BY_TYPES, SORT_POKES_HP, DETAILS_POKE, GET_POKEMON_SEARCH_NAME, FILTER_BY_ORIGIN, POST_RESPONSE, PUT_RESPONSE, DELETE_RESPONSE, FILTER_SEARCH_BY_ORIGIN, RESET, LOADING} from "../actions"
import {GET_TYPES} from "../actions"

const initialState = {
  pokemons: [],
  allPokes: [],
  searchPokemon: [],
  searchPokemonOriginal: [],
  types: [],
  detailsPoke: null,
  postMsg: null,
  putMsg: {},
  delMsg: {},
  typeSortHp: "",
  typeSortName: "",
  typeFilterOrigin: "",
  loading: false,
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
        loading: true,
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
    case LOADING:
      return {...state, loading: false}
    
    case GET_POKEMON_SEARCH_NAME:
      return {
        ...state,
        loading: true,
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
      const filterType = state.allPokes
      return {
        ...state,
        typeSortHp:"",
        typeSortName:"",
        pokemons: action.payload === "All" 
        ? state.allPokes
        :filterType.filter((p) => p.types.includes(action.payload) || p.types.map(e => e.name).includes(action.payload))
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
      return{
        ...state,
        typeSortHp: action.payload,
        typeSortName:"",
        pokemons: action.payload === "ATTACK_ASC"
          ? state.pokemons.sort((a,b) => a.attack - b.attack)
          : state.pokemons.sort((a,b) => b.attack - a.attack)
      } 

    case SORT_POKES:
      return {
        ...state,
        typeSortHp:"",
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
        detailsPoke: null,
        postMsg: null,
        typeSortHp: "",
        typeSortName: "",
        typeFilterOrigin: "",
      }
    default:
      return state;
  }
}

export default rootReducer;