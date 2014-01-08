var express = require('express'),
  mongoose = require('mongoose'),
  fs = require('fs'),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy,
  config = require('./config/config');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var modelsPath = __dirname + '/app/models';
fs.readdirSync(modelsPath).forEach(function (file) {
  if (file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
});

var app = express();
passport.use(new LocalStrategy(
  function(username, password, done) {
    if(username !== 'cgcladera'){
      return done(null, false);
    }
    if( password !== 'dilabardiu'){
      return done(null, false);
    }
    return done(null, {
      id: 1,
      username: username
    });
  }
));
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  done(null, {
    id: 1,
    username: 'cgcladera'
  });
});

require('./config/express')(app, config, passport);
require('./config/routes')(app, passport);

app.listen(config.port);
