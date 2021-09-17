/**
 * @typedef CreateUserDTO
 * @property {string} firstName
 * @property {string} lastName 
 * @property {[string]} email
 * @property {string} password
 * @property {string} userPhoto
 * @property {[string]} labels
 */
const CreateUserDTO = {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userPhoto: String,
    labels: [String],
}

