const invoice = require('../database/models/invoice')

module.exports = (req, res)=>{
   invoice.find().sort({'_id':-1}).limit(1).exec((err,p)=>{
              if(err)res.redirect('/error');
              return res.json(p);
            })
}