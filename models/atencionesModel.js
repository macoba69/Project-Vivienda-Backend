var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var atencionesSchema = new Schema({
	'sistracId': String,
	'estado' : String,
	'observaciones' : String,
	'servicioId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'servicio'
	},
	'trabajadorId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'trabajadores'
	}
}, {timestamps: true});

module.exports = mongoose.model('atenciones', atencionesSchema);
