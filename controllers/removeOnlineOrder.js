
const onlineOrder = require('../database/models/onlineOrders')

module.exports = async(req, res)=>{
	const onlineOrders = await onlineOrder.findByIdAndRemove(req.params.id, (error) => {
	   if(error) res.redirect('/error')
	   	res.redirect('/')
	})
}