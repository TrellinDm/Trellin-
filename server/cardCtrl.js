let app = require('../server.js') ;
let db = app.get('db');

module.exports = {
  Create: function (req, res) {

    db.insert_card([req.body.content, req.body.list_id], function (err, result) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200).json(result)
      }
    })
  },

  GetAll: function (req, res) {
    db.get_cards(function (err, result) {
      if (err) {
        res.status(500).send(err);
      }
      else {
        res.status(200).json(result)
      }
    })
  }
}
