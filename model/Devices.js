const mongoose = require('mongoose')
const slug = require('slug')
const {Schema} = mongoose

const devicesSchema = new Schema({
    nome: {type:String, require:true},
    slug: {type:String, require:true, unique:true, default:function(){return slug(this.nome)}},
    kwh:Number,
    corrente: Number,
    voltagem: Number,
    fp:Number

})

module.exports = mongoose.model('devices',devicesSchema)

