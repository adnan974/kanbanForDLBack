const mongoose = require('mongoose');

const columnSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
  },
  associatedDashboard:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dashboard",
    required:true
  },
}, {
  timestamps: true,
  collection: 'column'
})

module.exports = mongoose.model('Column', columnSchema);