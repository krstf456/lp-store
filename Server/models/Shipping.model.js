const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ShippingSchema = new Schema({
    company: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    },
    shipping_time: {
        type: Number,
        required: false
    }
},{ versionKey: false }) 

module.exports = Shipping = mongoose.model('shipping', ShippingSchema)