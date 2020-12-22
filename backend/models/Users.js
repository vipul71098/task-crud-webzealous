const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var validateEmail = function(email) {

    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return re.test(email)

};

//Create Schema

const UsersSchema = new Schema({
		title : {
			type:String,
			required :true
		},
		body: {
		 	type: String,
		 	required:true
		 	
		},
		author : {
			type:String,
			required :true
		},
		
		img:
    	{
        	data: Buffer,
        	contentType: String
    	},
		email:    { 
    		type: String,     
			Required:  'Email address cannot be left blank.',
    		validate: [validateEmail, 'Please fill a valid email address'],
         	match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    		index: {unique: true, dropDups: true}
    
    	}
});


module.exports = Users = mongoose.model('item',UsersSchema);
