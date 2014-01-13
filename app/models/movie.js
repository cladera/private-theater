
/**
 * Created by cgcladera on 07/01/14.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MovieSchema = new Schema({
  id: String,
  name:String,
  year: Number,
  imageUrl: String,
  genders: Array,
  imdbUrl: String,
  filmaffinityUrl: String,
  HD: String,
  SD: String
});

MovieSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Movie', MovieSchema);