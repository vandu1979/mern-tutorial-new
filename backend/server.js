const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()
//@VK: when client request '/api/goals' server should respond with msg  'Get goals' 
// app.get('/api/goals', (req, res) => {
//     res.status(200).json({message: 'Get goals'})})

// Add middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

// start listening on port no.
app.listen(port, () => console.log(`Server started on port ${port}`))


