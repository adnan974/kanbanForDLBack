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
        type: [String]
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

dashboardSchema.pre('remove', function (next) {
    var dashboard = this;

    this.model('Ticket').deleteMany({ associatedDashboard: dashboard._id }, (err, result) => {
        if (err) return next(new Error("Internal error"));

        this.model('Column').deleteMany({ associatedDashboard: dashboard._id }, (err, result) => {
            if (err) return next(new Error("Internal error"));
            next();
        })
    })

});

module.exports = mongoose.model('Dashboard', dashboardSchema);