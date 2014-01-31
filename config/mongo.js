/**
 * Created by cgcladera on 12/01/14.
 */

module.exports = function(mongo){
  mongo.hostname = (mongo.hostname || 'localhost');
  mongo.port = (mongo.port || 27017);
  mongo.db = (mongo.db || 'test');
  if(mongo.username && mongo.password){
    return "mongodb://" + mongo.username + ":" + mongo.password + "@" + mongo.hostname + ":" + mongo.port + "/" + mongo.db;
  }
  else{
    return "mongodb://" + mongo.hostname + ":" + mongo.port + "/" + mongo.db;
  }
};