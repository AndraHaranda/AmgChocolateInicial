const Aluno = require('../models/Aluno');
const jwt = require('jsonwebtoken')

module.exports = {
    async geraToken(request, response){
        
        let {cpf, senha} = request.params;
        const AlunoRetorno = await Aluno.findOne({ cpf : cpf});
        const token = jwt.sign({_id: AlunoRetorno._id}, process.env.JWT_KEY, { expiresIn: 300});
        return response.send({auth : true, token : token});
    }

}