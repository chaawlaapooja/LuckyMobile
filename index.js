require('dotenv').config()
const path = require('path');
const edge = require('edge.js');
const expressEdge = require('express-edge');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const connectMongo = require("connect-mongo");
const expressSession = require("express-session");
const cloudinary = require('cloudinary');


const batteryContent = require('./database/models/batteryContent');
const brand = require('./database/models/brand');
const cameraContent = require('./database/models/cameraContent');
const newProducts = require('./database/models/newProducts');
const offer = require('./database/models/offer');
const ramContent = require('./database/models/ramContent');
const screenContent = require('./database/models/screenContent');
const productsModel = require('./database/models/product');
const onlineOrder = require('./database/models/onlineOrders');
const storeProduct = require('./database/models/storeProduct')
const section = require('./database/models/section')
const paymentMode = require('./database/models/paymentMode')

const aboutPage = require('./controllers/aboutPage');
const addBrand = require('./controllers/addBrand');
const addOffer = require('./controllers/addOffer');
const adminPanel = require('./controllers/adminPanel');
const changeBanner = require('./controllers/changeBanner');
const changeBannerBottom= require('./controllers/changeBannerBottom');
const changeBattery1 = require('./controllers/changeBattery1');
const changeBattery2 = require('./controllers/changeBattery2');
const changeBattery3 = require('./controllers/changeBattery3');
const changeCamera1 = require('./controllers/changeCamera1');
const changeCamera2 = require('./controllers/changeCamera2');
const changeCamera3 = require('./controllers/changeCamera3');
const changeNewProduct1 = require('./controllers/changeNewProduct1');
const changeNewProduct2 = require('./controllers/changeNewProduct2');
const changeNewProduct3 = require('./controllers/changeNewProduct3');
const changeNewProduct4 = require('./controllers/changeNewProduct4');
const changeRAM1 = require('./controllers/changeRAM1');
const changeRAM2 = require('./controllers/changeRAM2');
const changeRAM3 = require('./controllers/changeRAM3');
const changeScreen1 = require('./controllers/changeScreen1');
const changeScreen2 = require('./controllers/changeScreen2');
const changeScreen3 = require('./controllers/changeScreen3');
const comparePage = require('./controllers/comparePage');
const editHome = require('./controllers/editHome');
const editOffers = require('./controllers/editOffers');
const editProducts = require('./controllers/editProducts');
const homePage = require('./controllers/homePage');
const login = require('./controllers/login');
const logout = require('./controllers/logout');
const offersPage = require('./controllers/offersPage');
const productsPage = require('./controllers/productsPage');
const profile = require('./controllers/profile');
const registerUser = require('./controllers/registerUser');
const removeProduct = require('./controllers/removeProduct');
const removeBrand = require('./controllers/removeBrand');
const removeOffer = require('./controllers/removeOffer');
const addProduct = require('./controllers/addProduct');
const addOnlineOrder = require('./controllers/addOnlineOrder');
const removeOnlineOrder = require('./controllers/removeOnlineOrder');
const onlineOrders = require('./controllers/onlineOrders');
const addStoreProductView = require('./controllers/addStoreProductView')
const addStoreProduct = require('./controllers/addStoreProduct')
const changeStoreProduct = require('./controllers/changeStoreProduct')
const removeStoreProduct = require('./controllers/removeStoreProduct')
const editStoreProduct = require('./controllers/editStoreProduct')
const generateInvoice = require('./controllers/generateInvoice')
const addSection = require('./controllers/addSection')
const changeSectionAndPayment = require('./controllers/changeSectionAndPayment')
const removeSection = require('./controllers/removeSection')
const addPaymentMode = require('./controllers/addPaymentMode')
const removePaymentMode = require('./controllers/removePaymentMode')
const seeInvoiceRecord = require('./controllers/seeInvoiceRecord')
const invoiceReport = require('./controllers/invoiceReport')
const saleReport = require('./controllers/saleReport')
const productsReport = require('./controllers/productsReport')
const topProductsReport = require('./controllers/topProductsReport')
const orderSuccessful = require('./controllers/orderSuccessful')
const error = require('./controllers/error')
const getProductDetails = require('./controllers/getProductDetails')
const checkout = require('./controllers/checkout')
const stockReport = require('./controllers/stockReport')

