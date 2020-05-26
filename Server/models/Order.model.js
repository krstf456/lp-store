const mongoose = require('mongoose')
const AdressSchema = require('./Adress.model')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    user_Id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    shoppingCart: {
        type: Array,
        required: true
    },
    email: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    adress:  
        [AdressSchema]
    ,
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