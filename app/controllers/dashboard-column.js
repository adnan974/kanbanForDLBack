const { validationResult } = require("express-validator");
const Column = require("../models/Column");
const Dashboard = require("../models/Dashboard");

/**
 * This function comment is parsed by doctrine
 * @route POST /dashboards/{id}/columns
 * @group Dashboard and Columns - Operations about dashboards and columns
 * @param {string} id.path.required - dashboard id
 * @param {CreateColumnDTO.model} column.body.required - the new column
 * @produces application/json
 * @consumes application/json
 * @returns {object} 201 - The column is created in the dashboard
 * @returns {Error}  default - Unexpected error
 */

exports.addColumnToDashboard = async (req, res) => {
    const errors = validationResult(req)
    const dashboardId = req.params.id;
    const dashboard = await Dashboard.findById(dashboardId);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const column = new Column({
        title: req.body.title,
        columnList: [],
        associatedDashboard: dashboardId
    })

    column.save().then(response => {
        dashboard.columnList.push(column);

        dashboard.save()
            .then( dashboard => {

            res.status(201).json({
                success: true,
                result: response
            })
        })
        .catch(err => {
            res.status(500).json({
                errors: [{ error: err}]
            });
        });

        
    }).catch(err => {
        res.status(500).json({
            errors: [{ error: err }]
        });
    });



}

exports.getColumn = (req, res) => {
    dashboardId = req.params.id;

    Column.find({ associatedDashboard: dashboardId }).then(column => {
        res.status(201).json({
            success: true,
            result: column
        })
    }).catch(err => {
        res.status(500).json({
            errors: [{ error: err }]
        });
    })
}


