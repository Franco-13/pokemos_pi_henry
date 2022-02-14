const { Router } = require('express')
const fetch = require("node-fetch")
const { Tipo } = require('../db.js')

const router = Router();

const getTypesAPI = async () => {
  const api = await fetch('https://pokeapi.co/api/v2/type');
  const typesRes = await api.json();

  if (typesRes.results.length) {
    for (let i = 0; i < typesRes.results.length; i++) {
      await Tipo.create(
        {nombre: typesRes.results[i].name}
      );
    }    
  }
  return Tipo.findAll()
}

router.get('/', async (req, res) => {
  const types = await Tipo.findAll()

  if (!types.length) {
    return res.json(await getTypesAPI())
  }

  res.json(types)
})

module.exports = router;

