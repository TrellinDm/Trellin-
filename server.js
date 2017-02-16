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

// var connect = massive.connectSync({connectionString: "postgres://inyrrfgq:n44M05nu0byEfJ26llJ2UFUdlgzWMk0M@babar.elephantsql.com:5432/inyrrfgq"});
// app.set('db', connect);
// var db = app.get('db');

var testCtrl = require('./server/testCtrl');

var ConnectionCtrl = require('./server/ConnectionCtrl');
var listCtrl = require('./server/listCtrl')

app.post('/test', testCtrl.Create);
app.post('/getMessages', testCtrl.getMessages);
app.post('/createNewMessage', testCtrl.createNewMessage);
app.post('/getConnections', ConnectionCtrl.getConnections);

//------------------------LIST ENDPOINTS-----------------------
app.get('/lists', listCtrl.GetAll);
app.post('/list', listCtrl.Create);

//======================Cards Endpoints========================
var cardCtrl = require('./server/cardCtrl');

app.post('/card', cardCtrl.Create);


app.listen(app.get('port'), function () {
  console.log('Running localhost', app.get('port'));
})
