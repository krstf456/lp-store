const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    adress: {
        type: 'ObjectId',
        ref: 'Adress' 
        
    },
    isAdmin: {
        type: booelan,
        required: true,
        default: false
    }
}, { versionKey: false })

module.exports = User = mongoose.model('users', UserSchema)