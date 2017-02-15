let app = require('../server.js') ;
let db = app.get('db');

module.exports = {
  getConnections: function(req, res) {
    db.getConnections(req.body.id, function(err, connections) {
      res.status(200).send(connections);
    });
  }
}
