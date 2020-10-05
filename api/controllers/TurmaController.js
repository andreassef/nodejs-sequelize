const database = require('../models');

class TurmaController {
    static async index(request, response) {
        try{
            const turmas = await database.Turmas.findAll();
            return response.status(200).json({turmas});
        }catch(error){
            return response.status(500).json( {message: error.message });
        }
    }
}

module.exports = TurmaController;