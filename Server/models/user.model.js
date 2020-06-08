const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema({
    username: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    }
},{ versionKey: false })

module.exports = User = mongoose.model('users', UserSchema)
