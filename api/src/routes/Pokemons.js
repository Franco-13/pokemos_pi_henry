const { Router } = require('express')
const fetch = require("node-fetch");
const { Pokemon, Type } = require('../db.js')

const router = Router();

const getPokemonsAPI = async () => {
  const api = await fetch("https://pokeapi.co/api/v2/pokemon");
  const poke = await api.json()
  var url2 = poke.next
  const api2 = await fetch(url2)
  const poke2 = await api2.json()
  
  const pokesResult = [...poke.results, ...poke2.results]

  let arrPropsPoke = []

  if (pokesResult.length) {
    for (let i = 0; i < pokesResult.length; i++) {
      const apiResUrl = await fetch(`${pokesResult[i].url}`)
      const apiDetailsPoke = await apiResUrl.json()

      const detailsPoke = {
        id: pokesResult[i].url.split("/")[6] + "_api",
        name: apiDetailsPoke.name,
        image: apiDetailsPoke.sprites.other["official-artwork"].front_default || apiDetailsPoke.sprites.other.home["front_shiny"],
        types: apiDetailsPoke.types.map(el => el.type.name)
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
      attributes: ["nombre"],
      through: {
        attributes: []
      }
    }
  })
}


router.get("/", async (req, res) => {
  const name = req.query.name
  const detailsPokeDb = await Pokemon.findAll({
    attributes: ["name", "id", "image"],
    include: {
      model: Type,
      attributes: ["nombre"],
      through: {
        attributes: []
      }
    }
  })
  const infoAPI = await getPokemonsAPI()
  const allPokes = [...infoAPI, ...detailsPokeDb]

  if (name) {
    let pokeName = allPokes.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
    pokeName.length 
      ? res.status(200).send(pokeName)
      : res.status(404).send({message: "Pokemon no encontrado"})
  }else{
    res.json(allPokes)
  }

})

router.get("/:id", async (req, res) => {
  const {id} = req.params
  if (!id.includes("_api")) {
    const pokeDB = await getPokemonsDB()
    const findPokeDB = pokeDB.find(el => el.id === id)
    
    if (findPokeDB) {
      return res.status(200).json(findPokeDB)
    }
    res.status(404).send("El pokemon no existe")
  }
  
  let idApi = id.split("_")[0]

  if (id.includes("_api")){
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${idApi}`);
    const pokeAPI = await api.json()
    const pokeDetailsAPI = {
      hp: pokeAPI.stats[0].base_stat,
      attack: pokeAPI.stats[1].base_stat,
      defense: pokeAPI.stats[2].base_stat,
      speed: pokeAPI.stats[5].base_stat,
      height: pokeAPI.height,
      weight: pokeAPI.weight,
    }

    const pokeArray = await getPokemonsAPI()
    const findPokedetailsAPI = pokeArray.find(el => el.id === id)

    if (findPokedetailsAPI) {
      const details = {...findPokedetailsAPI, ...pokeDetailsAPI}
      return res.status(200).json(details)
    }
    res.status(404).send("El pokemon no existe")
  }
})

router.post("/", async (req, res) => {
  let {name, hp, attack, defense, speed, height, weight, image, types} = req.body;

  if(!image.length) {
    image = "https://pa1.narvii.com/6673/8ff3f1ad9f92cb0c11e6af52f241a1075336f440_hq.gif"
  }
  const [newPoke, created] = await Pokemon.findOrCreate({
    where: {
      name, 
      hp, 
      attack, 
      defense, 
      speed, 
      height, 
      weight, 
      image
    },
  })

  if (!created) {
    return res.status(404).send("El pokemon ya existe")
  }

  let tipoPoke = await Type.findAll({
    where: {nombre: types}
  })

  await newPoke.setTypes(tipoPoke)

  res.json({message:"Pokemon creado con exito"})

})

module.exports = router;