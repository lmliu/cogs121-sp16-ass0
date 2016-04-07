var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
var todayDate = mm + '/' + dd + '/' + yyyy;
var MessageSchema = new Schema({
	'email' : String,
	'content' : String,
	'created' : {type: Date, default: todayDate}
});

exports.Message = mongoose.model('Message', MessageSchema);