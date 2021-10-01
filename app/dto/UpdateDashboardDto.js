const Column = require("../models/Column");

/**
 * @typedef UpdateDashboardDTO
 * @property {string} title
 * @property {string} description 
 * @property {[string]} labels
 */
 UpdateDashboardDTO = {
    
    title: {
        type: String,
        required: true,
    },
    description: String,
    labels: [String],
}