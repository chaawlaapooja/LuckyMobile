const path = require('path')
const CLOUDINARY_UPLOAD_PRESET = 'bwtoqugc';
const cloudinary = require('cloudinary')

module.exports = (req, res)=>{
	const {image} = req.files
	image.name = "bannerBottomImage"
	const uploadPath = path.resolve(__dirname,'../public/posts/home',([image.name]+'.'+'jpg'))
  image.mv(uploadPath,(error)=>{
    if(error) res.redirect('/error')
  	cloudinary.v2.uploader.unsigned_upload(uploadPath, CLOUDINARY_UPLOAD_PRESET, (err, result)=>{
  		if(err)console.log(err)
  		res.redirect('/')
  	})
    
  })
	
};
