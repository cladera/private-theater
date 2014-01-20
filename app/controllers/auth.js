/**
 * Created by cgcladera on 18/01/14.
 */

var passport = require('passport');

module.exports.login = function(req, res, next) {
  passport.authenticate('local', function(err, user) {

    if(err)     { return next(err); }
    if(!user)   { return res.send(400); }


    req.logIn(user, function(err) {
      if(err) {
        return next(err);
      }

      if(req.body.rememberme) req.session.cookie.maxAge = 1000 * 60 * 60 * 24 * 7;
      res.json(200,{
        _id: user._id,
        email: user.email,
        role: user.role
      });
    });
  })(req, res, next);
};

module.exports.logout = function(req, res){
  req.logout();
  res.redirect('/');
};