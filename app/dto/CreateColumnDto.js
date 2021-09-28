const Column = require("../models/Column");

/**
 * @typedef CreateColumnDTO
 * @property {string} title
 */
 CreateColumnDTO = {
    
    title: {
        type: String,
        required: true,
    }
}