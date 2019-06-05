const productsModel = require('../database/models/product')

module.exports = (req,res)=>{
	if(req.body.data1===true)
   { 
    if(req.body.data2.length!==0)
    {
        let arr =[];
        for(let i=1; i<=req.body.data2.length; i++){
        var str = req.body.data2[i-1];
        var pos = str.indexOf("-");
        var gt = str.slice(0, pos);
        var lt = str.slice(pos+1, str.length);
        productsModel.find({brand:req.body.data, price:{$gte:gt,$lte:lt}}).sort({price:-1}).exec((err,p)=>{
          if(err){return res.json('error');}
            p.forEach(function(p){
              arr.push(p);
            })
            if(i===req.body.data2.length){return res.json(arr);}
        })
            
        }
    }
    else if(req.body.data2.length===0)
    {
        productsModel.find({brand :req.body.data}).sort({price:-1}).exec((err,p)=>{
          if(err)return res.json('error')
          return res.json(p);
          })
    }
        
  }
  else
  {
        if(req.body.data.length===0)
        {
          if(req.body.data2.length===0)
          {
              productsModel.find().sort({price:-1}).exec((err,p)=>{
              if(err)return res.json('error')
              return res.json(p);
            })
          }
          else
          {
              let arr =[];
              for(let i=1; i<=req.body.data2.length; i++){
              var str = req.body.data2[i-1];
              var pos = str.indexOf("-");
              var gt = str.slice(0, pos);
              var lt = str.slice(pos+1, str.length);
              
               
              productsModel.find({price:{$gte:gt,$lte:lt}}).sort({price:-1}).exec((err,p)=>{
                if(err)return res.json('error')
                  p.forEach(function(p){
                    arr.push(p);
                  })
                  if(i===req.body.data2.length){return res.json(arr);}
              })
                  
              }
            
          }
          
        }
        else
        {
          if(req.body.data2.length!==0)
          {
              let arr =[];
              for(let i=1; i<=req.body.data2.length; i++){
              var str = req.body.data2[i-1];
              var pos = str.indexOf("-");
              var gt = str.slice(0, pos);
              var lt = str.slice(pos+1, str.length);
              productsModel.find({brand:req.body.data, price:{$gte:gt,$lte:lt}}).sort({price:-1}).exec((err,p)=>{
                if(err){alert(err);}
                  p.forEach(function(p){
                    arr.push(p);
                  })
                  if(i===req.body.data2.length){return res.json(arr);}
              })
                  
              }
            }
            else if(req.body.data2.length===0)
            {
                productsModel.find({brand :req.body.data}).sort({price:-1}).exec((err,p)=>{
                if(err) return res.json('error')
                return res.json(p);
              })

            }
              
        }
  }
          
};