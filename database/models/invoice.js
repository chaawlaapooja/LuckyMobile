const mongoose = require('mongoose')

var NewCounterSchema = mongoose.Schema({
    _id: {type: String, required: true},
    sequence: { type: Number, default: 1 }
});
var counter = mongoose.model('counter', NewCounterSchema);

var invoiceSchema = mongoose.Schema({
    invoiceNumber: {type: String},
    invoiceDate : Date,
    paymentMode :String,
    customerName:String,
    customerMobile:Number,
    boughtProductsDetails:Array,
    boughtProductsName:Array,
    boughtProductsPrice:Array,
    grandTotal:String
});

invoiceSchema.pre('save', function(next) {
    var doc = this;
    counter.findByIdAndUpdate({_id: 'entityId'}, {$inc: { sequence: 1} }, function(error, counter)   {
        if(error)
            return next(error);
        doc.invoiceNumber = counter.sequence;
        next();
    });
});

const invoice = mongoose.model('invoice', invoiceSchema)

module.exports = invoice