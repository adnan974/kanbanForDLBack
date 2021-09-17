
/**
 * @typedef UpdateTicketDTO
 * @property {string} title
 * @property {string} description 
 * @property {[string]} labels
 * @property {string} ticketStatus
 */
 UpdateTicketDTO = {
    
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