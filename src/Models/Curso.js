const mongoose = require('mongoose');
const paginate = require('mongoose-paginate')
const CursoSchema = new mongoose.Schema({
    nomeCurso : String,
    descricao : String,
    aulas : [{
        nroAula : Number,
        nomeAula : String,        
    }]
});
CursoSchema.plugin(paginate);

module.exports = mongoose.model('Curso', CursoSchema);
