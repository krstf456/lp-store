require('./connect')
const { Error404Handler, errorHandler} = require('./handlers/handleErrors')

const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const app = express()
const port = process.env.PORT || 5000

app.use(express.static("public"));

app.use(fileUpload({createParentPath:true}))
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
const authRouter = require('./routes/authRoute')
const tokenTestRoute = require('./routes/tokenTestRoute')
const uploadRouter = require('./routes/uploadRoute')
app.use('/tokenTest', tokenTestRoute)


app.use('/users', loginRouter)
app.use('/orders', orderRouter)
app.use('/products', productRouter)
app.use('/users', userRouter)
app.use('/token', authRouter)
app.use('/uploads', uploadRouter)


//Error handlers
app.use(Error404Handler)
app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on port: ${port}`))
