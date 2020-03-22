const mongoose = require('mongoose');
const paginate = require('mongoose-paginate')
const AlunoSchema = new mongoose.Schema({
    nome : String,
    cpf  : String,
    email :String,
    estadoCivil : String,
    hobies : [String],
    cursosMatriculados : [
        {
            _id : {type: mongoose.Schema.Types.ObjectId, ref: 'Curso'}
        }
    ]
});
AlunoSchema.plugin(paginate);


module.exports = mongoose.model('Aluno',AlunoSchema);