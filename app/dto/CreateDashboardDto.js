const Column = require("../models/Column");

/**
 * @typedef CreateDashboardDTO
 * @property {string} title
 * @property {string} description 
 * @property {[string]} labels
 * @property {[Column]} columnList
 */
 CreateDashboardDTO = {
    
    title: {
        type: String,
        required: true,
    },
    description: String,
    labels: [String],
    columnList: [Column],
}