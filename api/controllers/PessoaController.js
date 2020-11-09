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

    static async listActivatePeoples(request, response) {
        try {
            const listAll = await database.Pessoas.scope('todos').findAll();
            return response.status(200).json(listAll);
            
        } catch (error) {
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

    static async restorePeople( request, response ) {
        const { id } = request.params;
        try{
            await database.Pessoas.restore( {where: {id: Number(id) } } );
            return response.status(200).json( {message: `id ${id} restored!`});
        } catch(error) {
            return response.status(500).json( { erro: error.message } )
        }
    }

    static async findRegistry(request, response) {
        const { estudanteId, matriculaId } = request.params;
        try{
            const registration = await database.Matriculas.findOne( { 
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                } } );
                    
            return response.status(200).json(registration);
        }catch(erro) {
            return response.status(500).json({message: erro.message});
        }
    }

    static async createNewRegistry(request, response) {
        const { estudanteId } = req.params;
        const newRegistry = {...req.body, estudandeId: Number(estudanteId)};

        try{
            const createNewRegistry = await database.Matriculas.create(newRegistry);
            return response.status(200).json(createNewRegistry);
        }catch(erro){
            return response.status(500).json({message: erro.message});
        }

    }

    static async updateRegistry(request, response) {
        const { estudanteId, matriculaId } = request.params;
        const novasInfos = request.body;

        try{
            // o método update retorna zero ou 1
            await database.Matriculas.update(novasInfos, { where: {id : Number(matriculaId), estudante_id: Number(estudanteId)} })
            const matriculaAtualizada = await database.Matriculas.findOne( {where: {id: Number(matriculaId)}});
            return response.status(200).json(matriculaAtualizada);
        }catch(error){
            return response.status(500).json( { message: error.message} );
        }
    }

    static async deleteRegistry(request, response) {
        const { estudanteId, matriculaId } = request.params;

        try{
            await database.Matriculas.destroy( {where: {id: Number(matriculaId) }});
            return response.status(200).json({message: "deletado com sucesso!"});
        }catch(error){
            return response.status(500).json( { message: error.message} );
        }
    }
}

module.exports = PessoaController;