const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  user_id: {
     type: String,
     required: true
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  labels: [String],
  ticketNumber: {
    type: Number,
    required: true
  },
  ticket_status: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  collection: 'tickets'
})

module.exports = mongoose.model('Ticket', ticketSchema);