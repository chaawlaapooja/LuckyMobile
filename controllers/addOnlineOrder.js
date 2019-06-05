const onlineOrder = require('../database/models/onlineOrders')

module.exports = (req, res) => {
	onlineOrder.create({...req.body}, (error, result)=>{
  	if(error)
  		res.redirect('/error')
  	res.redirect('/orderSuccessful')
 }) 
}