/**
 * Created by cgcladera on 21/01/14.
 */
var mongoose  = require('mongoose'),
  Movie       = mongoose.model('Movie'),
  Media       = mongoose.model('Media');

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
      var m = movie.toObject();
      movie.findMedias(function(err, medias){
        m.medias = medias;
        res.json(m);
      });
    }
  });
}
exports.add = function(req, res){
  //TODO: Check request
  var data = {
    id: req.body.id.toLowerCase(),
    name: req.body.name,
    year: req.body.year,
    imageUrl: req.body.imageUrl,
    genders: req.body.genders.split(','),
    imdbUrl: req.body.imdbUrl,
    filmaffinityUrl: req.body.filmaffinityUrl
  };
  var movie = new Movie(data);
  movie.save(function(err, m){
    if(err){
      res.send(500, err);
    }else {
      if(req.body.HD){
        var mediaHD = new Media({
          src: req.body.HD,
          creator: req.user,
          movie: m
        });
        if(req.body.ENCC){
          mediaHD.captions.push({
            locale: {
              code: 'en',
              label: 'English'
            },
            label: 'English',
            url: req.body.ENCC
          });
        }
        if(req.body.ESCC){
          mediaHD.captions.push({
            locale: {
              code: 'es',
              label: 'Spanish'
            },
            label: 'English',
            url: req.body.ESCC
          });
        }
        mediaHD.save(function(err){
          if(err){
            console.error(err);
          }
          res.send(200, m);
        });
      } else {
        res.send(200, m);
      }
    }
  });
}
exports.remove = function(req, res){
  Movie.findOne({id: req.params.movieId}, function(err, movie){
    movie.remove(function(err){
      if(err){
        res.send(500);
      }else {
        res.send(200);
      }
    });
  });
};