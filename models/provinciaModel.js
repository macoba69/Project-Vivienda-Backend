var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var provinciaSchema = new Schema({
	'codigo' : String,
	'nombre' :{ 
		'type': String,	
		'required': true		
	},
	'regionId' : {
        'type': Schema.Types.ObjectId,
        'ref': 'region'
    }
}, {timestamps: true});

module.exports = mongoose.model('provincia', provinciaSchema);