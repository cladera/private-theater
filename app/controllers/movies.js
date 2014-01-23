/**
 * Created by cgcladera on 21/01/14.
 */
var mongoose = require('mongoose'),
  Movie = mongoose.model('Movie');

exports.query = function(req, res){
  Movie.find(function(err, movies){
    if(err){
      res.send(404);
    }else {
      res.json(movies);
    }
  });
}
exports.get = function(req, res){
  Movie.findOne({id: req.params.movieId}, function(err, movie){
    if(err){
      res.send(404);
    }else {
      res.json(movie);
    }
  });
}
exports.add = function(req, res){
  var data = {
    id: req.body.id.toLowerCase(),
    name: req.body.name,
    year: req.body.year,
    imageUrl: req.body.imageUrl,
    genders: req.body.genders.split(','),
    imdbUrl: req.body.imdbUrl,
    filmaffinityUrl: req.body.filmaffinityUrl,
    HD: req.body.HD,
    SD: req.body.SD
  };
  var movie = new Movie(data);
  if(req.body.ENCC){
    movie.captions.push({
      lang: 'en',
      label: 'English',
      url: req.body.ENCC
    });
  }
  if(req.body.ESCC){
    movie.captions.push({
      lang: 'es',
      label: 'Spanish',
      url: req.body.ESCC
    });
  }

  movie.save(function(err, m){
    if(err){
      res.send(500, err);
    }else {
      res.json(200,m);
    }
  });
}