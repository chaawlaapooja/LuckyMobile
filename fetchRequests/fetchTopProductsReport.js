const invoice = require('../database/models/invoice')

module.exports = (req,res)=>{
  let projection={}
  if(req.body.dateFrom===req.body.dateTo)
    projection={invoiceDate:req.body.dateFrom}
  else
    projection={invoiceDate:{$gte:req.body.dateFrom,$lte:req.body.dateTo}}
  invoice.find(projection,(err,result)=>{
    if(err)
      res.redirect('/error')
    if(result.length!==0){
        let k = []
        result.forEach(result=>{
          for(var i=0; i<result.boughtProductsDetails.length; i++){
            k.push(result.boughtProductsDetails[i].model)
          }
        })
        let uniqueModelArray = k.filter(function(item, pos) {
        return k.indexOf(item) == pos;
    })
        let fr=[]
        uniqueModelArray.forEach(function(model){
          invoice.find({boughtProductsDetails:{ $elemMatch: { model: model}}, invoiceDate:{$gte:req.body.dateFrom,$lte:req.body.dateTo}}, (err,result)=>{
              if(err)
              res.redirect('/error')
            else{
              let mrp=[]
              for(var i=0; i<result.length; i++){
                for(var j=0; j<result[i].boughtProductsDetails.length; j++){
                  if(result[i].boughtProductsDetails[j].model===model){
                    mrp.push({mrp:result[i].boughtProductsDetails[j].mrp,
                      section:result[i].boughtProductsDetails[j].section,
                      brand:result[i].boughtProductsDetails[j].brand,
                      model:result[i].boughtProductsDetails[j].model
                    })
                  }
                }
              }
              let sum=0
              let models='',section='',brand=''
              for(var m=0; m<mrp.length; m++){
                models=(mrp[m].model)
                section=mrp[m].section
                brand=mrp[m].brand
                sum=sum+mrp[m].mrp
              }
              fr.push({
                section:section,
                brand:brand,
                product:model,
                total:sum,
                qty:mrp.length
              })
              
              if(fr.length===uniqueModelArray.length ){
                
                  fr.sort(function(a, b){
                  return b.total-a.total;
                })
              
                return res.json(fr)
              }
            }
        })
        })
        
        
      }
      else
        return res.json('NotFound')
  })
}