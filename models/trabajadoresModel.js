var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var trabajadoresSchema = new Schema({
	'rut' : {
		'type': String,
		'require': true,
		'min': 1,
		'max': 1
	},
	'dv' : {
		'type': String,
		'require': true,
		'min': 1,
		'max': 1	
	},
	'nombres' : {
		'type': String,
		'require': true
	},
	'apellidoPaterno' : {
		'type': String,
		'require': true
	},
	'apellidoMaterno' : String,
	'estado' : {
		'type': String
		//'type': Boolean,
		//'default': true
	},
	'fechaNacimiento' : Date,
	'direccion' : String,
	'piso' : String,
	'region' : String,
	'comuna' : String,
	'telefonoFijo' : String,
	'telefonoMovil' : String,
	'telefonoOtro' : String,
	'email' : String,

	'empresaConvenioId': {
		type: Schema.Types.ObjectId,
		ref: 'empresaConvenio'
	},
	'empresaLaboralId': {
		type: Schema.Types.ObjectId,
		ref: 'empresaLaboral'
   },
	'datosDiagnosticoId' : {
		type: Schema.Types.ObjectId,
		ref: 'datosDiagnostico'
   },
	'ahorros' : [{
		'datosAhorrosId': {
			type: Schema.Types.ObjectId,
			ref: 'datosAhorro'
		}
   }],
	'familiares' : [{
		'datosFamiliaresId': {
		type: Schema.Types.ObjectId,
		ref: 'datosFamilieares'
		}
   }],
	'etapas' : [{
		'etapasProcesoId': {
			type: Schema.Types.ObjectId,
			ref: 'etapasProceso'
		}
   }],
	'atenciones' : [{
		'atencionesId': {
			type: Schema.Types.ObjectId,
			ref: 'atenciones'
		}
   }]
}, {timestamps: true});

module.exports = mongoose.model('trabajadores', trabajadoresSchema);