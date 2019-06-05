
const product = require('../database/models/product')

module.exports = async(req, res)=>{
	const products = await product.findByIdAndRemove(req.params.id, (error) => {
	   if(error) res.redirect('/error')
	})
	res.redirect('/editProducts')
}