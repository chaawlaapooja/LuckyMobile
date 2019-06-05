//const path = require('path')

const brand = require('../database/models/brand')

module.exports = async(req, res)=>{
	const brands = await brand.findByIdAndRemove(req.params.id, (error) => {
	   if(error) res.redirect('/error')
	   	res.redirect('/editHome')
	})
}