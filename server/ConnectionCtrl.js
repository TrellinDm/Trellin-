let app = require('../server.js') ;
let db = app.get('db');

module.exports = {
  getConnections: function(req, res) {
    console.log(req.body.id);
    db.getConnections(req.body.id, function(err, connections) {
      console.log(connections.length);
      res.status(200).send(connections);
    });
  }
};
