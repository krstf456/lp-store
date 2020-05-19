const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    frist_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    adress: {
        type: Number,
        required: true
    },
    isAdmin: {
        type: booelan,
        required: true,
        default: false
    }
}, { versionKey: false })

module.exports = User = mongoose.model('users', UserSchema)