const mongoose = require('mongoose')
const AdressSchema = require('./Adress.model')
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    user_Id: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: false
    },
    products: {
        type: [mongoose.Types.ObjectId],
        ref: "products",
        required: false
    },
    email: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: false
    },
    adress:  
        [AdressSchema]
    ,
    phone: {
        type: Number,
        required: false
    },
    sent: {
        type: Boolean,
        required: false
    },
    payment_method: {
        type: String,
        required: false
    },
    total_price: {
        type: Number,
        required: false
    }
})

module.exports = Order = mongoose.model('orders', OrderSchema)