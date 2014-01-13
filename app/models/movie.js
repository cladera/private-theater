
/**
 * Created by cgcladera on 07/01/14.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CaptionSchema = new Schema({
  lang: String,
  label: String,
  url: String
});

var MovieSchema = new Schema({
  id: String,
  name:String,
  year: Number,
  imageUrl: String,
  genders: Array,
  imdbUrl: String,
  filmaffinityUrl: String,
  HD: String,
  SD: String,
  captions: [CaptionSchema]
});

MovieSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Movie', MovieSchema);