var express = require('express'),
  mongoose = require('mongoose'),
  fs = require('fs'),
  passport = require('passport'),
  config = require('./config/config');

//TODO: Implement logger

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

require('./config/passport')(passport);

var app = express();

require('./config/express')(app, config, passport);
require('./config/routes')(app, passport);

app.listen(config.port);
