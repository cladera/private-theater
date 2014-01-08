module.exports = function(app, passport){


  var theater = require('../app/controllers/theater')
    , admin   = require('../app/controllers/admin')
    , path = require('path');

  /* Login */
  app.get('/', function(req, res){
    res.sendfile(path.resolve('public/login.html'));
  });
  app.post('/login',
    passport.authenticate('local', { successRedirect: '/theater/',
      failureRedirect: '/error',
      failureFlash: true })
  );

  /* Theater routes */
  app.get('/theater', function(req, res){
    res.redirect('/theater/');
  })
  app.get('/theater/data/movies.json', theater.movies);
  app.get('/theater/data/:movieId.json', theater.movie);

  /* Admin routes */
  app.get('/admin', admin.movies);
  app.post('/admin/movie', admin.post);

};
