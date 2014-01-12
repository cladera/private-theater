module.exports = function(app, passport){


  var theater = require('../app/controllers/theater')
    , admin   = require('../app/controllers/admin')
    , path = require('path')
    , Auth = require('./middlewares/authorization');

  /* Login */
  app.get('/',Auth.isAuthenticatedUser, function(req, res){
    res.redirect('/theater/');
  });
  app.get('/login', function(req, res){
    res.render('login',{
      error: req.flash('error')
    });
  });
  app.post('/login',
    passport.authenticate('local', { successRedirect: '/theater/',
      failureRedirect: '/',
      failureFlash: true })
  );
  //TODO: Logout route

  /* Theater routes */
  app.get('/theater', function(req, res){
    res.redirect('/theater/');
  });
  app.get('/theater/', Auth.isAuthenticatedUser);
  app.get('/theater/data/movies.json', Auth.isAuthenticatedUser, theater.movies);
  app.get('/theater/data/:movieId.json', Auth.isAuthenticatedUser, theater.movie);

  /* Admin routes */
  app.get('/admin', function(req, res){
    res.redirect('/admin/');
  });
  app.get('/admin/', Auth.isAuthenticatedAdmin);
  app.post('/admin/users/new', Auth.isAuthenticatedAdmin, admin.postUser);
  app.post('/admin/movies/new', Auth.isAuthenticatedAdmin, admin.postMovie);
  //app.get('/admin/users', admin.users);
  //app.post('/admin/movie', admin.post);

};
