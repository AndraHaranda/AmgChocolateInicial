const mongoose = require('mongoose');
const paginate = require('mongoose-paginate')
const DesejoSchema = new mongoose.Schema({
    nome : String,
    descricao :String
});
DesejoSchema.plugin(paginate);

module.exports = mongoose.model('Desejo',DesejoSchema);