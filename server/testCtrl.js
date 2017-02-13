let app = require('../server.js') ;
let db = app.get('db');

module.exports = {
  Create: function (req, res) {
    db.test(['hello2'], function (err, result) {
      if (err) {

        console.log(err);
        res.status(500).send(err)
      } else {
        res.json(result);
      }
    })
  }
}
