module.exports = function(app){

  var post = require('../app/controllers/post');
  app.get('/post', post.index);

};
