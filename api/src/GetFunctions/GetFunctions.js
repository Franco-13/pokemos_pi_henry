const fetch = require("node-fetch");
const { Pokemon, Type } = require('../db.js')

const getPokemonsAPI = async () => {
  try{ 
    const api = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=40");
    const {results} = await api.json()

    let arrPokesResp = []
    for (let i = 0; i < results.length; i++) {
      const apiResUrl = fetch(`${results[i].url}`)
      arrPokesResp.push( apiResUrl )
    }

    const pokeResultArr = await Promise.all(arrPokesResp)
    //const pokeResultArr = await Promise.all(new Error())
    
    let arrPropsPoke = []
    
    if (pokeResultArr.length) {
      for (let i = 0; i < pokeResultArr.length; i++) {
        const apiDetailsPoke = await pokeResultArr[i].json()

        const detailsPoke = {
          id: results[i].url.split("/")[6] + "_api",
          name: apiDetailsPoke.name,
          image: apiDetailsPoke.sprites?.other?.home?.front_default  ?? apiDetailsPoke.sprites?.other?.home?.front_shiny ,
          types: apiDetailsPoke.types.map(el => el.type.name),
          hp: apiDetailsPoke.stats[0].base_stat,
          attack: apiDetailsPoke.stats[1].base_stat,
          defense: apiDetailsPoke.stats[2].base_stat,
          speed: apiDetailsPoke.stats[5].base_stat,
          height: apiDetailsPoke.height,
          weight: apiDetailsPoke.weight,
        }
        arrPropsPoke.push(detailsPoke)
      }
    }

    return arrPropsPoke;
  }catch(error){
    console.log("ERROR",error);
    return []
  }
}

const getPokemonByNameAPI = async (name) => {
  try {
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const detailPoke = await api.json()
    console.log("detail en la funciion",detailPoke);
    return [{
      id: detailPoke.id + "_api",
      name: detailPoke.name,
      image: detailPoke.sprites?.other?.home?.front_default  ?? detailPoke.sprites?.other?.home?.front_shiny ,
      types: detailPoke.types.map(el => el.type.name),
      hp: detailPoke.stats[0].base_stat,
      attack: detailPoke.stats[1].base_stat,
      defense: detailPoke.stats[2].base_stat,
      speed: detailPoke.stats[5].base_stat,
      height: detailPoke.height,
      weight: detailPoke.weight,
    }]
  } catch (error) {
    console.log("error fn byName",error);
    return []
  }
}

const getPokemonByIdAPI = async (id) => {
  try {
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const detailPoke = await api.json()
    console.log(detailPoke);
    return {
      id: detailPoke.id + "_api",
      name: detailPoke.name,
      image: detailPoke.sprites?.other?.home?.front_default  ?? detailPoke.sprites?.other?.home?.front_shiny ,
      types: detailPoke.types.map(el => el.type.name),
      hp: detailPoke.stats[0].base_stat,
      attack: detailPoke.stats[1].base_stat,
      defense: detailPoke.stats[2].base_stat,
      speed: detailPoke.stats[5].base_stat,
      height: detailPoke.height,
      weight: detailPoke.weight,
    }
  } catch (error) {
    console.log(error);
  }
}

const getPokemonsDB = async () => {
  return await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: []
      }
    }
  })
}

const getTypesAPI = async () => {
  const api = await fetch('https://pokeapi.co/api/v2/type');
  const typesRes = await api.json();
  
  if (typesRes.results.length) {
    for (let i = 0; i < typesRes.results.length; i++) {
      await Type.create(
        {name: typesRes.results[i].name,
        }
      );
    }    
  }
  return Type.findAll()
}

module.exports = {
  getTypesAPI,
  getPokemonsAPI,
  getPokemonByNameAPI,
  getPokemonByIdAPI,
  getPokemonsDB
}