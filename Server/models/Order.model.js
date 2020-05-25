const mongoose = require('mongoose')

const Schema = mongoose.Schema

const OrderSchema = new Schema({
    user_Id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    product_Id: {
        type: Array,
        required: true
    },
    adress: {
        type: mongoose.Types.ObjectId,
        required: true     
    },
    email: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    sent: {
        type: Boolean,
        required: true
    },
    payment_method: {
        type: String,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    }
})

module.exports = Order = mongoose.model('orders', OrderSchema)