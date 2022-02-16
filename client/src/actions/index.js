export const GET_POKEMONS = "GET_POKEMONS"
export const GET_TYPES = "GET_TYPES"
export const FILTER_BY_TYPES = "FILTER_BY_TYPES"
export const SORT_POKES_AZ = "SORT_POKES_AZ"

export function getPokemons(){
  return async function(dispatch){
    const backendRes = await fetch("http://localhost:3001/pokemons")
    const allPokes = await backendRes.json();
    return dispatch({
      type: GET_POKEMONS,
      payload: allPokes
    })
  }
}

export function getTypes(){
  return async function(dispatch){
    const backendRes = await fetch("http://localhost:3001/types")
    const allTypes = await backendRes.json();
    return dispatch({
      type: GET_TYPES,
      payload: allTypes
    })
  }
}

export function filterPokesByType(payload){
  return {
    type: FILTER_BY_TYPES,
    payload
  }
}

export function sortPokesAZ(payload){
  return {
    type: SORT_POKES_AZ,
    payload
  }
}