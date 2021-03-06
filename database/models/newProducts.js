const mongoose = require('mongoose')

const newProductsSchema = new mongoose.Schema({
	sr :{ 
	type : Number,
	unique : true
	},
	model : String,
	description : String,
	marketPrice : Number,
	ourPrice : Number,
	ram : Number,
	storage: Number,
	primary : Number,
	secondary : Number,
	battery : Number,
	screen : Number,
	sim : String,
	coverFile : String,
	firstFile : String,
	secondFile: String,
	thirdFile : String,
	fourthFile : String,
	fifthFile : String
})

const newProducts = mongoose.model('newProducts', newProductsSchema)

module.exports = newProducts