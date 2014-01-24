/**
 * Created by cgcladera on 24/01/14.
 */
var mongoose    = require('mongoose'),
  Schema        = mongoose.Schema,
  MovieSchema   = require('./movie'),
  UserSchema    = require('./user'),
  LocaleSchema  = require('./locale');


var CaptionSchema = new Schema({
  lang: String,
  label: String,
  url: String,
  locale: LocaleSchema
});

var MediaSchema = new Schema({
  originalLocale: LocaleSchema,
  quality: String,
  width: String,
  height: String,
  src: String,
  captions: [CaptionSchema],
  movie: MovieSchema,
  creator: UserSchema,
  createdAt: { type: Date, default: Date.now }
});

mongoose.model('Media', MediaSchema);