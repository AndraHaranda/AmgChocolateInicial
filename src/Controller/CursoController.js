const Curso = require('../models/Curso');

module.exports = {
    async index(request, response){
        const CursoRetorno = await Curso.find();
        return response.json(CursoRetorno);
    },
    async getCurso(request, response){
        let { cpf } = request.params;
        const CursoRetorno = await Curso.find({ cpf : cpf});
        return response.json(CursoRetorno);
    },
     
    async create(request, response){
        let { nomeCurso , descricao , aulas } = request.body;
        const CursoRetorno = await Curso.create({
               nomeCurso,
               descricao,
               aulas
        });
        
        return response.json(CursoRetorno);
    },

    async edit(request, response){
        let { nomeCurso , descricao } = request.body;
        const CursoRetorno = await Curso.updateOne({id : id} , {$set: { nomeCurso : nomeCurso , descricao : descricao}});
        return response.json(CursoRetorno);
    },

    async delete(request, response){
        let { id } = request.body;
        const CursoRetorno = await Curso.deleteOne({id : id});
        return response.json(CursoRetorno);
    },    
}