const path = require('path')
const cloudinary = require('cloudinary')
const offer = require('../database/models/offer')
const CLOUDINARY_UPLOAD_PRESET = 'sn1mlriv';

module.exports = (req, res) => {
	
  const {image} = req.files
  const uploadPath = path.resolve(__dirname,'../public/posts/offers',image.name)
  image.mv(uploadPath,(error)=>{
    if(error) res.redirect('/error')
  	cloudinary.v2.uploader.unsigned_upload(uploadPath, CLOUDINARY_UPLOAD_PRESET, (err, result)=>{
  		if(err)
        res.redirect('/error')
      else{
        if(result.secure_url==='')
          res.redirect('/error')
        
       offer.create({...req.body, image: result.secure_url}, (error, brand)=>{
        if(error) res.redirect('/error')
          res.redirect('/editOffers')
      })
     }
        	})
  
    
  })
}