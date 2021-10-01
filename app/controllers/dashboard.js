const Dashboard = require("../models/Dashboard");


/**
 * This function comment is parsed by doctrine
 * @route GET /dashboards
 * @group Dashboards - Operations about dashboards
 * @returns {object} 200 - Get all dashboards info
 * @returns {Error}  default - Unexpected error
*/
exports.getAllDashboards = (req, res) => {


  Dashboard.find().then(data => {
    res.status(200).json({ data })
  }).catch(error => {
    res.status(422).json({ error });
  })
}

/**
 * This function comment is parsed by doctrine
 * @route GET /dashboards/{id}
 * @group Dashboards - Operations about dashboards
 * @param {string} id.path.required - dashboard id
 * @returns {object} 200 - Get dashboard info
 * @returns {Error}  default - Unexpected error
*/
exports.getDashboard = (req, res) => {

  const dashboardId = req.params.id;

  Dashboard.findById(dashboardId).then(data => {
    res.status(200).json({ data })
  }).catch(error => {
    res.status(422).json({ error });
  })
}


/**
 * This function comment is parsed by doctrine
 * @route PATCH /dashboards/{id}
 * @group Dashboards - Operations about dashboards
 * @param {string} id.path.required - dashboard id
 * @param {UpdateDashboardDTO.model} dashboard.body.required - the updated dashboard
 * @returns {object} 200 - Succes: ticket updated
 * @returns {Error}  default - Unexpected error
 */
 exports.updateDashboard = (req, res, next) => {
  const dashboardId = req.params.id;

  const {
    title,
    description,
    labels
  } = req.body;

  Dashboard.findByIdAndUpdate(dashboardId, {
    title,
    description,
    labels
  }, (error) => {
    if (error) {
      res.status(422).json({ error });
    } else {
      res.status(200).json("sucess");
    }
  })
}


/**
* This function comment is parsed by doctrine
* @route DELETE /dashboards/{id}
* @group Dashboards - Operations about dashboards
* @param {string} id.path.required - dashboard id
* @returns {object} 200 - Succes: dashboard deleted
* @returns {Error}  default - Unexpected error
*/
exports.deleteDashboard = (req, res) => {

  const dashboardId = req.params.id;

  Dashboard.findByIdAndDelete(dashboardId).then(() => {
    res.status(200).json({ success: true });
  }).catch(error => {
    res.status(422).json({ error });
  })
}


