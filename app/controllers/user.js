/**
 * Created by cgcladera on 08/01/14.
 */
exports.session = function(req, res){
  res.json({
    _id: req.user._id,
    email: req.user.email,
    role: req.user.role
  });
};

