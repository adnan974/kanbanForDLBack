
/**
 * @typedef CreateTicketDTO
 * @property {string} title
 * @property {string} description 
 * @property {number} ticketNumber
 * @property {[string]} labels
 * @property {string} ticketStatus
 */
CreateTicketDTO = {
    
    title: {
        type: String,
        required: true,
    },
    description: String,
    labels: [String],
    ticketNumber: {
        type: Number,
        required: true
    },
    ticketStatus: {
        type: String,
        required: true
    }
}