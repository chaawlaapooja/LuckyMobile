const path = require('path')
const cloudinary = require('cloudinary')
const product = require('../database/models/product')
const CLOUDINARY_UPLOAD_PRESET = 'q2zikzas';

module.exports = (req, res) => {
	
  const cover = req.files.cover;
  const first = req.files.first;
  const second = req.files.second;
  const third = req.files.third;

  const coverPath=path.resolve(__dirname,'../public/products',cover.name)
  const uploadPath1=path.resolve(__dirname,'../public/products',first.name)
  const uploadPath2=path.resolve(__dirname,'../public/products',second.name)
  const uploadPath3=path.resolve(__dirname,'../public/products',third.name)
  	cover.mv(coverPath,(error)=>{
      if(error) res.redirect('/error')
 		cloudinary.v2.uploader.unsigned_upload(coverPath, CLOUDINARY_UPLOAD_PRESET, (err, cover_result)=>{
      if(err) res.redirect('/error')
 			first.mv(uploadPath1,(error)=>{
        if(error) res.redirect('/error')
	 			cloudinary.v2.uploader.unsigned_upload(uploadPath1, CLOUDINARY_UPLOAD_PRESET, (err, first_result)=>{
          if(err) res.redirect('/error')
	 				second.mv(uploadPath2,(error)=>{
            if(error) res.redirect('/error')
	 					cloudinary.v2.uploader.unsigned_upload(uploadPath2,CLOUDINARY_UPLOAD_PRESET, (err, second_result)=>{
              if(err) res.redirect('/error')
	 						third.mv(uploadPath3,(error)=>{
                if(error) res.redirect('/error')
	 							cloudinary.v2.uploader.unsigned_upload(uploadPath2, CLOUDINARY_UPLOAD_PRESET,(err, third_result)=>{
                  if(err) res.redirect('/error')
                  if(cover_result.secure_url==='' || first_result.secure_url==='' || second_result.secure_url==='' || third_result.secure_url==='')
                      res.redirect('/error')
	 								product.create({...req.body, cover:cover_result.secure_url, first:first_result.secure_url, second:second_result.secure_url, third:third_result.secure_url}, (error, product)=>{
                  	if(error){res.redirect('/error')}
                  	res.redirect('/editProducts')
                  })
                	 							})
                	    					})
                	 					})
	    			})
	 			})
	    })
  	})
    })  
  }
