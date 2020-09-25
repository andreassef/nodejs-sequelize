const database = require('../models');

class PessoaController{ 
    static async listar(request, response) {
        try{
            const listar = await database.Pessoa.findAll();
            return response.status(200).json(listar);
        }catch(e){
            return response.status(500).json({ message: e.message})
        }
    }
}

module.exports = PessoaController;