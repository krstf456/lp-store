require('./connect')

const express = require('express')
const cors = require('cors')
//const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use(
    express.urlencoded({
        extended: false
    })
)
//const loginRouter = require('./routes/loginRoute')
//const orderRouter = require('./routes/orderRoute')
//const productRouter = require('./routes/productRoute')
//const userRouter = require('./routes/userRoute')

//app.use('/login', loginRouter)
//app.use('/order', orderRouter)
//app.use('/product', productRouter)
//app.use('/user', userRouter)

app.listen(port, () => console.log(`Server is running on port: ${port}`))