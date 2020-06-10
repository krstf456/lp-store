const mongoose = require('mongoose')
const AdressSchema = require('./Adress.model')
const {ProductSchema} = require("../models/Product.model");
const {ShippingSchema} = require("../models/Shipping.model");
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    user_Id: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    products: 
        [ProductSchema]
    ,
    email: {
        type: String,
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
        default: false,
        required: true,
    },
    payment_method: {
        type: String,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    },
    shipping: 
        [ShippingSchema]
    
})

module.exports = Order = mongoose.model('orders', OrderSchema)