let mongoose = require('mongoose')
const options = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }

require('dotenv').config()

const uri = process.env.ATLAS_URI
mongoose.connect(uri, options)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))

db.once('open', () => {
    console.log("MongoDB database connection established succesfully")
})
