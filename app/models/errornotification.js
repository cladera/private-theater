/**
 * Created by cgcladera on 03/02/14.
 */
var mongoose    = require('mongoose'),
  Schema        = mongoose.Schema;

var ErrorNotificationSchema = new Schema({
  media: Schema.ObjectId,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now},
  status: {type: String, default: 'open'},
  user: Schema.ObjectId,
  subject: String,
  body: String
});

mongoose.model('ErrorNotification', ErrorNotificationSchema);