const Notification = require("../models/Notification");

/**
 * This function comment is parsed by doctrine
 * @route DELETE /notifications/{id}
 * @group Notifications - Operations about notifications
 * @param {string} id.path.required - notification id
 * @returns {object} 200 - Succes: notification deleted
 * @returns {Error}  default - Unexpected error
 */
exports.deleteNotification = (req, res) => {

    const notificationId = req.params.id;

    Notification.findByIdAndDelete(notificationId)
        .then(() => {
            return res.status(200).json({ success: true });
        })
        .catch(error => {
            res.status(422).json({ error });
        })
}