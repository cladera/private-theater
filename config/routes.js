module.exports = function(app, passport){


  var theater = require('../app/controllers/theater')
    , admin   = require('../app/controllers/admin')
    , user    = require('../app/controllers/user')
    , auth    = require('../app/controllers/auth')
    , path    = require('path')
    , Auth    = require('./middlewares/authorization');

  /* Login */
  /*app.get('/',Auth.isAuthenticatedUser, function(req, res){
    res.redirect('/theater/');
  });
  app.get('/login', function(req, res){
    res.render('login',{
      error: req.flash('error')
    });
  });*/
  app.post('/login', auth.login);

  app.get('/logout', auth.logout);

  /* User session routes */
  app.get('/user/session.json', Auth.isAuthenticatedUser, user.session);

  /* Theater routes */
  app.get('/index.html', function(req,res){
    res.redirect('/');
  });
  app.get('/data/movies.json', Auth.isAuthenticatedUser, theater.movies);
  app.get('/data/:movieId.json', Auth.isAuthenticatedUser, theater.movie);

  /* Admin routes */
  /*app.get('/admin', function(req, res){
    res.redirect('/admin/');
  });
  app.get('/admin/', Auth.isAuthenticatedAdmin);
  app.post('/admin/users/new', Auth.isAuthenticatedAdmin, admin.postUser);
  app.post('/admin/movies/new', Auth.isAuthenticatedAdmin, admin.postMovie);
  app.get('/admin/movies/remove', Auth.isAuthenticatedAdmin, admin.removeMovie);
  //app.get('/admin/users', admin.users);
  //app.post('/admin/movie', admin.post);
  */
  app.get('/*', function(req, res, next){
    console.log(req.user);
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