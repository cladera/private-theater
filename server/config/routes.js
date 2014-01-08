module.exports = function(app){


  var theater = require('../app/controllers/theater');

  /* Theater routes */
  app.get('/theater', function(req, res){
    res.redirect('/theater/');
  })
  app.get('/theater/data/movies.json', theater.movies);
  app.get('/theater/data/:movieId.json', theater.movie);

};
