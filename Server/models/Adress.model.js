const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdressSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: false
    },
    street_address: {
        type: String,
        required: true
    },
    postcode: {
        type: Number,
        required: true
    }
})



module.exports = AdressSchema