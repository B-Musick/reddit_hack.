let mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new mongoose.Schema({
    username: String,
    password: String
});

// - Then have to call it, adds methods to user
// - Place the following after the userSchema initiation

userSchema.plugin(passportLocalMongoose); 
module.exports = mongoose.model('User',userSchema);
