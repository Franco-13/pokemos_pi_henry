const { Router } = require('express')
const fetch = require("node-fetch");
const { Pokemon } = require('../db.js')

const router = Router();

let randomOffset = Math.random().toString()


const getPokemonsAPI = async () => {
  const api = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${randomOffset}&limit=40`);
  const poke = await api.json()

  let pokeResults = poke.results
  let arrPropsPoke = []

  if (poke.results.length) {
    for (let i = 0; i < pokeResults.length; i++) {
      const apiResUrl = await fetch(`${pokeResults[i].url}`)
      const apiDetailsPoke = await apiResUrl.json()
      const detailsPoke = {
        id: pokeResults[i].url.split("/")[6] + "_api",
        name: apiDetailsPoke.name,
        image: apiDetailsPoke.sprites.other["official-artwork"].front_default || apiDetailsPoke.sprites.other.home["front_shiny"],
        types: apiDetailsPoke.types.map(el => el.type.name)
      }
      arrPropsPoke.push(detailsPoke)
    }
  }

  return arrPropsPoke;
}

const getPokemonsDB = () => {
  
}

router.get("/", async (req, res) => {
  res.json(await getPokemonsAPI())
})

router.post("/", async (req, res) => {
  const {name, hp, attack, defense, speed, height, weight, image, types} = req.body;

  const [newPoke, created] = await Pokemon.findOrCreate({
    where: {name, hp, attack, defense, speed, height, weight, image},
  
  })

  if (!created) {
    return res.status(404).send("El pokemon ya existe")
  }

  res.status(201).json(newPoke)

})

module.exports = router;