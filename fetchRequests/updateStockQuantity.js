const storeProduct = require('../database/models/storeProduct')

module.exports = (req,res)=>{
  let products=req.body.boughtProductsDetails
  products.forEach(function(product){
    storeProduct.findOne({imei:product.imei}, (error, result)=>{
      if(error)
        res.redirect('/error')
      else{
        if(result.length===0){
          return res.json('error')
        }
        else{
          let stockQuantity=parseInt(result.stockQuantity)-1
          storeProduct.updateOne({imei:result.imei},{$set:{stockQuantity:stockQuantity}},(error, result)=>{
            let queryResult=''
            if(error){
              queryResult='error'
            }
            else{
              queryResult='success'
            }
            if(products.indexOf(product)===products.length-1){
             if(queryResult==='success'){
              return res.json('success updating stockQuantity')
             }
             else if(queryResult==='error'){
             	return res.json('error')
             }
            }
          })
          
        }
      }
    })
    
  })
  
}