module.exports = function(app){
  var movies  = require('../app/controllers/movies')
    , medias  = require('../app/controllers/medias')
    , reports = require('../app/controllers/reports')
    , users   = require('../app/controllers/users')
    , auth    = require('../app/controllers/auth')
    , Auth    = require('./middlewares/authorization');

  app.post('/login', auth.login);
  app.get('/logout', auth.logout);

  /* Users routes */
  app.get('/users/all', Auth.isAuthenticatedAdmin, users.all);
  app.get('/users/me', Auth.isAuthenticatedUser, users.me);
  app.post('/users/new', Auth.isAuthenticatedAdmin, users.add);
  app.get('/users/:userId', Auth.isAuthenticatedAdmin, users.get);
  app.put('/users/:userId', Auth.isAuthenticatedUser, users.update);


  /* Client app routes */
  app.get('/index.html', function(req,res){
    res.redirect('/');
  });

  /* Movies API */
  app.get('/movies/query', Auth.isAuthenticatedUser, movies.query);
  app.get('/movies/:movieId', Auth.isAuthenticatedUser, movies.get);
  app.delete('/movies/:movieId', Auth.isAuthenticatedAdmin, movies.remove);
  app.post('/movies/new', Auth.isAuthenticatedAdmin, movies.add);
  app.put('/movies/:movieId', Auth.isAuthenticatedAdmin, movies.update);

  /* Medias API */
  app.post('/medias/new', Auth.isAuthenticatedAdmin, medias.new);
  app.get('/medias/all', Auth.isAuthenticatedUser, medias.all);
  app.get('/medias/:mediaId', Auth.isAuthenticatedUser, medias.get);
  app.put('/medias/:mediaId', Auth.isAuthenticatedAdmin, medias.update);
  app.delete('/medias/:mediaId', Auth.isAuthenticatedAdmin, medias.delete);

  /* Error Notifications API */
  app.post('/reports/new', Auth.isAuthenticatedUser, reports.new);
  app.get('/reports/all', Auth.isAuthenticatedAdmin, reports.all);
  app.get('/reports/:reportId', Auth.isAuthenticatedUser, reports.get);
  app.put('/reports/:reportId', Auth.isAuthenticatedAdmin, reports.update);
  app.delete('/reports/:reportId', Auth.isAuthenticatedAdmin, reports.delete);


  app.get('/*', function(req, res, next){
    if(req.user){
      res.cookie('user', JSON.stringify(req.user.toObject()));
    }else {
      var user = {
        _id: 0,
        email: '',
        role: 'PUBLIC'
      };
      res.cookie('user', JSON.stringify({
        _id: user._id,
        email: user.email,
        role: user.role
      }));
    }
    next();
  });
};