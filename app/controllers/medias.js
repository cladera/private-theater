/**
 * Created by cgcladera on 11/03/14.
 */
var mongoose      = require('mongoose'),
  Media           = mongoose.model('Media'),
  Movie           = mongoose.model('Movie');

exports.all = function (req, res){
  if(req.query.movieId){
    Movie.findOne({_id: req.query.movieId},function(err, movie){
      if(err){
        return res.send(500);
      }
      if(!movie){
        return res.send(404);
      }
      Media.find({movie : movie._id}, function(err, medias){
        if(err){
          return res.send(500);
        }
        res.json(medias);
      });
    });
  }else {
    Media.find(function(err, medias){
      if(err){
        return res.send(500);
      }
      res.json(medias);
    });
  }

};

exports.get = function (req, res){
  Media.findOne({_id: req.params.mediaId}, function(err, media){
    if(err){
      return res.send(500);
    }
    if(!media){
      return res.send(404);
    }
    res.json(media);
  });
};
exports.new = function(req, res){
  req.body.creator = req.user._id;
  var media = new Media(req.body);
  media.save(function(err, m){
    if(err){
      return res.send(500);
    }
    res.json(m);
  });
};
exports.delete = function(req, res){
  Media.findOne({_id: req.params.mediaId}, function(err, media){
    if(err){
      return res.send(500);
    }
    if(!media){
      return res.send(404);
    }
    media.remove(function(err){
      if(err){
        return res.send(500);
      }
      res.send(200);
    });
  });
};