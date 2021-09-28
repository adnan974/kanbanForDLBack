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

    console.log("on est ici")

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const dashboardId = req.params.id;

    let dashboard = await Dashboard.findById(dashboardId);


    const column = new Column({
        title: req.body.title,
        associatedDashboard: dashboardId
    })


    column.save().then(response => {

        console.log(response); 

        dashboard.columnList.push(column);


        dashboard.save()
        .then(dashboard=>{

            console.log(dashboard);

            res.status(200).json({
                success: true,
                result: response
            })
        })
        .catch(err => {
            res.status(500).json({
                errors: [{ error: err +"123"}]
            });
        });

        
    }).catch(err => {
        res.status(500).json({
            errors: [{ error: err }]
        });
    });



}