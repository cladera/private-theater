/**
 * Created by cgcladera on 08/01/14.
 */
var mongoose = require('mongoose'),
  Movie = mongoose.model('Movie');

exports.movies = function(req, res){
  Movie.find(function(err, movies){
    if(err){
      res.send(500);
    }else {
      res.json(movies);
    }
  });
}
exports.movie = function(req, res){
  Movie.findOne({id: req.params.movieId}, function(err, movie){
    res.json(movie);
  });
}