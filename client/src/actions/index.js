export const GET_POKEMONS = "GET_POKEMONS"
export const GET_TYPES = "GET_TYPES"
export const FILTER_BY_TYPES = "FILTER_BY_TYPES"
export const SORT_POKES = "SORT_POKES"
export const SORT_POKES_HP = "SORT_POKES_HP"
export const DETAILS_POKE = "DETAILS_POKE"
export const GET_POKEMON_SEARCH_NAME = "GET_POKEMON_SEARCH_NAME"
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN"
export const POST_RESPONSE = "POST_RESPONSE"

/* export function getPokemons(){
  return async function(dispatch){
    const backendRes = await fetch("http://localhost:3001/pokemons")
    const Pokes = await backendRes.json();
    
    return dispatch({
      type: GET_POKEMONS,
      payload: Pokes
    })
  }
} */

export function getPokemons(){
  return function(dispatch) {
    return fetch("http://localhost:3001/pokemons")
      .then(res => res.json())
      .then(pokes => dispatch({
          type:GET_POKEMONS,
          payload: pokes
        })
      )
  }
}

export function getPokemonsById(id){
  return async function(dispatch){
    const backendResp = await fetch(`http://localhost:3001/pokemons/${id}`)
    const Poke = await backendResp.json()
    //console.log("DetPokeDB: ", Poke);
    return dispatch({
      type: DETAILS_POKE,
      payload:Poke
    })
  }
}

/* export function getPokemonSearchName(name){
  return async function(dispatch){
    const backendResp = await fetch(`http://localhost:3001/pokemons?name=${name}`)
    const Poke = await backendResp.json()
    try {
      return dispatch({
        type: GET_POKEMON_SEARCH_NAME,
        payload: Poke
      })
    } catch (error) {
      console.log(error);
    }
  }
} */

export function getPokemonSearchName(name){
  return function(dispatch){
    fetch(`http://localhost:3001/pokemons?name=${name}`)
      .then(res => res.json())
      .then(poke => dispatch({
        type: GET_POKEMON_SEARCH_NAME,
        payload: poke
      }))
      .catch(error => console.log(error))
  }
}


/* export function getTypes(){
  return async function(dispatch){
    const backendRes = await fetch("http://localhost:3001/types")
    const allTypes = await backendRes.json();
    return dispatch({
      type: GET_TYPES,
      payload: allTypes
    })
  }
} */

export function getTypes() {
  return function(dispatch) {
    fetch("http://localhost:3001/types")
      .then(res => res.json())
      .then(allTypes => dispatch({
        type: GET_TYPES,
        payload: allTypes
      }))
  }
}

/* export function postPokemon(payload){
  return async function(dispatch){
    //console.log(payload);
    try {
      const resp = await fetch("http://localhost:3001/pokemons",{
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
      )
      const respPost = await resp.json()
      //console.log(respPost);
      return dispatch({
        type: POST_RESPONSE,
        resp: respPost
      })
    }catch (error) {
      console.log(error);
    }
  }
} */

export function postPokemon(payload) {
  return async function(dispatch) {
    fetch("http://localhost:3001/pokemons",{
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
    .then(res => res.json())
    .then(respPost => dispatch({
      type: POST_RESPONSE,
      resp: respPost
    }))
    .catch(error => console.log(error))
  }
}

export function filterPokesByType(payload){
  //console.log(payload);
  return {
    type: FILTER_BY_TYPES,
    payload
  }
}

export function filterPokesByOrigin(payload){
  return {
    type: FILTER_BY_ORIGIN,
    payload
  }
}

export function filterSearchByOrigin(payload){
  return {
    type: "FILTER_SEARCH_BY_ORIGIN",
    payload
  }
}

export function sortPokes(payload){
  //console.log("sortPokes: ",payload);
  return {
    type: SORT_POKES,
    payload
  }
}

export function sortPokesHP(payload){
  //console.log("sortPokesHP: ",payload);
  return {
    type: SORT_POKES_HP,
    payload
  }
}

export function reset(){
  return {
    type: "RESET"
  }
}