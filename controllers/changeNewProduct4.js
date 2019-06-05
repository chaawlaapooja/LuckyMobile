const newProductsContent = require('../database/models/newProducts')
const path = require('path')
const cloudinary = require('cloudinary')
const CLOUDINARY_UPLOAD_PRESET = 'yjurovqv';


module.exports =  (req,res)=>{
	
	const cover = req.files.cover
	cover.name = 'cover'
	
	const first = req.files.first
	first.name = 'first'
	
	const second = req.files.second
	second.name = 'second'
	
	const third = req.files.third
	third.name = 'third'
	
	const fourth = req.files.fourth
	fourth.name = 'fourth'
	
	const fifth = req.files.fifth
	fifth.name = 'fifth'
	

	const coverFile = path.resolve(__dirname,'../public/posts/home/newProductsContent/4',([cover.name]+'.'+'jpg') )
	const firstFile = path.resolve(__dirname,'../public/posts/home/newProductsContent/4',([first.name]+'.'+'jpg'))
	const secondFile = path.resolve(__dirname,'../public/posts/home/newProductsContent/4',([second.name]+'.'+'jpg'))
	const thirdFile = path.resolve(__dirname,'../public/posts/home/newProductsContent/4',([third.name]+'.'+'jpg'))
	const fourthFile = path.resolve(__dirname,'../public/posts/home/newProductsContent/4',([fourth.name]+'.'+'jpg'))
	const fifthFile = path.resolve(__dirname,'../public/posts/home/newProductsContent/4',([fifth.name]+'.'+'jpg'))
	
	cover.mv(coverFile,(error)=>{
		if(error) res.redirect('/error')
 		cloudinary.v2.uploader.unsigned_upload(coverFile, CLOUDINARY_UPLOAD_PRESET, (err, cover_result)=>{
 			if(err) res.redirect('/error')
 			first.mv(firstFile,(error)=>{
 				if(error) res.redirect('/error')
	 			cloudinary.v2.uploader.unsigned_upload(firstFile, CLOUDINARY_UPLOAD_PRESET, (err, first_result)=>{
	 				if(err) res.redirect('/error')
	 				second.mv(secondFile,(error)=>{
	 					if(error) res.redirect('/error')
	 					cloudinary.v2.uploader.unsigned_upload(secondFile,CLOUDINARY_UPLOAD_PRESET, (err, second_result)=>{
	 						if(err) res.redirect('/error')
	 						third.mv(thirdFile,(error)=>{
	 							if(error) res.redirect('/error')
	 							cloudinary.v2.uploader.unsigned_upload(thirdFile, CLOUDINARY_UPLOAD_PRESET,(err, third_result)=>{
	 								if(err) res.redirect('/error')
	 								fourth.mv(fourthFile, (error)=>{
	 									if(error) res.redirect('/error')
	 									cloudinary.v2.uploader.unsigned_upload(fourthFile, CLOUDINARY_UPLOAD_PRESET, (err, fourth_result)=>{
	 										if(err) res.redirect('/error')
	 										fifth.mv(fifthFile, (error)=>{
	 											if(error) res.redirect('/error')
	 											cloudinary.v2.uploader.unsigned_upload(fifthFile, CLOUDINARY_UPLOAD_PRESET, (err, fifth_result)=>{
	 												if(err) res.redirect('/error')
	 												if(cover_result.secure_url==='' || first_result.secure_url==='' || second_result.secure_url==='' || third_result.secure_url==='' || fourth_result.secure_url==='' || fifth_result.second_result==='')
	 													res.redirect('/error')
	 												newProductsContent.updateOne({sr:4},{$set :
															{model : req.body.model,
															description : req.body.description,
															marketPrice : req.body.marketPrice,
															ourPrice : req.body.ourPrice,
															ram : req.body.ram,
															storage: req.body.storage,
															primary : req.body.primary,
															secondary : req.body.secondary,
															battery : req.body.battery,
															screen : req.body.screen,
															sim : req.body.sim,
															coverFile : cover_result.secure_url,
															firstFile : first_result.secure_url,
															secondFile: second_result.secure_url,
															thirdFile : third_result.secure_url,
															fourthFile : fourth_result.secure_url,
															fifthFile : fifth_result.secure_url
														}},
														
														(err, result)=>{
															if(err) res.redirect('/error')
															else{
																res.redirect('/editHome')
															}
														}
													) 
	 											})
	 										})
	 									})
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