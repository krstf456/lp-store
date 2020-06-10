const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ShippingSchema = new Schema({
    company: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    shipping_time: {
        type: Number,
        required: true
    }
},{ versionKey: false }) 


shippingModel = mongoose.model('shippings', ShippingSchema)
module.exports = {shippingModel, ShippingSchema}