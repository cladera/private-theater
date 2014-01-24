/**
 * Created by cgcladera on 24/01/14.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var LocaleSchema = new Schema({
  code: String,
  label: String
});

mongoose.model('Locale', LocaleSchema);