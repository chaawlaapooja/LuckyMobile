
const offer = require('../database/models/offer')

module.exports = async(req, res)=>{
	const offers = await offer.findByIdAndRemove(req.params.id, (error) => {
	   if(error) res.redirect('/error')
	   	res.redirect('/editOffers')
	})
}