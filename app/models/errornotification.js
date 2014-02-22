/**
 * Created by cgcladera on 03/02/14.
 */
var mongoose    = require('mongoose'),
  Schema        = mongoose.Schema,
  Movie         = require('./movie'),
  Media         = require('./media');

var ErrorNotificationSchema = new Schema({
  media: Schema.ObjectId,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  status: {type: String, default: 'open'},
  user: Schema.ObjectId,
  subject: String,
  body: String
});
ErrorNotificationSchema.statics.getAll = function(handler){
  var ErrorNotification = this;
  ErrorNotification.find(function(err, results){
    if(err){
      handler(err);
    }else {
      handler(null, results);
    }
  });

};
mongoose.model('ErrorNotification', ErrorNotificationSchema);