const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
  duty: {
    type: String,
    require: true
  },
  done: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: () => Date.now() + 7 * 24 * 60 * 60 * 1000
  }
});

module.exports = mongoose.model('Todo', TodoSchema);