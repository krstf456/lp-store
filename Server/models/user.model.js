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
    adress: {
        city: {
            type: String,
            required: false
        },
        street: {
            type: String,
            required: false
        },
        street_number: {
            type: Number,
            required: false
        },
        postcode: {
            type: Number,
            required: false
        }
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    }
},{ versionKey: false })

module.exports = User = mongoose.model('users', UserSchema)