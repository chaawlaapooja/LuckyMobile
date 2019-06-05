const storeProduct = require('../database/models/storeProduct')

module.exports = (req,res)=>{
  if(req.body.section==='Mobile'){
    storeProduct.find({section:'Mobile', stockQuantity:{$gt:0}}, (error, result)=>{
    if(error)
      res.redirect('/error')
    else{
      let newResArr=[]
      result.forEach(function(resl){
        if(newResArr.length===0){
          newResArr.push({brand:resl.brand, model:resl.model.replace(/ /g, '-').toLowerCase(), stockQuantity:1})
        }
        else{
         newResArr.forEach(n=>{
            if(n.brand===resl.brand && n.model.replace(/ /g, '-').toLowerCase()===resl.model.replace(/ /g, '-').toLowerCase()){
              n.stockQuantity=n.stockQuantity+1
            }
          })
          if(!newResArr.includes({brand:resl.brand, model:resl.model.replace(/ /g, '-').toLowerCase()})){
              newResArr.push({brand:resl.brand, model:resl.model.replace(/ /g, '-').toLowerCase(), stockQuantity:1})
            }
        }
      })
      function getUnique(arr, comp) {

  const unique = arr
       .map(e => e[comp])

     // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)

    // eliminate the dead keys & store unique objects
    .filter(e => arr[e]).map(e => arr[e]);

   return unique;
}
let a=getUnique(newResArr,'model')
if(req.body.brand==='' && req.body.model===''){
  return res.json(a)
}
else if(req.body.brand!=='' && req.body.model===''){
  return res.json(a.filter(a=>a.brand===req.body.brand))
}
else if(req.body.brand!=='' && req.body.model!==''){
  return res.json(a.filter(a=>a.brand===req.body.brand && a.model===req.body.model.replace(/ /g, '-').toLowerCase()))
}
    }
  })
  }
  else{
    let projection={}
  if(req.body.brand==='' && req.body.model===''){
    projection={section:{$nin:'Mobile'},stockQuantity:{$gt:0}}
  }
  else if(req.body.brand!=='' && req.body.model===''){
    projection={section:{$nin:'Mobile'},stockQuantity:{$gt:0},brand:req.body.brand}
  }
  else if(req.body.brand!=='' && req.body.model!==''){
    projection={section:{$nin:'Mobile'},stockQuantity:{$gt:0}, brand:req.body.brand, model:req.body.model}
  }
  storeProduct.find(projection, (error, result)=>{
    if(error)
      res.redirect('/error')
    else{
      let resultArray = result.map(r=>{return {brand:r.brand, model:r.model, stockQuantity:r.stockQuantity}})
      return res.json(resultArray)
    }
  })
}
}