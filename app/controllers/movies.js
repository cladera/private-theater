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
      return res.send(500);
    }
    res.json(movies);
  });
};
exports.get = function(req, res){
  var key = 'id';
  if(req.query.byId && req.query.byId === 'true'){
    key = '_id';
  }
  var query = {};
  query[key] = req.params.movieId;
  console.log(query);
  Movie.findOne(query, function(err, movie){
    if(err){
      return res.send(404);
    }
    if(!movie){
      return res.send(404);
    }
    var m = movie.toObject();
    movie.findMedias(function(err, medias){
      m.medias = medias;
      res.json(m);
    });
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

exports.notificateError = function(req, res){
  Media.findOne({_id: req.body.media}, function(err, media){
    if(err || media === undefined){
      return res.send(400);
    }
    req.body.user = req.user._id;
    var notification = new ErrorNotification(req.body);
    notification.save(function(err, n){
      if(err){
        return res.send(500);
      }
      res.json(n);
    });
  });
};

exports.getMediaErrors = function(req, res){
  ErrorNotification.getAll(function(err, errors){
    if(err){
      return res.send(500);
    }
    res.json(errors);
  });
};