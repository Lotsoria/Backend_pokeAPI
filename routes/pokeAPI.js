const { Router } = require('express')
const router = Router()

const pokeAPIController = require('../controllers/pokeAPIController')

router.get('/find', pokeAPIController.find)
router.get('/findPokemon/:pokemon', pokeAPIController.findPokemon)

module.exports = router