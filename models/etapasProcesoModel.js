var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var etapasProcesoSchema = new Schema({
	'nombre' : String,
	'estado' : String,
	'fechaInicio' : Date,
	'fechaFinal' : Date,
	'trabajadorId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'trabajadores'
	}
}, {timestamps: true});

module.exports = mongoose.model('etapasProceso', etapasProcesoSchema);