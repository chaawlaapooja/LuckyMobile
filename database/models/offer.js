const mongoose = require('mongoose')

const offerSchema = new mongoose.Schema({
	image : String,
	createdAt: {
		type : Date,
		default : new Date()
	}
	
})

const offer = mongoose.model('offer', offerSchema)

module.exports = offer