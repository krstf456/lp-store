const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ProductSchema = new Schema({
    artist: {
        type: String,
        required: true
    },
    album: {
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
        //type: mongoose.Types.ObjectId,
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }
},{ versionKey: false }) 
/*
ProductSchema.virtual("imageUrl").get(() => {
    return '/uploads' + this.image.toString()
})*/

module.exports = Product = mongoose.model('products', ProductSchema)