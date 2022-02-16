import {GET_POKEMONS, SORT_POKES_AZ} from "../actions"
import {GET_TYPES} from "../actions"

const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
}

function rootReducer(state = initialState, action){
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
         pokemons: action.payload,
         allPokemons: action.payload
      }
    case GET_TYPES:
      return {
        ...state,
         types: action.payload
      }
    case SORT_POKES_AZ:
      let pokeSort = action.payload === "A-Z" ? 
      state.pokemons.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
      : state.pokemons.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
      return {
        ...state,
         pokemons: pokeSort
      }
    default:
      return state;
  }
}

export default rootReducer;