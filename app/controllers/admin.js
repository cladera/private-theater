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
      res.send(500);
    }else {
      console.log('Movie created successfully', m);
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
          }else {
            res.redirect('/admin/');
          }
        });
      } else {
        res.send(409);
      }
    });
  }

};
exports.removeMovie = function(req, res){
  Movie.remove({ name: req.query.name}, function (err){
    if(err){
      res.send(500);
    }else {
      res.redirect('/admin/#/new');
    }
  });
};