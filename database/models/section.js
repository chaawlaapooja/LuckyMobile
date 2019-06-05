const mongoose = require('mongoose')

const sectionSchema = new mongoose.Schema({
	section_name : String,

})

const section = mongoose.model('section', sectionSchema)

module.exports = section