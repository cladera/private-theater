/**
 * Created by cgcladera on 24/01/14.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CaptionSchema = new Schema({
  lang: String,
  label: String,
  url: String
});

var MediaSchema = new Schema({
  quality: String,
  width: String,
  height: String,
  src: String,
  captions: [CaptionSchema]
});

mongoose.model('Media', MediaSchema);