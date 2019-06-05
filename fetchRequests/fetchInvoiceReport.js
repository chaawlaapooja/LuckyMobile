const invoice = require('../database/models/invoice')

module.exports = (req, res)=>{
  if(req.body.dateFrom===req.body.dateTo){
    invoice.find({invoiceDate:req.body.dateTo},(err,result)=>{
    if(err)
      return res.json('NotFound')
    if(result.length!==0)
        return res.json(result)
      else
        return res.json('NotFound')
  })
  }
  else{
  invoice.find({invoiceDate:{$gte:req.body.dateFrom,$lte:req.body.dateTo}},(err,result)=>{
    if(err)
      res.redirect('/error')
    if(result.length!==0)
        return res.json(result)
      else
        return res.json('NotFound')
  })
}
}