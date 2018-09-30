var mongoose = require('mongoose');

// User model
// email property - require and trim - set type and min length of 1
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  }
});

module.exports = {User};

// var userEmail = new User({
//   email: ' abc@123.com '
// });
//
// userEmail.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save user email', e);
// });
