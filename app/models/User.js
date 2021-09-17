const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  userPhoto: String,
  labels: [String],
  tickets: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
    }],
    default: undefined
  }
  /* setting: {
      "any": "any"
  },*/

}, {
  timestamps: true,
  collection: 'users'
})

module.exports = mongoose.model('User', userSchema);