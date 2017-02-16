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

var connect = massive.connectSync({connectionString: "postgres://inyrrfgq:n44M05nu0byEfJ26llJ2UFUdlgzWMk0M@babar.elephantsql.com:5432/inyrrfgq"});
app.set('db', connect);
var db = app.get('db');

var testCtrl = require('./server/testCtrl');

var ConnectionCtrl = require('./server/ConnectionCtrl');
var listCtrl = require('./server/listCtrl');
var pofileCtrl = require('./server/profileCtrl');

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

//`````````````````````PROFILE ENDPOINTS```````````````````````
app.post('/profile/language/set', profileCtrl.getLanguage);
app.post('/profile/language/get', profileCtrl.setLanguage);
app.post('/profile/summary/set', profileCtrl.getSummary);
app.post('/profile/summary/get', profileCtrl.setSummary);
app.post('/profile/certifications/set', profileCtrl.getCertifications);
app.post('/profile/certifications/get', profileCtrl.setCertifications);
app.post('/profile/education/set', profileCtrl.getEducation);
app.post('/profile/education/get', profileCtrl.setEducation);
app.post('/profile/skills/set', profileCtrl.getSkills);
app.post('/profile/skills/get', profileCtrl.setSkills);
app.post('/profile/experience/set', profileCtrl.getExperience);
app.post('/profile/experience/get', profileCtrl.setExperience);
app.post('/profile/volunteer/set', profileCtrl.getVolunteer);
app.post('/profile/volunteer/get', profileCtrl.setVolunteer);
app.post('/profile/personal/set', profileCtrl.getPersonal);
app.post('/profile/personal/get', profileCtrl.setPersonal);
app.post('/profile/awards/set', profileCtrl.getAwards);
app.post('/profile/awards/get', profileCtrl.setAwards);
app.post('/profile/courses/set', profileCtrl.getCourses);
app.post('/profile/courses/get', profileCtrl.setCourses);


app.listen(app.get('port'), function () {
  console.log('Running localhost', app.get('port'));
})
