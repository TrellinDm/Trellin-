let app = require('../server.js') ;
let db = app.get('db');

module.exports = {
  Create: function (req, res) {
    db.insert_list([req.body.newList], function (err, result) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.status(200).json(result)
      }
    })
  },

  GetAll: function (req, res) {
    db.get_lists(function (err, result) {
        res.status(200).json(result)
    })
  },
  
  deleteTable: function(req, res) {
    db.deleteCards([req.params.id], function(err, result) {
	    db.deleteTable([req.params.id], function(err, result) {
		    res.status(200).json(result);
	    })
    })
  },
	
	deleteCard: function(req, res) {
		db.deleteCard([req.params.id], function(err, result) {
      res.status(200).json(result);
		})
	}
  
};
