const Router = require('express').Router()
require('../model/mongoconn')

const devices = require('./devices')
Router.use('/devices',devices)


Router.get('/', (req,res)=>{
    res.json({
        success: false,
        message: "Este é um acesso reservado!!"
    })   
})



module.exports = Router