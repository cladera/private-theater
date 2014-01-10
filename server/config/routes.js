module.exports = function(app, passport){


  var theater = require('../app/controllers/theater')
    , admin   = require('../app/controllers/admin')
    , path = require('path');

  /* Login */
  app.get('/', function(req, res){
    res.render('login',{
      error: req.flash('error')
    });
  });
  app.post('/login',
    passport.authenticate('local', { successRedirect: '/login',
      failureRedirect: '/',
      failureFlash: true })
  );

  app.get('/login', function(req, res){
    var redirect_to = req.session.redirect_to || '/theater/';
    delete req.session.redirect_to;
    res.redirect(redirect_to);
  });

  /* Theater routes */
  app.get('/theater', function(req, res){
    res.redirect('/theater/');
  });
  app.get('/theater/', function(req, res, next){
    if(req.isAuthenticated()){
      next();
    }else {
      res.redirect('/');
    }
  });
  app.get('/theater/data/movies.json', theater.movies);
  app.get('/theater/data/:movieId.json', theater.movie);

  /* Admin routes */
  app.get('/admin', function(req, res, next){
    res.redirect('/admin/');
  });
  app.get('/admin/', function(req, res, next){
    console.log(req.user);
    if(req.isAuthenticated()){
      console.log(req.user);
      if(req.user.role === 'ADMIN'){
        next();
      }else {
        res.send(401);
      }
    }else {
      req.session.redirect_to = '/admin/';
      res.redirect('/');
    }


  });
  //app.get('/admin/users', admin.users);
  //app.post('/admin/movie', admin.post);

};
