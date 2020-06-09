const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdressSchema = new Schema({
    first_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    street: {
        type: String,
        required: false
    },
    street_address: {
        type: String,
        required: false
    },
    postcode: {
        type: Number,
        required: false
    }
})



module.exports = AdressSchema