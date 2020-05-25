require('./connect')

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
//const orderRouter = require('./routes/orderRoute')
const productRouter = require('./routes/productRoute')
const userRouter = require('./routes/userRoute')
// const authRouter = require('./routes/verifyToken')
const tokenTestRoute = require('./routes/tokenTestRoute')
app.use('/tokenTest', tokenTestRoute)

app.use('/users', loginRouter)
//app.use('/order', orderRouter)
app.use('/products', productRouter)
app.use('/users', userRouter)

// app.use('/user', authRouter)

app.listen(port, () => console.log(`Server is running on port: ${port}`))
