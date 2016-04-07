var models = require('../models');

exports.send = function(req, res) {
	console.log(req.body);
	var newModels = new models.Message({
		email : req.body.email,
		content : req.body.content
	})

	newModels.save(afterSaving);

	function afterSaving(err) {
		if(err) {console.log(err); res.send(500);}
		res.redirect('/');
	}

}