const applyFiltersForSelectedBrands = require('./fetchRequests/applyFiltersForSelectedBrands')
const applyFiltersForSelectedPrices = require('./fetchRequests/applyFiltersForSelectedPrices')
const clearFilters = require('./fetchRequests/clearFilters')
const fetchDetailsForCompare = require('./fetchRequests/fetchDetailsForCompare')
const checkForIMEI = require('./fetchRequests/checkForIMEI')
const getInvoiceNumber = require('./fetchRequests/getInvoiceNumber')
const saveInvoice = require('./fetchRequests/saveInvoice')
const checkCustomerMobile = require('./fetchRequests/checkCustomerMobile')
const checkInvoiceNumber = require('./fetchRequests/checkInvoiceNumber')
const fetchInvoiceReport = require('./fetchRequests/fetchInvoiceReport')
const fetchSaleReport = require('./fetchRequests/fetchSaleReport')
const fetchProductsReport = require('./fetchRequests/fetchProductsReport')
const fetchTopProductsReport = require('./fetchRequests/fetchTopProductsReport')
const fetchBrandWiseProduct = require('./fetchRequests/fetchBrandWiseProduct')
const updateStockQuantity = require('./fetchRequests/updateStockQuantity')
const fetchStockReport = require('./fetchRequests/fetchStockReport')
const app = new express();

//mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true });
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true }, function(error){
    if(error) console.log(error);
      console.log("connection successful");
});


const mongoStore = connectMongo(expressSession);

cloudinary.config({
  api_key :process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET,
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
})

