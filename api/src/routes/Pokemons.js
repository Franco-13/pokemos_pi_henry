const { Router } = require('express')
const { Pokemon, Type } = require('../db.js')
const { getPokemonsAPI, getPokemonsDB } = require('../GetFunctions/GetFunctions')

const router = Router();

router.get("/", async (req, res) => {
  const name = req.query.name
  const detailsPokeDb = await Pokemon.findAll({
    attributes: ["name", "id", "image", "hp"],
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: []
      }
    }
  })

  const infoAPI = await getPokemonsAPI()
  const allPokes = [...infoAPI, ...detailsPokeDb]
  const pokesError = [{
    id:"ERROR_SIN_RESULTADO",
    name: "Desconocido",
    image: "https://noticierodiario.com/img/pokemon-go-desactiva-el-comercio-despues-de-encontrar-un-error-importante.png",
    types: ["Realice otra búsqueda"]
  }]
  const allPokesSorted = allPokes.sort(function(a, b){
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  })

  if (name) {
    let pokeName = allPokesSorted.filter(el => el.name.toLowerCase() === (name.toLowerCase()))
    
    pokeName.length 
      ? res.status(200).send(pokeName)
      : res.send(pokesError)
  }else{
    res.json(allPokesSorted)
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

  if (id.includes("_api")){
    const pokeArray = await getPokemonsAPI()
    const findPokedetailsAPI = pokeArray.find(el => el.id === id)

    if (findPokedetailsAPI) {
      return res.status(200).json(findPokedetailsAPI)
    }
    res.status(404).send("El pokemon no existe")
  }
})

router.post("/", async (req, res) => {
  let {name, hp, attack, defense, speed, height, weight, image, types} = req.body;

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

  if (!types.length) {
    types = [1]
  }

  let tipoPoke = await Type.findAll({
    where: {name: types}
  })

  await newPoke.addTypes(tipoPoke)

  res.json({message:"Pokemon creado con exito"})

})

module.exports = router;