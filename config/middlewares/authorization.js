/**
 * Created by cgcladera on 10/01/14.
 */
var User = require('../../app/models/user');

exports.isAuthenticatedUser = function (req, res, next){
  if(req.isAuthenticated()){
    next();
  }else {
    res.send(401);
  }
};
exports.isAuthenticatedAdmin = function(req, res, next){
  if(req.isAuthenticated()){
    if(req.user.role === 'ADMIN'){
      next();
    }else {
      res.send(401);
    }
  }else {
    res.send(401);
  }
};
exports.userExist = function(req, res, next) {
  User.count({
    email: req.body.email
  }, function (err, count) {
    if (count === 0) {
      next();
    } else {
      res.send(400);
    }
  });
};