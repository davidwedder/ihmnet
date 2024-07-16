//Conexão com o MongoDB Atlas
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://davidwedder:Bnzie4e6@ihmnet.kuyopzt.mongodb.net/?retryWrites=true&w=majority&appName=ihmnet").then(()=>{
console.log("MongoDB Conectado")
}).catch((err)=>{
    console.log("Houve um erro ao conectar ao Banco MongoDB")
})

mongoose.Promise = global.Promise;
module.exports = mongoose


