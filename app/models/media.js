/**
 * Created by cgcladera on 24/01/14.
 */
var mongoose    = require('mongoose'),
  Schema        = mongoose.Schema,
  LocaleSchema  = require('./locale');


var CaptionSchema = new Schema({
  label: String,
  src: String,
  locale: LocaleSchema
});

var MediaSchema = new Schema({
  audio: LocaleSchema,
  quality: String,
  width: String,
  height: String,
  src: String,
  captions: [CaptionSchema],
  movie: Schema.ObjectId,
  creator: Schema.ObjectId,
  createdAt: { type: Date, default: Date.now }
});

mongoose.model('Media', MediaSchema);