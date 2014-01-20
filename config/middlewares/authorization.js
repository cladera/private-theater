/**
 * Created by cgcladera on 10/01/14.
 */
var User = require('../../app/models/user');

exports.isAuthenticatedUser = function (req, res, next){
  if(req.isAuthenticated()){
    next();
  }
};
exports.isAuthenticatedAdmin = function(req, res, next){
  console.log('Admin connection attempt');
  if(req.isAuthenticated()){
    console.log('User authenticated');
    if(req.user.role === 'ADMIN'){
      console.log('Identified as Admin user');
      next();
    }else {
      res.send(401);
    }
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