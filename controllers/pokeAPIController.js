const axios = require('axios')
const url = 'https://pokeapi.co/api/v2/';

module.exports = {

    async find(req, res) {
        const response = await axios.get(`${url}pokemon`);
        return res.status(200).send(response.data);
    },
    async findPokemon(req, res) {
        const { pokemon } = req.params
        const response = await axios.get(`${url}pokemon/${pokemon}`);
        const datos = response.data

        const nombre = datos.name
        const id = datos.id
        const habilidades = datos.abilities.map(habilidad => habilidad.ability.name)
        const imagenes = datos.sprites.other.dream_world.front_default
        const tipos = datos.types
        const datosPokemon = {
            nombre: nombre, 
            id: id, 
            habilidades: habilidades,
            imagenes: imagenes,
            tipos: tipos
        }
        try {
            return res.status(200).send(datosPokemon) 
        } catch (error) { 
            return res.status(404).send(error)   
        }
    },
    async findTypes(req, res) {


        try {

        } catch (error) {

        }

    }

}