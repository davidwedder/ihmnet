const express = require('express')
const bodyparser = require('body-parser')
require('dotenv').config()
const app = express()

app.use(bodyparser.json())
const api = require('./routes/index')
app.use('/api', api)
const PORT = process.env.PORT


app.get('/',(req, res)=>{
    res.json({
        success:true
    })
})

app.listen(PORT)