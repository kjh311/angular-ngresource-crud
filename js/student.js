// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var studentSchema = new Schema({
  name: String,
  grade: String
});

// the schema is useless so far
// we need to create a model using it
var Student = mongoose.model('Student', studentSchema);

// make this available to our Students in our Node applications
module.exports = Student;

// var BearSchema   = new Schema({
//     name: String
// });

// module.exports = mongoose.model('Bear', BearSchema);
