var mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  imageType: String,
  image: {type: Buffer, select: false}
});
UserSchema.set('toJSON',{
  transform: function(doc,ret,options){
    var dto = {
      email: ret.email,
      name: ret.name,
      _id: ret._id
    }
  }
})
const User = mongoose.model('User', UserSchema);

module.exports = exports = User