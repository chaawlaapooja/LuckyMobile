const invoice = require('../database/models/invoice')

module.exports = (req, res)=>{
  invoice.find({customerMobile:req.body.mobile}, (error, result)=>{
    if(error){
      return res.json('NotFound')
    }
    else{
      if(result.length!==0)
        return res.json(result[0].customerName)
      else
        return res.json('NotFound')
    }
    
  })
  
}