const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,

  },
  date: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    default: 'Pending'
  }
});
module.exports = mongoose.model('Todo', todoSchema);