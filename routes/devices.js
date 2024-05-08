const Router = require('express').Router()
const Device = require('../model/Devices')


Router.get('/', async (req, res)=>{
   
   try{
    const listaDevices = await Device.find()
      res.json({
      sucess:true,
      message:listaDevices
    })
  }
  catch{
    res.json({
      sucess:false,
      message:"Não foi possivel Listar os Devices"
   })
  }
})



Router.post('/', async (req,res)=>{
  const novoDevice = new Device({
    nome:req.body.nome,
    kwh:req.body.kwh,
    corrente:req.body.corrente,
    voltagem:req.body.voltagem,
    fp:req.body.fp
  })
  try{
    const saveNovoDevice = await novoDevice.save()
    res.json({
      sucess:true,
      message:saveNovoDevice
    })
  }
  catch{
    res.json({
      sucess:false,
      message:"Não foi possivel Cadastrar um novo Devices"
    })
  }
})

Router.put('/:id', async (req,res)=>{
  try{
    const updated = await Device.updateOne(
      {_id: req.params.id},
      {kwh: req.body.kwh,
      corrente:req.body.corrente,
      voltagem:req.body.voltagem,
      fp:req.body.fp}
    )
    
      res.json({
      sucess:true,
      updated:updated
    })
  }
  catch(err){
    res.json({
      sucess:false,
      message:"Não foi possivel Atualizar Devices"
    })
  }
})

Router.delete('/:id', async (req,res)=>{
  try{
    const deleteMedidasId = await Medidas.deleteOne({
      _id: req.params.id   
  });    
      res.json({
      sucess:true,
      data:deleteMedidasId
    })
  }catch(err){
    res.json({
      sucess:false,
      data:err
    })
  }
})




module.exports = Router



//mongodb://localhost:27017