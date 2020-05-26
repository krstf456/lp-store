require('./connect')
const { handleError } = require('./utils/errors')

const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use(
    express.urlencoded({
        extended: false
    })
)
const loginRouter = require('./routes/loginRoute')
const orderRouter = require('./routes/orderRoute')
const productRouter = require('./routes/productRoute')
const userRouter = require('./routes/userRoute')

app.use('/users', loginRouter)
app.use('/orders', orderRouter)
app.use('/products', productRouter)
app.use('/users', userRouter)
app.use((err, req, res, next) => {handleError(err, res);});

app.listen(port, () => console.log(`Server is running on port: ${port}`))
