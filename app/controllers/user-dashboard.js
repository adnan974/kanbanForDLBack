const { validationResult } = require("express-validator");
const Dashboard = require("../models/Dashboard");

/**
 * This function comment is parsed by doctrine
 * @route GET /users/{id}/dashboards
 * @group Users and Dashboards - Operations about users and dashboards
 * @param {string} id.path.required - user id
 * @returns {object} 200 - An array of dashboards info
 * @returns {Error}  default - Unexpected error
 */
exports.getUserDashboard = (req, res) => {

  const userId = req.params.id;

  return Dashboard.find({ associatedUser: userId })
    .populate('columnList')
    .exec((err, dashboards) => {
      if (err) return res.status(422).json({ err });

      res.status(200).json({ dashboards })
    })

}

/**
 * This function comment is parsed by doctrine
 * @route POST /users/{id}/dashboards
 * @group Users and Dashboards - Operations about users and dashboards
 * @param {string} id.path.required - user id
 * @param {CreateDashboardDTO.model} dashboard.body.required - the new dashboard
 * @produces application/json
 * @consumes application/json
 * @returns {object} 201 - The dashboard is created
 * @returns {Error}  default - Unexpected error
 */
exports.postUserDashboard = (req, res) => {

  const errors = validationResult(req)


  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  const userId = req.params.id;

  const {
    title,
    description,
    labels
  } = req.body;



  const dashboard = new Dashboard({
    title,
    description,
    labels,
    associatedUser: userId
  })

  dashboard.save().then(response => {
    res.status(200).json({
      success: true,
      result: response
    })
  }).catch(err => {
    res.status(500).json({
      errors: [{ error: err }]
    });
  });
}
