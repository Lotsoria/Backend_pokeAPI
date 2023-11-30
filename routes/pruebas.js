const { Router } = require('express')
const router = Router()

const pruebasController = require('../controllers/pruebasController')

router.get('/prueba',pruebasController.prueba)


module.exports = router