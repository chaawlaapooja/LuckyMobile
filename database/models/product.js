
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
	brand : String,
	model : String,
	description : String,
	marketPrice : Number,
	price : Number,
	ram : Number,
	internalStorage: Number,
	primaryCamera : Number,
	secondaryCamera : Number,
	batteryCapacity : Number,
	screenSize : Number,
	simType : String,
	phoneType : String,
	offers : String,
	features : String,
	cover : String,
	first : String,
	second : String,
	third : String
})

const product = mongoose.model('product', productSchema)

module.exports = product