const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    labels: {
        type:[String]
    },
    columnList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Column",
        }
    ],
    associatedUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
}, {
    timestamps: true,
    collection: 'dashboard'
})

module.exports = mongoose.model('Dashboard', dashboardSchema);