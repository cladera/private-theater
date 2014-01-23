/**
 * Created by cgcladera on 23/01/14.
 */

var mongoose  = require('mongoose')
  , User      = mongoose.model('User');

exports.all = function(req, res){
  User.find(function(err, users){
    if(err){
      res.send(500);
    }else {
      var us = [];
      for (var index in users){
        us.push(users[index].serialize());
      }
      res.json(us);
    }
  });
};

exports.get = function(req, res){
  User.findOne({email: req.params.userId}, function(err, user){
    if(err){
      res.send(404);
    }else {
      res.json(user.serialize());
    }
  });
};

exports.me = function(req, res){
  res.json(req.user.serialize());
}