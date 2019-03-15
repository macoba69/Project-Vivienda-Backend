var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usuarioSchema = new Schema({
	'nombres' : String,
	'apellidoPaterno' : String,
	'apellidoMaterno' : String,
	'nombreUsuario' : String,
	'password' : String,
	'estado' : String,
	'permisos' : Number,
	'email' : String
}, {timestamps: true});

module.exports = mongoose.model('usuario', usuarioSchema);
