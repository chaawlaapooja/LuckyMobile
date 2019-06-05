const invoice = require('../database/models/invoice')

module.exports = (req, res)=>{
  invoice.findOne({invoiceNumber:req.body.invoiceNumber}, (error, result)=>{
    if(error){
      return res.json('NotFound')
    }
    else{
      if(result)
        return res.json(result)
      else
        return res.json('NotFound')
    }
    
  })
  
}