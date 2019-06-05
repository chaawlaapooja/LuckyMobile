const storeProduct = require('../database/models/storeProduct')

module.exports = (req,res)=>{
  let projection={}
  if(req.body.section==='')
    projection={brand:req.body.brand}
  else if(req.body.section!=='')
    projection={brand:req.body.brand, section:req.body.section}
  storeProduct.find(projection, (error, result)=>{
    if(error)
      return res.json('NotFound')
    else{
      if(result.length!==0){
        let k = []
        result.forEach(result=>{
            k.push(result.model)
          
        })

        let uniqueModelArray = k.filter(function(item, pos) {
            return k.indexOf(item) == pos;
        })
        return res.json(uniqueModelArray)
      }
      else if(result.length===0)
        return res.json('NotFound')
    }
  })
}