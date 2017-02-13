var express = require('express');
// var path = require('path')
var bodyParser = require('body-parser');
var cors 		= require('cors');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/build'));


app.listen(app.get('port'), function () {
  console.log('Running localhost', app.get('port'))
})
