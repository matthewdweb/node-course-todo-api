var mongoose = require('mongoose');

// setting promises
mongoose.Promise = global.Promise;

// connecting to database
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
