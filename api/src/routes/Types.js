const { Router } = require('express')
const fetch = require("node-fetch")
const { Tipo } = require('../db.js')

const router = Router();

router.get('/', async (req, res) => {
  const api = await fetch('https://pokeapi.co/api/v2/type');
  const types = await api.json();

  if (types.results.length) {
    for (let i = 0; i < types.results.length; i++) {
      await Tipo.create({ nombre: types.results[i].name })
    }
  }

  res.json(await Tipo.findAll({
    attributes: {exclude: ["createdAt", "updatedAt"]}
  }));
})

module.exports = router;

