let app = require('../server.js') ;
let db = app.get('db');

module.exports = {
  setProfile: function(req, res) {
    var update = [
      req.body.id,
      req.body.first,
      req.body.last,
      req.body.headline,
      req.body.location,
      req.body.industry
    ]
    db.setProfile(update, function(err, result) {
      console.log('loggin error');
      console.log(err);
      res.status(200).send(result);
    })
  }
}
