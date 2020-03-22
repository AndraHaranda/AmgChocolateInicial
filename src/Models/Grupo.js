const mongoose = require('mongoose');
const paginate = require('mongoose-paginate')
const GrupoSchema = new mongoose.Schema({
    nome : String,
    cpf  : String,
    email :String,
    curso : String
});
GrupoSchema.plugin(paginate);

module.exports = mongoose.model('Grupo', GrupoSchema);