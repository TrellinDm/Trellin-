var express = require('express');
// var path = require('path')
var bodyParser = require('body-parser');
var cors 		= require('cors');
var massive = require('massive');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/build'));

var connect = massive.connectSync({connectionString: "postgres://inyrrfgq:u-AbK09TtmHRwYVJeTZNs32smn1W2MJ5@babar.elephantsql.com:5432/inyrrfgq"});
app.set('db', connect);
var db = app.get('db');

var testCtrl = require('./server/testCtrl');

app.post('/test', testCtrl.Create)

app.listen(app.get('port'), function () {
  console.log('Running localhost', app.get('port'))
})
