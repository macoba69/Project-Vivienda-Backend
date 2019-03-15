var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var datosDiagnosticoSchema = new Schema({
	'rsh' : String,
	'comuna' : String,
	'subsidioActual' : String,
	'subsidioPostular' : String,
	'dicom' : Number,
	'atc' : String,
	'discapacidad' : String,
	'estadoCivil' : String,
	'renta' : Number,
	'tipoContrato' : String,
	'trabajadorId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'trabajadores'
	}
}, {timestamps: true});

module.exports = mongoose.model('datosDiagnostico', datosDiagnosticoSchema);
