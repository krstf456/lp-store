const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    artist: {
        type: String,
        required: true
    },
    album_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock_quantity: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
},{ versionKey: false }) 

module.exports = Product = mongoose.model('products', ProductSchema)