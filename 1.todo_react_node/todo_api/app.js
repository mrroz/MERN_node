const express = require('express')
const app = express()
const mongoose = require('mongoose')


const todoRouter = require('./routes/todoRoute')

app.use(express.json())

app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*'); // If needed
    res.setHeader('Access-Control-Allow-Headers', '*'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

app.use('/api/todo', todoRouter)



mongoose.connect('mongodb://localhost:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {

    app.listen(8000)
}).catch(() => {
    console.log('errrrrro');
})