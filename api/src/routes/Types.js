const { Router } = require('express')
const fetch = require("node-fetch")
const { Type } = require('../db.js')

const router = Router();

const getTypesAPI = async () => {
  const api = await fetch('https://pokeapi.co/api/v2/type');
  const typesRes = await api.json();

  if (typesRes.results.length) {
    for (let i = 0; i < typesRes.results.length; i++) {
      await Type.create(
        {nombre: typesRes.results[i].name}
      );
    }    
  }
  return Type.findAll()
}

router.get('/', async (req, res) => {
  const types = await Type.findAll()

  if (!types.length) {
    return res.json(await getTypesAPI())
  }

  res.json(types)
})

module.exports = router;

