module.exports = function(app, passport){


  var movies  = require('../app/controllers/movies')
    , users   = require('../app/controllers/users')
    , theater = require('../app/controllers/theater')
    , admin   = require('../app/controllers/admin')
    , user    = require('../app/controllers/user')
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
  app.get('/movies/query', Auth.isAuthenticatedUser, movies.query);
  app.get('/movies/:movieId', Auth.isAuthenticatedUser, movies.get);
  app.post('/movies/new', Auth.isAuthenticatedAdmin, movies.add);

  /* Admin routes */
  /*app.get('/admin', function(req, res){
    res.redirect('/admin/');
  });*/
  //app.get('/admin/', Auth.isAuthenticatedAdmin);
  app.post('/admin/users/new', Auth.isAuthenticatedAdmin, admin.postUser);
  //app.post('/admin/movies/new', Auth.isAuthenticatedAdmin, admin.postMovie);
  app.get('/admin/movies/remove', Auth.isAuthenticatedAdmin, admin.removeMovie);
  //app.get('/admin/users', admin.users);
  //app.post('/admin/movie', admin.post);

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