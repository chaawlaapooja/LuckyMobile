const path = require('path')
const cloudinary = require('cloudinary')
const brand = require('../database/models/brand')
const CLOUDINARY_UPLOAD_PRESET = 'sixangmd';

module.exports = (req, res) => {
	
  const {image} = req.files
  const uploadPath = path.resolve(__dirname,'../public/posts/brands',image.name)
  image.mv(uploadPath,(error)=>{
    if(error) res.redirect('/error')
  	cloudinary.v2.uploader.unsigned_upload(uploadPath, CLOUDINARY_UPLOAD_PRESET, (err, result)=>{
  		if(err)
        res.redirect('/error')
      else{
        if(result.secure_url!=='')
  		brand.create({...req.body, image:result.secure_url}, (error, brand)=>{
        if(error)
          res.redirect('/error')
        res.redirect('/editHome')
})
    else
      res.redirect('/error')
    }
  	})
    
  })
}