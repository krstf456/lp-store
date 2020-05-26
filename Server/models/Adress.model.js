const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdressSchema = new Schema({
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
})



module.exports = AdressSchema