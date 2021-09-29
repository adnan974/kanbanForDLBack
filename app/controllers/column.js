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
    console.log(columnId)
    const column = await Column.findOne({ _id: columnId });

    console.log(column);

    
    column.remove()
    .then((result) => {
        res.status(200).json({ success: true });
    }).catch(error => {
        console.log(error)
        res.status(422).json({ error });
    })

    // Column.findOneAndDelete({_id:columnId}).exec()
    // .then((result) => {
    //     console.log(result);
    //     res.status(200).json({ success: true });
    // }).catch(error => {
    //     console.log(error)
    //     res.status(422).json({ error });
    // })
}