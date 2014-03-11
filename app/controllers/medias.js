/**
 * Created by cgcladera on 11/03/14.
 */
var mongoose      = require('mongoose'),
  Media           = mongoose.model('Media');

exports.get = function (req, res){
  Media.findOne({_id: req.params.movieId}, function(err, media){
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