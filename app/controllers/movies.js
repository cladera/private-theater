/**
 * Created by cgcladera on 21/01/14.
 */
var mongoose        = require('mongoose'),
  Movie             = mongoose.model('Movie'),
  Media             = mongoose.model('Media'),
  ErrorNotification = mongoose.model('ErrorNotification');

exports.query = function(req, res){
  Movie.find(function(err, movies){
    if(err){
      res.send(404);
    }else {
      res.json(movies);
    }
  });
};
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
};
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
      res.send(200, m);
    }
  });
};
exports.remove = function(req, res){
  Movie.findOne({id: req.params.movieId}, function(err, movie){
    if(err){
      return res.send(404);
    }
    Media.remove({movie: movie._id}, function(err){
      if(err){
        return res.send(500);
      }
      movie.remove(function(err){
        if(err){
          res.send(500);
        }else {
          res.send(200);
        }
      });
    });
  });
};

exports.update = function(req, res){
  if(typeof req.body.genders === 'string'){
    req.body.genders = req.body.genders.split(',');
  }
  var data = {
    id: req.body.id.toLowerCase(),
    name: req.body.name,
    year: req.body.year,
    imageUrl: req.body.imageUrl,
    genders: req.body.genders,
    imdbUrl: req.body.imdbUrl,
    filmaffinityUrl: req.body.filmaffinityUrl
  };
  Movie.update({_id: req.body._id}, data,{},function(err){
    if(err){
      return res.send(500);
    }
    res.send(200);
  });
};

exports.addMedia = function(req, res){
  Movie.findOne({id: req.params.movieId}, function(err, movie){
    if(err){
      return res.send(400);
    }
    req.body.movie = movie._id;
    req.body.creator = req.user._id;
    var media = new Media(req.body);
    media.save(function(err, m){
      if(err){
        return res.send(500);
      }
      res.json(200, m);
    });
  });
};

exports.deleteMedia = function(req, res) {
  Movie.findOne({id: req.params.movieId}, function(err, movie){
    if(err){
      return res.send(400);
    }
    Media.findOne({_id: req.params.mediaId}, function(err, media){
      if(err){
        return res.send(400);
      }
      if(String(movie._id) !== String(media.movie)){
        return res.send(401);
      }
      media.remove(function(err){
        if(err){
          return res.send(500);
        }
        res.send(200);
      });
    });
  });
};

exports.notificateError = function(req, res){
  Media.findOne({_id: req.params.mediaId}, function(err, media){
    if(err || media === undefined){
      return res.send(400);
    }
    req.body.user = req.user._id;
    req.body.media = req.media._id;
    var notification = new ErrorNotification(req.body);
    notification.save(function(err, n){
      if(err){
        return res.send(500);
      }
      res.json(n);
    });
  });
};