const database = require('../models');

class PessoaController{ 
    static async listar(request, response) {
        try{
            const listar = await database.Pessoas.findAll();
            return response.status(200).json(listar);
        }catch(e){
            return response.status(500).json({ message: e.message});
        }
    }

    static async findById(request, response) {
        const { id } = request.params;

        try{
            const umaPessoa = await database.Pessoas.findOne( {where: {id: Number(id)}} );
            return response.status(200).json(umaPessoa);
        } catch(error) {
            return response.status(500).json({ message: e.message});
        }
    }
}

module.exports = PessoaController;