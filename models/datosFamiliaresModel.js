var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var datosFamiliaresSchema = new Schema({
	'parentesco' : String,
	'fechaNacimiento' : Date,
	'trabajadorId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'trabajadores'
	}
}, {timestamps: true});

module.exports = mongoose.model('datosFamiliares', datosFamiliaresSchema);