/**
 * Created by cgcladera on 08/01/14.
 */
var mongoose    = require('mongoose'),
  Schema        = mongoose.Schema,
  LocaleSchema  = require('./locale'),
  hash = require('../util/hash');
var UserSchema = new Schema({
  provider: {type:String, default: 'local'},
  email: String,
  displayName: String,
  name: {
    familyName: String,
    givenName: String,
    middleName: String
  },
  hash: String,
  salt: String,
  role: String,
  locale: LocaleSchema,
  createdAt: { type: Date, default: Date.now }
});

UserSchema.statics.signUp = function(email, password, role, done){
  if(done === undefined){
    done = role;
    role = 'USER';
  }
  var User = this;
  hash(password, function(err, salt,hash){
    if(err){
      throw err;
    }
    User.create({
      email : email,
      salt  : salt,
      hash  : hash,
      role  : role
    }, function(err, user){
      if(err){
        throw err;
      }
      done(null, user);

    });
  });
};
UserSchema.statics.isValidUserPassword = function(email, password, done) {
  this.findOne({email : email}, function(err, user){
    // if(err) throw err;
    if(err) return done(err);
    if(!user) return done(null, false, { message : 'Incorrect email.' });
    hash(password, user.salt, function(err, hash){
      if(err) return done(err);
      if(hash == user.hash) return done(null, user);
      done(null, false, {
        message : 'Incorrect password'
      });
    });
  });
};
if (!UserSchema.options.toObject) UserSchema.options.toObject = {};
UserSchema.options.toObject.transform = function(doc, ret){
  delete ret.salt;
  delete ret.hash;
};
/**
 * @deprecated Use built-in toObject method
 * @returns {*|Binary|Array|Object}
 */
UserSchema.methods.serialize = function(){
  return this.toObject();
}

mongoose.model('User', UserSchema);