var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 var regionSchema = new Schema({
 	'codigo': String,
 	'nombre': {
 		'type': String,
		'required': true
 	},
 	// 'ordinal': {
 	// 	'type': String,
 	// 	'required': true
 	// },
 }, {timestamps: true}); 

module.exports = mongoose.model('region', regionSchema);



