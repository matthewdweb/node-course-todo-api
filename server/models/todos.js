var mongoose = require('mongoose');

// function model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true, // must have in order to save to database
    minLength: 1, // makes it so a space cannot be used for text
    trim: true  // trims spaces from the front and back of string
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = {Todo};

// // new instance
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// // actually saves data to database
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });
