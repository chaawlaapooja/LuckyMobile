
const paymentMode = require('../database/models/paymentMode')

module.exports = async(req, res)=>{
	const p = await paymentMode.findByIdAndRemove(req.params.id, (error) => {
	   if(error) res.redirect('/error')
	})
	res.redirect('/changeSectionAndPayment')
}