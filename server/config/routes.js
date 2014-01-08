module.exports = function(app){


  var theater = require('../app/controllers/theater')
    , admin   = require('../app/controllers/admin');

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
