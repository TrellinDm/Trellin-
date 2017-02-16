var express = require('express');
// var path = require('path')
var bodyParser = require('body-parser');
var cors 		= require('cors');
var massive = require('massive');
var session = require('express-session');
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');
var config = require('./config');
var jwt = require('jsonwebtoken');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: config.secret,
  resave: true,
  saveUninitialized: true,
  cookie: {maxAge: 1000 * 60 * 60 * 24}
}))
app.set('port', (process.env.PORT || 8080));

app.use(passport.initialize());
app.use(passport.session());

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

//----------------------auth0-------------\\
passport.use(new Auth0Strategy({
  domain:       config.auth0.domain,
  clientID:     config.auth0.clientID,
  clientSecret: config.auth0.clientSecret,
  callbackURL: '/auth/callback'
}, function (accessToken, refreshToken, extraParams, profile, done) {

  db.get_userById([profile.id.toString()], function (err, user) {
    console.log(user);
    user = user[0];
    if(!user) {
      db.insert_user([profile.id, profile.displayName, profile.picture, profile._json.email], function(err, user) {
        console.log(user);
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
    console.log(obj);
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
})

app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})


app.listen(app.get('port'), function () {
  console.log('Running localhost', app.get('port'));
})
