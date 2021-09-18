const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true, 
  },
  associatedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required:true
  },
}, {
  timestamps: true,
  collection: 'notifications'
})

module.exports = mongoose.model('Notification', notificationSchema);