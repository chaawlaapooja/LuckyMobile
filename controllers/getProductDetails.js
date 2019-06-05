const productsModel = require('../database/models/product')

module.exports = async  (req, res)=>{
   const single = await productsModel.findById(req.body.pid);
    res.render('single', {
    single
  });
}