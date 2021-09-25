
/**
 * @typedef CreateNotificationDTO
 * @property {string} title
 * @property {string} description 
 * @property {[string]} status
 * @property {[string]} associatedUser
 */
 NotificationDTO = {
    
    title: {
        type: String,
        required: true,
    },
    description: String,
    status: {
        type: String,
        required: true
    },
    associatedUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
      },

  
}