let mongoose = require('mongoose')
const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect('atlasUrlGoesHere', options)

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
    console.log('Database is connected')
})