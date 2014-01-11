/**
 * Created by cgcladera on 08/01/14.
 */
var mongoose = require('mongoose'),
  Movie = mongoose.model('Movie'),
  User = mongoose.model('User');


exports.movies = function(req, res){

  Movie.find(function(err, movies){
    if(err){
      res.send(500);
    }else {
      res.json(movies);
    }
  });
};

exports.postMovie = function(req, res){
  var movie = new Movie(req.body);
  movie.save(function(err){
    if(err){
      res.send(500);
    }else {
      res.redirect('/admin/');
    }
  });
};

exports.postUser = function(req, res){
  var email     = req.body.email,
      password  = req.body.password,
      role      = req.body.role || 'USER';
  if(email === undefined || password === undefined){
    res.send(400);
  }else {
    User.count({
      email: email
    }, function (err, count) {
      if (count === 0) {
        User.signUp(email, password, role, function(err){
          if(err){
            res.send(500);
          }
          res.redirect('/admin/');
        });
      } else {
        res.send(409);
      }
    });
  }

};