const database = require('../models');

class NivelController {
    static async index(request, response){
        try{
            const niveis = await database.Niveis.findAll();
            return response.status(200).json(niveis);
        }catch(erro){
            return response.status(500).json({message: erro.message})   
        }
    }
}

module.exports = NivelController;