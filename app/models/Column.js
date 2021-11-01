const mongoose = require('mongoose');

const columnSchema = new mongoose.Schema({  
  title: {
    type: String,
    required: true,
  },
  associatedDashboard:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dashboard",
    required: true
  },
  ticketList: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true
  }
}, {
  timestamps: true,
  collection: 'column'
})

columnSchema.pre('remove', function (next) {
  var column = this;
  this.model('Dashboard').update(
      { columnList: column._id }, 
      { $pull: { columnList: column._id } }, 
      { multi: true }, 
      next);
});

module.exports = mongoose.model('Column', columnSchema);