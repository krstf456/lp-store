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
const uploadRouter = require('./routes/uploadRoute')
const shippingRouter = require('./routes/shippingRoute')

app.use(loginRouter)
app.use(orderRouter)
app.use(productRouter)
app.use(userRouter)
app.use(uploadRouter)
app.use(shippingRouter)

//Error handlers
app.use(Error404Handler)
app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on port: ${port}`))
