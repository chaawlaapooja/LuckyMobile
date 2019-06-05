const storeProduct = require('../database/models/storeProduct')

module.exports = (req, res)=>{
   storeProduct.find({imei:req.body.data}).exec((err,p)=>{
              if(err)res.redirect('/error');
              return res.json(p);
            })
}