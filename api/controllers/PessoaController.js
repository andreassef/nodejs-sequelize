const e = require('express');
const database = require('../models');

class PessoaController{ 
    static async listar(request, response) {
        try{
            const listar = await database.Pessoas.findAll();
            return response.status(200).json(listar);
        }catch(error){
            return response.status(500).json({ message: error.message});
        }
    }

    static async findById(request, response) {
        const { id } = request.params;

        try{
            const umaPessoa = await database.Pessoas.findOne( {where: {id: Number(id)}} );
            return response.status(200).json(umaPessoa);
        } catch(error) {
            return response.status(500).json({ message: error.message});
        }
    }

    static async create(request, response) {
        const pessoa = request.body;

        try{
            const novaPessoa = await database.Pessoas.create(pessoa);
            return response.status(200).json(novaPessoa);
        }catch(error){
            return response.status(500).json({ message: error.message});
        }
    }

    static async update(request, response) {
        const { id } = request.params;
        const novasInfos = request.body;

        try{
            // o método update retorna zero ou 1
            await database.Pessoas.update(novasInfos, { where: {id : Number(id)} })
            const pessoaAtualizada = await database.Pessoas.findOne( {where: {id: Number(id)}});

            return response.status(200).json(pessoaAtualizada);
        }catch(error){
            return response.status(500).json( { message: error.message} );
        }
    }

    static async delete(request, response) {
        const { id } = request.params;
        console.log(request.params);

        try{
            await database.Pessoas.destroy( {where: {id: Number(id) }});
            return response.status(200).json({message: "deletado com sucesso!"});
        }catch(error){
            return response.status(500).json( { message: error.message} );
        }
    }
}

module.exports = PessoaController;