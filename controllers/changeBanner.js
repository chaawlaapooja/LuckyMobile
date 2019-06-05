const path = require('path')
const CLOUDINARY_UPLOAD_PRESET = 'hhfpensg';
const cloudinary = require('cloudinary')

module.exports = (req, res)=>{
	const {image} = req.files
	image.name = "bannerImage"
	//ext = (image.mimetype).substring(6)
	//console.log([image.name]+'.'+ext)
	const uploadPath = path.resolve(__dirname,'../public/posts/home',([image.name]+'.'+'jpg') )
  image.mv(uploadPath,(error)=>{
  	if(error) res.redirect('/error')
  	cloudinary.v2.uploader.unsigned_upload(uploadPath, CLOUDINARY_UPLOAD_PRESET, (err, result)=>{
  		res.redirect('/')
  	
  	})
    
  })
	
};