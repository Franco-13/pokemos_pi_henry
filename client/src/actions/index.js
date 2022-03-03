export const GET_POKEMONS = "GET_POKEMONS"
export const GET_TYPES = "GET_TYPES"
export const FILTER_BY_TYPES = "FILTER_BY_TYPES"
export const SORT_POKES = "SORT_POKES"
export const SORT_POKES_HP = "SORT_POKES_HP"
export const DETAILS_POKE = "DETAILS_POKE"
export const GET_POKEMON_SEARCH_NAME = "GET_POKEMON_SEARCH_NAME"
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN"
export const POST_RESPONSE = "POST_RESPONSE"
export const PUT_RESPONSE = "PUT_RESPONSE"
export const DELETE_RESPONSE = "DELETE_RESPONSE"
export const FILTER_SEARCH_BY_ORIGIN = "FILTER_SEARCH_BY_ORIGIN"
export const RESET = "RESET"
export const LOADING = "LOADING"

/* export function getPokemons(){
  return async function(dispatch){
    dispatch({ type:LOADING})
    const backendRes = await fetch(`${process.env.REACT_APP_API}/pokemons`)
    const Pokes = await backendRes.json();
    
    return dispatch({
      type: GET_POKEMONS,
      payload: Pokes
    })
  }
} */

export function getPokemons(){
  return function(dispatch) {
    dispatch({ type:LOADING})
    return fetch(`${process.env.REACT_APP_API}/pokemons`)
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
    const backendResp = await fetch(`${process.env.REACT_APP_API}/pokemons/${id}`)
    const Poke = await backendResp.json()
    return dispatch({
      type: DETAILS_POKE,
      payload:Poke
    })
  }
}

export function getPokemonSearchName(name){
  return async function(dispatch){
    dispatch({ type:LOADING})
    const backendResp = await fetch(`${process.env.REACT_APP_API}/pokemons?name=${name}`)
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
}

/* export function getPokemonSearchName(name){
  return function(dispatch){
    dispatch({ type:LOADING})
    fetch(`${process.env.REACT_APP_API}/pokemons?name=${name}`)
    .then(res => res.json())
    .then(poke => dispatch({
      type: GET_POKEMON_SEARCH_NAME,
      payload: poke
    }))
    .catch(error => console.log(error));
  }
} */


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
    fetch(`${process.env.REACT_APP_API}/types`)
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
    fetch(`${process.env.REACT_APP_API}/pokemons`,{
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
    type: FILTER_SEARCH_BY_ORIGIN,
    payload
  }
}

export function sortPokes(payload){
  return {
    type: SORT_POKES,
    payload
  }
}

export function sortPokesHP(payload){
  return {
    type: SORT_POKES_HP,
    payload
  }
}

export function reset(){
  return {
    type: RESET
  }
}

export function updatePokeDB(payload){
  return async function(dispatch) {
    try {
      const resp = await fetch(`${process.env.REACT_APP_API}/pokemons`,{
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
      )
      const respPut = await resp.json()
      return dispatch({
        type: PUT_RESPONSE,
        resp: respPut
      })
    }catch (error) {
      console.log("error");
    }
  } 
}

/* export function deletePokeDB(id){
  return async function(dispatch) {
    try {
      const resp = await fetch(`http://localhost:3001/pokemons/${id}`,{method: "DELETE"})
      let respDel = await resp.json()
      return await dispatch({
        type: DELETE_RESPONSE,
        delMsg: respDel
      })
    }catch (error) {
      console.log(error);
    }
  } 
} */

export function deletePokeDB(id) {
  return function(dispatch) {
    fetch(`${process.env.REACT_APP_API}/pokemons/${id}`, {method:"DELETE"})
      .then((r) => r.json())
      .then(respDel => dispatch({
        type: DELETE_RESPONSE,
        delMsg: respDel
      }))
      .catch(error => console.log(error))
  }
}