app.use(
  expressSession({
    secret: process.env.EXPRESS_SESSION_KEY,
    store: new mongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);
app.use(fileUpload());
app.use(express.static('public'));
app.use(expressEdge);
app.set('views', `${__dirname}/views`);

let discount=5;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('*', (req, res, next) => {
  edge.global('authid', req.session.userId)
  next()
})
app.use('*', (req, res, next) => {
  edge.global('authname', req.session.username)
  next()
})
app.use('*', async (req, res, next) => {
  edge.global('ramContent', await ramContent.find().exec())
  next()
})
app.use('*', async(req, res, next) => {
  edge.global('batteryContent', await batteryContent.find().exec())
  next()
})
app.use('*', async(req, res, next) => {
  edge.global('cameraContent', await cameraContent.find().exec())
  next()
})
app.use('*', async(req, res, next) => {
  edge.global('screenContent', await screenContent.find().exec())
  next()
})
app.use('*', async(req, res, next) => {
  edge.global('newProducts', await newProducts.find().exec())
  next()
})
app.use('*', async(req, res, next) => {
  edge.global('offers', await offer.find().sort({createdAt:-1}).exec())
  next()
})
app.use('*', async (req, res, next) => {
  edge.global('brands', await brand.find().exec())
  next()
})
app.use('*', async (req, res, next) => {
  edge.global('pr', await productsModel.find().sort({price:-1}).exec())
  next()
})

app.use('*',  (req, res, next) => {
  edge.global('dis', discount)
  next()
})
app.use('*',  async (req, res, next) => {
  edge.global('section', await section.find().exec())
  next()
})
app.use('*',  async (req, res, next) => {
  edge.global('paymentMode', await paymentMode.find().exec())
  next()
})
app.use('*', async (req, res, next) => {
  if(req.session.username===(process.env.ADMIN_USERNAME))
    edge.global('onlineOrders', await onlineOrder.find({}).exec())
  else
    edge.global('onlineOrders', await onlineOrder.find({auth:req.session.userId}).exec())
  next()
})
app.use('*', async (req, res, next) => {
  edge.global('storeProduct', await storeProduct.find().exec())
  next()
})

app.get('/', homePage);
app.get('/compare', comparePage);
app.get('/offers', offersPage);
app.get('/about', aboutPage);
app.post('/login',  login);
app.post('/registerUser', registerUser);
app.post('/changeBannerImage', changeBanner);
app.post('/changeBannerBottomImage', changeBannerBottom);
app.post('/changeRAM1', changeRAM1);
app.post('/changeRAM2', changeRAM2);
app.post('/changeRAM3', changeRAM3);
app.post('/changeBattery1', changeBattery1);
app.post('/changeBattery2', changeBattery2);
app.post('/changeBattery3', changeBattery3);
app.post('/changeScreen1', changeScreen1);
app.post('/changeScreen2', changeScreen2);
app.post('/changeScreen3', changeScreen3);
app.post('/changeCamera1', changeCamera1);
app.post('/changeCamera2', changeCamera2);
app.post('/changeCamera3', changeCamera3);
app.post('/changeNewProduct1', changeNewProduct1);
app.post('/changeNewProduct2', changeNewProduct2);
app.post('/changeNewProduct3', changeNewProduct3);
app.post('/changeNewProduct4', changeNewProduct4);
app.post('/addBrand', addBrand);
app.post('/addOffer', addOffer);
app.post('/changeDiscountAmount', (req, res)=>{
    discount=(req.body.amount); 
    res.redirect('/');
})
app.post('/addSection', addSection)
app.post('/addPaymentMode', addPaymentMode)
app.get('/productsPage', productsPage);
app.get('/changeSectionAndPayment', changeSectionAndPayment)

app.post('/addProduct', addProduct);
app.get('/removeProduct/:id', removeProduct);
app.get('/removeBrand/:id', removeBrand);
app.get('/removeOffer/:id', removeOffer);
app.get('/error', error)
app.get('/adminPanel', adminPanel);
app.get('/removeSection/:id', removeSection);
app.get('/removePaymentMode/:id', removePaymentMode);
app.get('/editHome', editHome);
app.get('/editProducts', editProducts);
app.get('/editOffers', editOffers);
app.get('/logout', logout);
app.get('/profile', profile);
app.get('/seeInvoiceRecord', seeInvoiceRecord)
app.get('/invoiceReport', invoiceReport)
app.get('/saleReport', saleReport)
app.get('/productsReport', productsReport)
app.get('/topProductsReport', topProductsReport)

app.post('/applyFiltersForSelectedBrands', applyFiltersForSelectedBrands);

app.post('/applyFiltersForSelectedPrices', applyFiltersForSelectedPrices);

app.post('/clearFilters', clearFilters)

app.post('/fetchDetailsForCompare', fetchDetailsForCompare)

app.post('/checkForIMEI', checkForIMEI)
app.post('/getInvoiceNumber', getInvoiceNumber)
app.post('/saveInvoice', saveInvoice)

app.post('/checkCustomerMobile', checkCustomerMobile)
app.post('/checkInvoiceNumber', checkInvoiceNumber)

app.post('/fetchInvoiceReport', fetchInvoiceReport)

app.post('/fetchSaleReport', fetchSaleReport)
app.post('/fetchProductsReport', fetchProductsReport)
app.post('/fetchBrandWiseProduct', fetchBrandWiseProduct)

app.post('/fetchTopProductsReport', fetchTopProductsReport)

app.post('/updateStockQuantity', updateStockQuantity)

app.post('/fetchStockReport', fetchStockReport)

app.post('/productDetails', getProductDetails);
app.post('/changeProduct', editStoreProduct)
app.get('/deleteStoreProduct/:id', removeStoreProduct)
app.get('/onlineOrders', onlineOrders)
app.get('/checkout', checkout)
app.get('/productDetails', productsPage)
app.get('/stockReport', stockReport)
app.get('/deleteOnlineOrder/:id', removeOnlineOrder)
app.get('/orderSuccessful', orderSuccessful)
app.post('/getOrder', addOnlineOrder);
app.get('/addStoreProduct', addStoreProductView)
app.post('/addStoreProduct', addStoreProduct)
app.get('/changeProducts', changeStoreProduct)
app.get('/generateInvoice', generateInvoice)
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});

