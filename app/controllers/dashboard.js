const Dashboard = require("../models/Dashboard");

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
  
exports.getDashboard = (req, res) => {
  
  const dashboardId = req.params.id;

  Dashboard.findById(dashboardId).then(data => {
    res.status(200).json({ data })
  }).catch(error => {
    res.status(422).json({ error });
  })
}