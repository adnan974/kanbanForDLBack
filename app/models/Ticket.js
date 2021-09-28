const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  
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
  ticketStatus: {
    type: String,
    required: true
  },
  dateInProgressStatus:{
    type:Date,
  },
  associatedDashboard:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dashboard",
    required:true
  },
  associatedColumn:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Column",
    required:true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required:true
  },
}, {
  timestamps: true,
  collection: 'tickets'
})

module.exports = mongoose.model('Ticket', ticketSchema);