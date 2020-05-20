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
        city: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        street_number: {
            type: Number,
            required: true
        },
        postcode: {
            type: Number,
            required: true
        }
    },
    isAdmin: {
        type: booelan,
        required: true,
        default: false
    }
}, { versionKey: false })

module.exports = User = mongoose.model('users', UserSchema)