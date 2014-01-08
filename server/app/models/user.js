/**
 * Created by cgcladera on 08/01/14.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var UserSchema = new Schema({
  id: String,
  email: String,
  name:String,
  password: String
});
mongoose.model('User', UserSchema);