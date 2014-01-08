/**
 * Created by cgcladera on 07/01/14.
 */

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
var MovieSchema = new Schema({
  name:String,
  year: Number,
  imageUrl: String,
  genders: Array,
  imdbUrl: String,
  filmaffinityUrl: String,
  urls: [new Schema({
    fullHD: String,
    HD: String,
    SD: String
  }, {_id : false})]
});

MovieSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Movie', MovieSchema);