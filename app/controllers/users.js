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

exports.add = function(req, res){
  if(req.body.email === undefined || req.body.password === undefined){
    return res.send(400);
  }
  req.body.role = req.body.role || 'USER';

  var user = new User();
  user.email = req.body.email;
  //TODO: Parse email
  User.count({
    email: req.body.email
  }, function(err, count){
    if(count === 0){
      User.signUp(req.body.email, req.body.password, req.body.role, function(err, user){
        if(err) {
          return res.send(500);
        }
        res.json(user.serialize());
      });
    }else {
      return res.send(409);
    }
  });
};

exports.me = function(req, res){
  res.json(req.user.serialize());
};