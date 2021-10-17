const Column = require("../models/Column");

/**
 * This function comment is parsed by doctrine
 * @route GET /columns
 * @group Column - Operations about columns
 * @returns {object} 200 - Get column infos
 * @returns {Error}  default - Unexpected error
 */
exports.getAllColumns = (req, res) => {

    Column.find().then(data => {
        res.status(200).json({ data })
    }).catch(error => {
        res.status(422).json({ error });
    })
}

/**
 * This function comment is parsed by doctrine
 * @route DELETE /columns/{id}
 * @group Column - Operations about columns
 * @param {string} id.path.required - column id
 * @returns {object} 200 - Succes: column deleted
 * @returns {Error}  default - Unexpected error
 */
exports.deleteColumn = async (req, res, next) => {

    const columnId = req.params.id;
    const column = await Column.findOne({ _id: columnId });


    
    column.remove()
    .then((result) => {
        res.status(200).json({ success: true });
    }).catch(error => {
        console.log(error)
        res.status(422).json({ error });
    })

}

exports.updateColumnList = function (req, res) {
    const ticketList = req.body;
    const columnId = req.params.id;
    console.log(ticketList, columnId);

    Column.findById(columnId)
        .then(_res => {
            res.stauts(200).json({ success: true })
        })
        .catch(error => {
            res.status(422).json({ error });
        });
}