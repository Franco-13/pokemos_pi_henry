import {GET_POKEMONS, SORT_POKES, FILTER_BY_TYPES, SORT_POKES_HP, DETAILS_POKE, GET_POKEMON_SEARCH_NAME} from "../actions"
import {GET_TYPES} from "../actions"

const initialState = {
  pokemons: [],
  allPokes: [],
  searchPokemon: [],
  types: [],
  detailsPoke: {} 
}

function rootReducer(state = initialState, action){
  console.log("ESTADO REDUX: ",state);
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
         pokemons: action.payload,
         allPokes: action.payload
      }
    
    case GET_POKEMON_SEARCH_NAME:
      return {
        ...state,
        searchPokemon: action.payload,
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

    case SORT_POKES_HP:
      /* if (action.payload === "--") {
        sort = state.allPokes
      } else if (action.payload ==="HP_ASC"){
        sort = state.pokemons.sort((a,b) => a.hp - b.hp)
      } else if (action.payload === "HP_DESC"){
        sort = state.pokemons.sort((a,b) => b.hp - a.hp)
      } */
      return{
        ...state,
        pokemons: /* action.payload === "All" 
          .? state.allPokes  
          :*/ action.payload === "HP_ASC"
          ? state.pokemons.sort((a,b) => a.hp - b.hp)
          : state.pokemons.sort((a,b) => b.hp - a.hp)
      } 

    case SORT_POKES:
      return {
        ...state,
         pokemons: action.payload === "A-Z" 
          ? state.pokemons.sort(/* (a, b) => a.name.toLowerCase() - (b.name.toLowerCase()) */function(a, b){
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          })
          : state.pokemons.sort(/* (a, b) => b.name.toLowerCase() - (a.name.toLowerCase()) */function(a, b){
            if (a.name < b.name) {
              return 1;
            }
            if (a.name > b.name) {
              return -1;
            }
            return 0;
          })
      }
    case "RESET":
      return {
        ...state,
        pokemons: state.allPokes,
        searchPokemon: [],
        detailsPoke: {}
      }
    default:
      return state;
  }
}

export default rootReducer;