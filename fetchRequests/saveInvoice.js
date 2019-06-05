const invoice = require('../database/models/invoice')

module.exports = (req, res)=>{
  invoice.create({...req.body}, (error, result)=>{
    if(error){
      return res.json('error')
    }
    else
    return res.json('success')
  })
  
}