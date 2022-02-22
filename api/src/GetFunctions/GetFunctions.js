const fetch = require("node-fetch");
const { Pokemon, Type } = require('../db')

const getPokemonsAPI = async () => {
  const api = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=40");
  const {results} = await api.json()

  let arrPokesResp = []
  for (let i = 0; i < results.length; i++) {
    const apiResUrl = fetch(`${results[i].url}`)
    arrPokesResp.push( apiResUrl )
  }

  const pokeResultArr = await Promise.all(arrPokesResp)

  let arrPropsPoke = []
  if (pokeResultArr.length) {
    for (let i = 0; i < pokeResultArr.length; i++) {
      const apiDetailsPoke = await pokeResultArr[i].json()

      const detailsPoke = {
        id: results[i].url.split("/")[6] + "_api",
        name: apiDetailsPoke.name,
        image: apiDetailsPoke.sprites.other["official-artwork"].front_default || apiDetailsPoke.sprites.other.home["front_shiny"],
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
        {name: typesRes.results[i].name}
      );
    }    
  }
  return Type.findAll()
}

module.exports = {
  getTypesAPI,
  getPokemonsAPI,
  getPokemonsDB
}