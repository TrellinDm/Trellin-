let app = require('../server.js') ;
let db = app.get('db');

module.exports = {

	getAllUsers: function(req, res) {
    db.getAllUsers(req.body.id, function(err, allUsers) {
      res.status(200).send(allUsers);
    });
  },

	getConnections: function(req, res) {
		db.getConnections(req.body.id, function(err, connections) {
			res.status(200).send(connections);
		});
	},

  addConnection: function(req, res) {
    db.addConnection(req.body.userId, req.body.connId, function(err, conn) {
      res.status(200).send(conn);
    });
  }

};
