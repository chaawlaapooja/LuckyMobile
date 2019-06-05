const mongoose = require('mongoose')

const paymentModeSchema = new mongoose.Schema({
	payment_mode : String,

})

const paymentMode = mongoose.model('paymentMode', paymentModeSchema)

module.exports = paymentMode