const storeProduct = require('../database/models/storeProduct')

module.exports = (req, res) => {
	
  storeProduct.create({...req.body}, (error, product)=>{
  	if(error) res.redirect('/error')
  	res.redirect('/addStoreProduct')
  })
	 							
  }
