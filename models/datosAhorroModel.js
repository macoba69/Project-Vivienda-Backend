var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var datosAhorroSchema = new Schema({
	'banco' : String,
	'numeroCuenta' : String,
	'monto' : Number,
	'trabajadorId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'trabajadores'
	}
}, {timestamps: true});

module.exports = mongoose.model('datosAhorro', datosAhorroSchema);