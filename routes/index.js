var models = require('../models')

exports.view = function(req, res) {

  	models.Message
  		.find()
  		.exec(displayMessages);

  	function displayMessages(err, messages) {
  		if(err) {console.log(err); res.send(500);}
  		console.log(messages);
  		var data = {data: messages};
  		res.render("index", data);
  	}
}
