const pruebasRoutes = require('./pruebas')
const pokeAPIRoutes = require('./pokeAPI')

module.exports = function(app){
    app.use('/pruebas',pruebasRoutes)
    app.use('/pokeAPI',pokeAPIRoutes)

} 