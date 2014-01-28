module.exports = function(app, passport){


  var movies  = require('../app/controllers/movies')
    , users   = require('../app/controllers/users')
    , auth    = require('../app/controllers/auth')
    , path    = require('path')
    , Auth    = require('./middlewares/authorization');


  app.post('/login', auth.login);
  app.get('/logout', auth.logout);

  /* Users routes */
  app.get('/users/all', Auth.isAuthenticatedAdmin, users.all);
  app.get('/users/me', Auth.isAuthenticatedUser, users.me);
  app.get('/users/:userId', Auth.isAuthenticatedAdmin, users.get);
  app.post('/users/new', Auth.isAuthenticatedAdmin, users.add);

  /* Client app routes */
  app.get('/index.html', function(req,res){
    res.redirect('/');
  });
  /* Movies routes */
  app.post('/movies/:movieId/medias/new', Auth.isAuthenticatedAdmin, movies.addMedia);
  app.delete('/movies/:movieId/medias/:mediaId', Auth.isAuthenticatedAdmin, movies.deleteMedia);
  app.get('/movies/query', Auth.isAuthenticatedUser, movies.query);
  app.get('/movies/:movieId', Auth.isAuthenticatedUser, movies.get);
  app.delete('/movies/:movieId', Auth.isAuthenticatedAdmin, movies.remove);
  app.post('/movies/new', Auth.isAuthenticatedAdmin, movies.add);
  app.put('/movies/:movieId', Auth.isAuthenticatedAdmin, movies.update);

  app.get('/*', function(req, res, next){
    var user = req.user || {
      _id: 0,
      email: '',
      role: 'PUBLIC'
    };
    res.cookie('user', JSON.stringify({
      _id: user._id,
      email: user.email,
      role: user.role
    }));
    next();
  });
};