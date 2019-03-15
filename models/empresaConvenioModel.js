var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var empresaConvenioSchema = new Schema({
	'rut' : String,
	'dv' : String,
	'razonSocial' : String,
	'servicioSocial' : String,
	'trabajadorId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'trabajadores'
	}
}, {timestamps: true});

module.exports = mongoose.model('empresaConvenio', empresaConvenioSchema);

