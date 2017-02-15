let app = require('../server.js') ;
let db = app.get('db');

module.exports = {
  Create: function (req, res) {
    console.log(req.body);
    db.insert_list([req.body.newList], function (err, result) {
      if (err) {

        console.log(err);
        res.status(500).send(err)
      } else {
        res.status(200).json(result)
      }
    })
  },
  GetAll: function (req, res) {
    db.get_lists(function (err, result) {
        console.log(err);
        console.log(result);
        res.status(200).json(result)
    })
  }
}
