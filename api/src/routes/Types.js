const { Router } = require('express')
const { getTypesAPI } = require('../controller/getControllers.js')
const { Type } = require('../db.js')

const router = Router();

router.get('/', async (req, res) => {
  const types = await Type.findAll()

  if (!types.length) {
    return res.json(await getTypesAPI())
  }

  res.json(types)
})

module.exports = router;