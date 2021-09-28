
/**
 * @typedef CreateTicketDTO
 * @property {string} title
 * @property {string} description 
 * @property {number} ticketNumber
 * @property {[string]} labels
 * @property {string} ticketStatus
 * @property {string} associatedDashboard
 * @property {string} associatedColumn
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
    },
    associatedDashboard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dashboard",
        required: true
    },
    associatedColumn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Column",
        required: true
    },
}