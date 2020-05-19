const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OrderSchema = new Schema({
    adress: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    shipping: {
        type: String,
        required: true
    },
    sent: {
        type: Boolean,
        required: true
    },
    payment_method: {
        type: String,
        required: true
    }
})

module.exports = Order = mongoose.model('order', OrderSchema)