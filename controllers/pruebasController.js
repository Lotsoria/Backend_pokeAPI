"use strict"

module.exports = {

    prueba(req, res){
        try {
            
            res.send('Hola Mundo')
        } catch (error) {
            res.send(error)
        }
    }


}