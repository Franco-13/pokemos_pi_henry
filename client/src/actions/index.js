export const GET_POKEMONS = "GET_POKEMONS"
export const GET_TYPES = "GET_TYPES"
export const FILTER_BY_TYPES = "FILTER_BY_TYPES"
export const SORT_POKES = "SORT_POKES"
export const SORT_POKES_HP = "SORT_POKES_HP"
export const DETAILS_POKE = "DETAILS_POKE"
export const GET_NAME_POKEMON = "GET_NAME_POKEMON"

export function getPokemons(){
  return async function(dispatch){
    const backendRes = await fetch("http://localhost:3001/pokemons")
    const Pokes = await backendRes.json();
    console.log("getPokemons allPokes: ",Pokes)
    return dispatch({
      type: GET_POKEMONS,
      payload: Pokes
    })
  }
}

export function getPokemonsById(id){
  return async function(dispatch){
    const backendResp = await fetch(`http://localhost:3001/pokemons/${id}`)
    const Poke = await backendResp.json()
    console.log("DetPokeDB: ", Poke);
    return dispatch({
      type: DETAILS_POKE,
      payload:Poke
    })
  }
}

export function getNamePokemon(name){
  return async function(dispatch){
    const backendResp = await fetch(`http://localhost:3001/pokemons?name=${name}`)
    const Poke = await backendResp.json()
    try {
      return dispatch({
        type: GET_NAME_POKEMON,
        payload: Poke
      })
    } catch (error) {
      console.log(error);
    }
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

/* export function postPokemon(payload){
  return async function(){
    const resp = await fetch(`http://localhost:3001/pokemons`,{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
    return resp
  }
} */

export function filterPokesByType(payload){
  console.log(payload);
  return {
    type: FILTER_BY_TYPES,
    payload
  }
}

export function sortPokes(payload){
  console.log("sortPokes: ",payload);
  return {
    type: SORT_POKES,
    payload
  }
}

export function sortPokesHP(payload){
  console.log("sortPokesHP: ",payload);
  return {
    type: SORT_POKES_HP,
    payload
  }
}