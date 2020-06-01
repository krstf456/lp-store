const mongoose = require('mongoose')

const Schema = mongoose.Schema

const uploadSchema = new Schema({
    name: String,
    data: Buffer,
    contentType: String,
})

module.exports = Upload = mongoose.model('upload', uploadSchema)