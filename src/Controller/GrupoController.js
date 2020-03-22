const Desejo = require('../models/Aluno');

module.exports = {
    async index(request, response){
       
        const GrupoRetorno = await Grupo.find();
        return response.json(GrupoRetorno);
    },

    async getAluno(request, response){
        let { cpf } = request.params;
        const GrupoRetorno = await Grupo.find({ cpf : cpf});
        return response.json(GrupoRetorno);
    },

    async create(request, response){
        let { nome , cpf , email } = request.body;
        const GrupoRetorno = await Grupo.create({
               nome,
               cpf,
               email 
        });
        return response.json(GrupoRetorno);
    },

    async edit(request, response){
        let { nome , cpf , email } = request.body;
        const GrupoRetorno = await Grupo.updateOne({cpf : cpf} , {$set: {nome : nome , email : email}});
        return response.json(GrupoRetorno);
    },

    async delete(request, response){
        let { cpf } = request.body;
        const GrupoRetorno = await Grupo.deleteOne({cpf : cpf});
        return response.json(GrupoRetorno);
    },    
}