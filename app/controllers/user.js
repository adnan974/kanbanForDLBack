const User = require('../models/User')
// TODO

/**
 * This function is only for dev purpose
 * @route GET /users
 * @group Users - Operations about user
 * @returns {object} 200 - An array of tickets info
 * @returns {Error}  default - Unexpected error
 */
exports.getAllusers = (req,res)=>{
    User.find().then(users=>{
        return res.status(200).json(users);
    })
}
exports.deleteUser = (req,res) =>{
    return res.status(404).json("delete user");
}