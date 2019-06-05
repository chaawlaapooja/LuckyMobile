const productsModel = require('../database/models/product')

module.exports = (req, res)=>{
   productsModel.find({}).sort({price:-1}).exec((err,p)=>{
              if(err)return res.json('error')
              return res.json(p);
            })
}