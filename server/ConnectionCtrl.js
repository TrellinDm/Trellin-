let app = require('../server.js') ;
let db = app.get('db');

module.exports = {
  
	getAllConnections: function(req, res) {
    db.getAllConnections(function(err, allConnections) {
      res.status(200).send(allConnections);
    });
  },
  
	getConnections: function(req, res) {
		db.getConnections(req.body.id, function(err, connections) {
			res.status(200).send(connections);
		});
	}
	
};