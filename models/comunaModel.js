var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var comunaSchema = new Schema({
	'codigo' : String,
	'nombre' :{ 
		'type': String,	
		'required': true		
	},
	// 'provinciaId' : {
    //     'type': Schema.Types.ObjectId,
    //     'ref': 'provincia'
    // }
}, {timestamps: true});

module.exports = mongoose.model('comuna', comunaSchema);
