const Desejo = require('../models/Aluno');

module.exports = {
    async index(request, response){
       
        const DesejoRetorno = await Desejo.find();
        return response.json(DesejoRetorno);
    },

    async getAluno(request, response){
        let { cpf } = request.params;
        const DesejoRetorno = await Desejo.find({ cpf : cpf});
        return response.json(DesejoRetorno);
    },

    async create(request, response){
        let { nome , cpf , email } = request.body;
        const DesejoRetorno = await Desejo.create({
               nome,
               cpf,
               email 
        });
        return response.json(DesejoRetorno);
    },

    async edit(request, response){
        let { nome , cpf , email } = request.body;
        const DesejoRetorno = await Desejo.updateOne({cpf : cpf} , {$set: {nome : nome , email : email}});
        return response.json(DesejoRetorno);
    },

    async delete(request, response){
        let { cpf } = request.body;
        const DesejoRetorno = await Desejo.deleteOne({cpf : cpf});
        return response.json(DesejoRetorno);
    },    
}