const invoice = require('../database/models/invoice')

module.exports = (req,res)=>{
  if(req.body.dateFrom===req.body.dateTo){
    var date = new Date(req.body.dateFrom),
month = ("0" + (date.getMonth()+1)).slice(-2),
              day  = ("0" + date.getDate()).slice(-2);
              let formattedDate = [ day, month, date.getFullYear() ].join("-")
    
              date= [ date.getFullYear(), month, day ].join("-");

    invoice.find({invoiceDate:req.body.dateFrom},(error, result)=>{
       if(error)
      res.redirect('/error')
    else{
      let finalResult=[]
    
      if(result.length!==0){
        if(req.body.section!=='' && req.body.brand!==''){
          let filteredResult=[]
          for(var i=0; i<result.length; i++){
            for(var j=0; j<result[i].boughtProductsDetails.length;j++){
              if(result[i].boughtProductsDetails[j].section===req.body.section && result[i].boughtProductsDetails[j].brand===req.body.brand){
                filteredResult.push({mrp:result[i].boughtProductsDetails[j].mrp})
              }
            }
          }
          let sum=0
          for(var i=0; i<filteredResult.length;i++){
            sum=sum+parseInt(filteredResult[i].mrp)
          }
          let obj={
            date:formattedDate,
            total:sum
          }
          finalResult.push(obj)
        }
        else if(req.body.section!=='' &&req.body.brand===''){
          let sectionedResult=[]
          for(var i=0; i<result.length; i++){
            for(var j=0; j<result[i].boughtProductsDetails.length;j++){
              if(result[i].boughtProductsDetails[j].section===req.body.section)
              sectionedResult.push({mrp:result[i].boughtProductsDetails[j].mrp})
            }
          }
          let sum=0
          for(var i=0; i<sectionedResult.length;i++){
            sum=sum+parseInt(sectionedResult[i].mrp)
          }
          let obj={
            date:formattedDate,
            total:sum
          }
          finalResult.push(obj)
        }
        else if(req.body.section==='' &&req.body.brand!==''){
          let sectionedResult=[]
          for(var i=0; i<result.length; i++){
            for(var j=0; j<result[i].boughtProductsDetails.length;j++){
              if(result[i].boughtProductsDetails[j].brand===req.body.brand)
              sectionedResult.push({mrp:result[i].boughtProductsDetails[j].mrp})
            }
          }
          let sum=0
          for(var i=0; i<sectionedResult.length;i++){
            sum=sum+parseInt(sectionedResult[i].mrp)
          }
          let obj={
            date:formattedDate,
            total:sum
          }
          finalResult.push(obj)
        }
        else if(req.body.section==='' && req.body.brand===''){
          let sum=0;
          for(var i=0;i<result.length;i++){
            sum=sum+parseInt(result[i].grandTotal)
          }
          let obj={
            date:formattedDate,
            total:sum
          }
          finalResult.push(obj)
        }
      }
      else if(result.length===0){
        let obj={
          date:formattedDate,
          total:0
        }
        finalResult.push(obj)
      }
       return res.json(finalResult)
    }
  
    })
   
  }
  let df=new Date(req.body.dateFrom)
  let dt=new Date(req.body.dateTo)
  var resl = Math.abs(df - dt) / 1000;
         var days = Math.floor(resl / 86400)+1;
  let finalResult=[]
  var date = new Date(req.body.dateFrom),
month = ("0" + (date.getMonth()+1)).slice(-2),
              day  = ("0" + date.getDate()).slice(-2);
              date= [ date.getFullYear(), month, day ].join("-");
let i=1
while(date<req.body.dateTo){
  let projection={}
  if(date===req.body.dateFrom){
    var ndate = new Date(date),
  month = ("0" + (ndate.getMonth()+1)).slice(-2),
    day  = ("0" + ndate.getDate()).slice(-2);
    let formattedDate = [ day, month, ndate.getFullYear() ].join("-")
    ndate= [ ndate.getFullYear(), month, day ].join("-");
    
    invoice.find({invoiceDate:ndate},(error, result)=>{
    if(error)
      res.redirect('/error')
    else{
      if(result.length!==0){
        if(req.body.section!=='' && req.body.brand!==''){
          let filteredResult=[]
          for(var i=0; i<result.length; i++){
            for(var j=0; j<result[i].boughtProductsDetails.length;j++){
              if(result[i].boughtProductsDetails[j].section===req.body.section && result[i].boughtProductsDetails[j].brand===req.body.brand){
                filteredResult.push({mrp:result[i].boughtProductsDetails[j].mrp})
              }
            }
          }
          let sum=0
          for(var i=0; i<filteredResult.length;i++){
            sum=sum+parseInt(filteredResult[i].mrp)
          }
          let obj={
            date:formattedDate,
            total:sum
          }
          finalResult.push(obj)
        }
        else if(req.body.section!=='' &&req.body.brand===''){
          let sectionedResult=[]
          for(var i=0; i<result.length; i++){
            for(var j=0; j<result[i].boughtProductsDetails.length;j++){
              if(result[i].boughtProductsDetails[j].section===req.body.section)
              sectionedResult.push({mrp:result[i].boughtProductsDetails[j].mrp})
            }
          }
          let sum=0
          for(var i=0; i<sectionedResult.length;i++){
            sum=sum+parseInt(sectionedResult[i].mrp)
          }
          let obj={
            date:formattedDate,
            total:sum
          }
          finalResult.push(obj)
        }
        else if(req.body.section==='' &&req.body.brand!==''){
          let sectionedResult=[]
          for(var i=0; i<result.length; i++){
            for(var j=0; j<result[i].boughtProductsDetails.length;j++){
              if(result[i].boughtProductsDetails[j].brand===req.body.brand)
              sectionedResult.push({mrp:result[i].boughtProductsDetails[j].mrp})
            }
          }
          let sum=0
          for(var i=0; i<sectionedResult.length;i++){
            sum=sum+parseInt(sectionedResult[i].mrp)
          }
          let obj={
            date:formattedDate,
            total:sum
          }
          finalResult.push(obj)
        }
        else if(req.body.section==='' && req.body.brand===''){
          let sum=0;
          for(var i=0;i<result.length;i++){
            sum=sum+parseInt(result[i].grandTotal)
          }
          let obj={
            date:formattedDate,
            total:sum
          }
          finalResult.push(obj)
        }
      }
      else if(result.length===0){
        let obj={
          date:formattedDate,
          total:0
        }
        finalResult.push(obj)
      }
    }
  })
    }
  date=new Date(date)
  date.setDate(date.getDate() + 1)
  var ndate = new Date(date),
  month = ("0" + (ndate.getMonth()+1)).slice(-2),
    day  = ("0" + ndate.getDate()).slice(-2);
    let formattedDate = [ day, month, ndate.getFullYear() ].join("-")
    ndate= [ ndate.getFullYear(), month, day ].join("-");
    invoice.find({invoiceDate:ndate},(error, result)=>{
    if(error)
      res.redirect('/error')
    else{
      if(result.length!==0){
        if(req.body.section!=='' && req.body.brand!==''){
          let filteredResult=[]
          for(var i=0; i<result.length; i++){
            for(var j=0; j<result[i].boughtProductsDetails.length;j++){
              if(result[i].boughtProductsDetails[j].section===req.body.section && result[i].boughtProductsDetails[j].brand===req.body.brand)
              filteredResult.push({mrp:result[i].boughtProductsDetails[j].mrp})
            }
          }
          let sum=0
          for(var i=0; i<filteredResult.length;i++){
            sum=sum+parseInt(filteredResult[i].mrp)
          }
          let obj={
            date:formattedDate,
            total:sum
          }
          finalResult.push(obj)
        }
        else if(req.body.section!=='' &&req.body.brand===''){
          let sectionedResult=[]
          for(var i=0; i<result.length; i++){
            for(var j=0; j<result[i].boughtProductsDetails.length;j++){
              if(result[i].boughtProductsDetails[j].section===req.body.section)
              sectionedResult.push({mrp:result[i].boughtProductsDetails[j].mrp})
            }
          }
          let sum=0
          for(var i=0; i<sectionedResult.length;i++){
            sum=sum+parseInt(sectionedResult[i].mrp)
          }
          let obj={
            date:formattedDate,
            total:sum
          }
          finalResult.push(obj)
        }
        else if(req.body.section==='' &&req.body.brand!==''){
          let sectionedResult=[]
          for(var i=0; i<result.length; i++){
            for(var j=0; j<result[i].boughtProductsDetails.length;j++){
              if(result[i].boughtProductsDetails[j].brand===req.body.brand)
              sectionedResult.push({mrp:result[i].boughtProductsDetails[j].mrp})
            }
          }
          let sum=0
          for(var i=0; i<sectionedResult.length;i++){
            sum=sum+parseInt(sectionedResult[i].mrp)
          }
          let obj={
            date:formattedDate,
            total:sum
          }
          finalResult.push(obj)
        }
        else if(req.body.section==='' && req.body.brand===''){
          let sum=0;
          for(var i=0;i<result.length;i++){
            sum=sum+parseInt(result[i].grandTotal)
          }
          let obj={
            date:formattedDate,
            total:sum
          }
          finalResult.push(obj)
        }
      }
      else if(result.length===0){
        let obj={
          date:formattedDate,
          total:0
        }
        finalResult.push(obj)
      }
      if(days===finalResult.length){
        finalResult.sort(function(a, b){
          a = a.date.split('-');
          b = b.date.split('-');
          return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
   
            })
        return res.json(finalResult)
      }
    }
    
  })  
    date=ndate
    i++
  }
}