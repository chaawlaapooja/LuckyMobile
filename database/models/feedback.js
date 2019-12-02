const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
	productID : String,
	records : [{value : Number,
				createdAt: {
					type : Date,
					default : new Date()
				}
				}]
		
	
	
})

const feedback = mongoose.model('feedback', feedbackSchema)

module.exports = feedback