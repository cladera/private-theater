
/**
 * Created by cgcladera on 07/01/14.
 */
var mongoose    = require('mongoose'),
  LocaleSchema  = require('./locale'),
  Schema        = mongoose.Schema;

var MovieSchema = new Schema({
  id: String,
  name:String,
  year: Number,
  imageUrl: String,
  genders: Array,
  imdbUrl: String,
  filmaffinityUrl: String,
  createdAt: { type: Date, default: Date.now },
  locale: LocaleSchema
});

MovieSchema.methods.findMedias = function(callback){
  return this.db.model('Media').find({movie: this._id}, callback);
};

//TODO: find out a better way to serialize movie
MovieSchema.methods.serialize = function(){
  return {
    id: this.id,
    _id: this._id,
    name: this.name,
    year: this.year,
    genders: this.genders,
    imdbUrl: this.imdbUrl,
    filmaffinityUrl: this.filmaffinityUrl,
    createdAt: this.createdAt,
    locale: this.locale
  };
}

mongoose.model('Movie', MovieSchema);