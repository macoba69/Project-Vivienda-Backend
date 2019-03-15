var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var empresaLaboralSchema = new Schema({
	'rut' : String,
	'dv' : String,
	'razonSocial' : String,
	'anexoId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'anexo'
	},
	'fechaInicio' : Date,
	'trabajadorId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'trabajadores'
	}
}, {timestamps: true});

module.exports = mongoose.model('empresaLaboral', empresaLaboralSchema);
