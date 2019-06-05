
const section = require('../database/models/section')

module.exports = async(req, res)=>{
	const s = await section.findByIdAndRemove(req.params.id, (error) => {
	   if(error) res.redirect('/error')
	})
	res.redirect('/changeSectionAndPayment')
}