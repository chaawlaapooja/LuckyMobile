const mongoose = require('mongoose')

const onlineOrderSchema = new mongoose.Schema({
	name: String,
  email: String,
  phone: String,
  subtotal: String,
  itemsNames: String,
  itemsPrices: String,
  address: String,
  auth: String
})

const onlineOrder = mongoose.model('onlineOrder', onlineOrderSchema)

module.exports = onlineOrder