const productsModel = require('../database/models/product')

module.exports = (req, res)=>{
  productsModel.find({_id:req.body.productid}).exec((err, result)=>{
    if(err)return res.json('error');
    return res.json(result)
  })
}