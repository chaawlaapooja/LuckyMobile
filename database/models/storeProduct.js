
const mongoose = require('mongoose')

const storeProductSchema = new mongoose.Schema({
	section :String,
	brand : String,
	model : String,
	imei: {
  	type : String,
  	unique : true
  },
	mrp : Number,
	ram : Number,
	rom: Number,
	hsn : String,
	stockQuantity:{
		type :Number
	}
})

const storeProduct = mongoose.model('storeproduct', storeProductSchema)

module.exports = storeProduct