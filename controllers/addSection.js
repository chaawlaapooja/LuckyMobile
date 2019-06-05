const section = require('../database/models/section')

module.exports = (req, res) => {
	
  
  section.create({...req.body}, (error, product)=>{
  	if(error) res.redirect('/error')
  	res.redirect('/changeSectionAndPayment')
  })
	 							
  }
