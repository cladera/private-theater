module.exports = function(app, passport){


  var theater = require('../app/controllers/theater')
    , admin   = require('../app/controllers/admin')
    , user    = require('../app/controllers/user')
    , path    = require('path')
    , Auth    = require('./middlewares/authorization');

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
  app.get('/logout', function(req, res){
   req.logout();
   res.redirect('/');
  });

  /* User session routes */
  app.get('/user/session.json', Auth.isAuthenticatedUser, user.session);

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
  app.get('/admin/movies/remove', Auth.isAuthenticatedAdmin, admin.removeMovie);
  //app.get('/admin/users', admin.users);
  //app.post('/admin/movie', admin.post);

};
