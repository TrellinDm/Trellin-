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
  },
  getMessages: function (req, res) {
    let userid = 3;
    db.getMessages([userid], function (err, result) {
        console.log(err);
        console.log(result);
        res.status(200).send(result)
    })
  }
}
