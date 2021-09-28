const Notification = require("../models/Notification");

/**
 * This function comment is parsed by doctrine
 * @route GET /notifications
 * @group Notifications - Operations about notifications
 * @returns {object} 200 - display  all notifications data
 * @returns {Error}  default - Unexpected error
 */
 exports.getAllNotifications = (req, res) => {

    Notification.find()
    .then(notifs=>{
        res.json(notifs)
    })
    .catch(err=>{
        res.status(400).json(err);
    })

}


/**
 * This function comment is parsed by doctrine
 * @route POST /notifications
 * @group Notifications - Operations about notifications
 * @param {CreateNotificationDTO.model} notification.body.required - the new notification
 * @returns {object} 200 - Succes: notification created
 * @returns {Error}  default - Unexpected error
 */
 exports.createNotification =   (req, res) => {

    // TODO validation à faire
    const {
        title,
        description,
        status,
        associatedUser
      } = req.body;

    const notification = new Notification({
        title:title,
        description:description,
        status:status,
        associatedUser:associatedUser
    })


    notification.save()
        .then(() => {
            return res.status(200).json({succes:"true"});
        })
        .catch(error => {
            res.status(422).json({ error });
        })
}

/**
 * This function comment is parsed by doctrine
 * @route PATCH /notifications/{id}
 * @group Notifications - Operations about notifications
 * @param {string} id.path.required - notification id
 * @param {UpdateNotificationDTO.model} notification.body.required - the updated notification
 * @returns {object} 200 - Succes: notification updated
 * @returns {Error}  default - Unexpected error
 */
 exports.updateNotification =   (req, res) => {
    const {
        title,
        description,
        status,
      } = req.body;

    const notificationId = req.params.id;

    const propertiesToUpdate = {};
    
    if(title) propertiesToUpdate.title = title;
    if(description) propertiesToUpdate.description = description;
    if(status) propertiesToUpdate.status = status;

    Notification.findByIdAndUpdate(notificationId,{
        ...propertiesToUpdate
    })
        .then(() => {
            return res.status(200).json({succes:"true"});
        })
        .catch(error => {
            res.status(422).json({ error });
        })
}

/**
 * This function comment is parsed by doctrine
 * @route DELETE /notifications/{id}
 * @group Notifications - Operations about notifications
 * @param {string} id.path.required - notification id
 * @returns {object} 200 - Succes: notification soft deleted
 * @returns {Error}  default - Unexpected error
 */
exports.softDeleteNotification =   (req, res) => {

    const notificationId = req.params.id;

    Notification.findByIdAndUpdate(notificationId,{$set:{status:"Deleted"}})
        .then((notification) => {
            return res.status(200).json(notification);
        })
        .catch(error => {
            res.status(422).json({ error });
        })
}