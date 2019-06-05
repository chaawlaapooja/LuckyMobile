
const storeProduct = require('../database/models/storeProduct')

module.exports = async(req, res)=>{
	const storeProducts = await storeProduct.findByIdAndRemove(req.params.id, (error) => {
	   if(error) res.redirect('/error')
	})
	res.redirect('/changeProducts')
}