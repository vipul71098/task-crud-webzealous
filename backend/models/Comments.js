const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserComment = new Schema({
	comment : {
			type:String,
			required :true
		},
		name: {
		 	type: String,
		 	required:true
		 	
		}
})

module.exports = Comments = mongoose.model('comment',UserComment);