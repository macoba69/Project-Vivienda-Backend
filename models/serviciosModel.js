var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var serviciosSchema = new Schema({
	'nombre' : String
}, {timestamps: true});

module.exports = mongoose.model('servicios', serviciosSchema);