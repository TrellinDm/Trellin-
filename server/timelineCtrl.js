let app = require('../server.js') ;
let db = app.get('db');

module.exports = {
  getMessages: function (req, res) {
    console.log(req.params.id);
    db.getMessages([req.params.id], function (err, result) {
        // console.log(err);
        // console.log(result);
        res.status(200).send(result)
    })
  },
  createNewMessage: function (req, res) {
    // console.log(req.body)
    let data = req.body
    let userid = data.userid;
    let listid = data.listid;
    let type = data.messageType;
    let message = data.message;
    let messageid = 3;
    db.createNewMessage([userid, messageid, message,listid, type ], function (err, result) {
        // console.log(result)
        res.status(200).send(result)
    })
  }
}
