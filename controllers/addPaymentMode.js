const paymentMode = require('../database/models/paymentMode')

module.exports = (req, res) => {
	paymentMode.create({...req.body}, (error, product)=>{
  	if(error)
  		res.redirect('/error')
  	res.redirect('/changeSectionAndPayment')
  })
	 							
  }
