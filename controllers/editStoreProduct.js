const storeProduct = require('../database/models/storeProduct')


module.exports =  async (req,res)=>{
	let sp = await storeProduct.updateOne({imei:req.body.imei},{
		$set :{
			ram:req.body.ram,
			rom:req.body.rom,
			hsn:req.body.hsn,
			model:req.body.model,
			brand:req.body.brand,
			mrp:req.body.mrp,
			stockQuantity:req.body.stockQuantity
		}
	}, (err, result)=>{
		if(err){
			res.redirect('/error')
		}else{
		res.redirect('/changeProducts')
	}
	})
}
    
	
	
