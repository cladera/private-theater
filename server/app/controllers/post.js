/**
 * Created by cgcladera on 07/01/14.
 */
var mongoose = require('mongoose'),
  Movie = mongoose.model('Movie');

exports.index = function(req, res){
  var movie = new Movie({
    year: req.query.year,
    name: req.query.name
  });
  movie.save(function(err){
    if(err){
      res.send(00);
    }else {
      res.send(200);
    }
  });
};