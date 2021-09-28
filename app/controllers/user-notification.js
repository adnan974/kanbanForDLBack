const Notification = require("../models/Notification")

/**
 * This function comment is parsed by doctrine
 * @route GET /users/{id}/notifications
 * @group Users and Notifications - Operations about users and notifications
 * @param {string} id.path.required - user id
 * @returns {object} 200 - An array of tickets info
 * @returns {Error}  default - Unexpected error
 */
exports.getUserNotifications = (req, res) => {
/*
    const userId = req.params.id;

    Notification.find({ associatedUser: userId })
        .then((notifications) => {
            res.status(200).json({ notifications })
        })
        .catch((err) => {
            res.status(422).json({ error });
        })
*/
}