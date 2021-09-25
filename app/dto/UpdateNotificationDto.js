
/**
 * @typedef UpdateNotificationDTO
 * @property {string} title
 * @property {string} description 
 * @property {[string]} status
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
    }
    
  
}