const Aluno = require('../models/Aluno')

module.exports = {
    async matricular(request, response){
        let { cpf } = request.params;
        console.log(request.body);
        let { cursosMatriculados  } = request.body;
        console.log(cursosMatriculados);
        const AlunoResposta = await Aluno.update({ cpf : cpf }, { $push : { cursosMatriculados : cursosMatriculados }});
        return response.json(AlunoResposta);
    },

    async cursosMatriculados(request, response){
        let { cpf } = request.params;
        const AlunoResposta = await Aluno.aggregate([
            {  $match : { cpf : cpf }},
            {
               $lookup:
               {
                 from: "cursos",
                 localField: "cursosMatriculados._id",
                 foreignField: "_id",
                 as: "cursosMatriculados"
               }
            }
            ]);
            return response.json(AlunoResposta);        
    }
}