const Ticket = require("../models/Ticket");

/**
 * This function comment is parsed by doctrine
 * @route GET /dashboards/{id}/tickets
 * @group Dashboards and Tickets - Operations about  dashboards and tickets
 * @param {string} id.path.required - dashboard id
 * @returns {object} 200 - An array of tickets of dashboard info
 * @returns {Error}  default - Unexpected error
 */
exports.getDashboardTickets = (req, res) => {
    const dashboardId = req.params.id;

    Ticket.find({ associatedDashboard: dashboardId })
        .then(tickets => {
            res.status(200).json({ tickets })
        })
        .catch(err => {
            res.status(500).json({
                errors: [{ error: err }]
            });
        })

}


