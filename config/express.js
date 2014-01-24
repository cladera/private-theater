var express   = require('express'),
    flash     = require('connect-flash');

module.exports = function(app, config, passport) {
  app.configure(function () {
    app.enable('strict routing');
    app.use(express.compress());
    app.set('port', config.port);
    app.set('views', config.root + '/app/views');
    app.set('view engine', 'jade');
    app.use(express.favicon(config.root + '/public/img/favicon.ico'));
    app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.session({ secret: 'super-secret-key-cgcladera' }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.methodOverride());
    app.use(flash());
    app.use(app.router);
    app.use(express.static(config.theaterApp));
    app.use(function(req, res) {
      res.status(404).sendfile(config.root+'/public/404.html');
    });
  });
};
