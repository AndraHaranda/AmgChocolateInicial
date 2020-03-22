const Aluno = require('../Models/Aluno');
const parseStringToArray = require('../util/parseStringToArray');

module.exports = {
        async index(request, response){
            const { page = 1 } = request.query;
            const AlunoRetorno = await Aluno.paginate({}, {page, limit : 2})
            return response.json(AlunoRetorno);
        },   

    async getAluno(request, response){
        let { cpf } = request.params;
        const AlunoRetorno = await Aluno.find({ cpf : cpf});
        return response.json(AlunoRetorno);
    },

    async create(request, response){
        let { nome , cpf , email, hobies } = request.body;
        const vHobies = parseStringToArray(hobies);
        const retornoAluno = await Aluno.create({
               nome,
               cpf,
               email ,
              
        });
        
        return response.json(retornoAluno);
    },

    async edit(request, response){
        let { nome , cpf , email, hobies } = request.body;
        const vHobies = parseStringToArray(hobies);
        const AlunoRetorno = await Aluno.updateOne({cpf : cpf} , {$set: {nome : nome , email : email , hobies : vHobies}});
        return response.json(AlunoRetorno);
    },

    async addHobie(request, response){
        let { cpf } = request.params;
        let { hobies } = request.body;
        const vHobies = parseStringToArray(hobies);
        const AlunoRetorno = await Aluno.updateOne({cpf : cpf} , {$push: {hobies : vHobies }});
        return response.json(AlunoRetorno);
    },

    async delete(request, response){
        let { cpf } = request.body;
        const AlunoRetorno = await Aluno.deleteOne({cpf : cpf});
        return response.json(AlunoRetorno);
    },    
}