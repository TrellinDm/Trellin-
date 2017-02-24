const express = require('express');
// var path = require('path')
const bodyParser = require('body-parser');
const cors 		= require('cors');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const config = require('./config');
const jwt = require('jsonwebtoken');

const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: config.secret,
  resave: true,
  saveUninitialized: true,
  cookie: {maxAge: 1000 * 60 * 60 * 24}
}));
app.set('port', (process.env.PORT || 8080));

app.use(passport.initialize());
app.use(passport.session());

app.set('port', (process.env.PORT || 8080));
app.use(express.static(__dirname + '/build'));

const connect = massive.connectSync({connectionString: "postgres://inyrrfgq:n44M05nu0byEfJ26llJ2UFUdlgzWMk0M@babar.elephantsql.com:5432/inyrrfgq"});
app.set('db', connect);
const db = app.get('db');



//----------------------auth0-------------\\
passport.use(new Auth0Strategy({
  domain:       config.auth0.domain,
  clientID:     config.auth0.clientID,
  clientSecret: config.auth0.clientSecret,
  callbackURL: '/auth/callback'
}, function (accessToken, refreshToken, extraParams, profile, done) {

  db.get_userById([profile.id.toString()], function (err, user) {
    user = user[0];
    if(!user) {
      db.insert_user([profile.id, profile.displayName, profile.picture, profile._json.email], function(err, user) {
        return done(err, user[0])
      })
    }
    else {
      return done(null, user);
    }
  })


}));

passport.serializeUser(function(user, done) {

  return done(null, user);
});

passport.deserializeUser(function(obj, done) {

    // db.get_userById([obj.userid], function (err, tom) {
    //   console.log(tom, 'des')
    //   var tem ;
    //   if (tom) {
    //     tem = tom[0];
    //   }
    //   else {
    //     tem = obj;
    //   }
    //
    //   return done(null, tem);
    // })
    return done(null, obj);

});

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: '/#/',
  failureRedirect: '/auth/me'
}));


app.get('/auth/me', function(req,res,next){
  if (!req.user)
    return res.status(404).send('user not found');

  return res.status(200).send(req.user);
});

app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});



const timelineCtrl = require('./server/timelineCtrl');
const ConnectionCtrl = require('./server/ConnectionCtrl');
const listCtrl = require('./server/listCtrl');
const profileCtrl = require('./server/profileCtrl');
const userCtrl = require('./server/userCtrl');

app.put('/setProfile', userCtrl.setProfile);

//------------------Timeline Endpoint-----------------------
app.get('/getMessages/', timelineCtrl.getMessages);
app.post('/createNewMessage', timelineCtrl.createNewMessage);
app.post('/getConnections', ConnectionCtrl.getConnections);
app.post('/reply', timelineCtrl.createReply);
app.get('/replies', timelineCtrl.getReply)
//------------------------LIST ENDPOINTS-----------------------
app.get('/lists', listCtrl.GetAll);
app.post('/list', listCtrl.Create);

//======================Cards Endpoints========================
var cardCtrl = require('./server/cardCtrl');
app.post('/card', cardCtrl.Create);
app.get('/cards', cardCtrl.GetAll);

//`````````````````````PROFILE ENDPOINTS```````````````````````
app.post('/getUserInformation', profileCtrl.getUserInformation);
app.post('/setAwards', profileCtrl.setAwards);
app.post('/setCertifications', profileCtrl.setCertifications);
app.post('/setCourses', profileCtrl.setCourses);
app.post('/setEducation', profileCtrl.setEducation);
app.post('/setExperience', profileCtrl.setExperience);
app.post('/setLanguage', profileCtrl.setLanguage);
app.post('/setPersonal', profileCtrl.setPersonal);
app.post('/setSkills', profileCtrl.setSkills);
app.post('/setSummary', profileCtrl.setSummary);
app.post('/setVolunteer', profileCtrl.setVolunteer);
app.delete('/delete/summary/:id', profileCtrl.deleteSummary);
app.delete('/delete/awards/:id', profileCtrl.deleteAwards);
app.delete('/delete/certifications/:id', profileCtrl.deleteCertifications);
app.delete('/delete/courses/:id', profileCtrl.deleteCourses);
app.delete('/delete/education/:id', profileCtrl.deleteEducation);
app.delete('/delete/experiences/:id', profileCtrl.deleteExperiences);
app.delete('/delete/languages/:id', profileCtrl.deleteLanguages);
app.delete('/delete/personal/:id', profileCtrl.deletePersonal);
app.delete('/delete/skills/:id', profileCtrl.deleteSkills);
app.delete('/delete/volunteer/:id', profileCtrl.deleteVolunteer);
app.delete('/delete/table/:id', listCtrl.deleteTable);
app.delete('/delete/card/:id', listCtrl.deleteCard);


app.listen(app.get('port'), function () {
  console.log('Running localhost', app.get('port'));
});
