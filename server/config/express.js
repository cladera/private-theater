var express = require('express');

module.exports = function(app, config) {
  app.configure(function () {
    app.enable('strict routing');
    app.use(express.compress());
    app.use(express.static(config.root + '/public'));
    app.set('port', config.port);
    app.set('views', config.root + '/app/views');
    app.set('view engine', 'jade');
    app.use(express.favicon(config.root + '/public/img/favicon.ico'));
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    //Enable Theater APP statics
    app.use('/theater/', express.static(config.theaterApp + '/dist'));
    //Enable Admin APP statics
    app.use('/admin/', express.static(config.adminApp + '/dist'));
    app.use(function(req, res) {
      res.status(404).sendfile(config.root+'/public/404.html');
    });
  });
};
