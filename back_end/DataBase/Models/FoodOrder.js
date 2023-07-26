const mongoose = require('mongoose');

const foodorder = new mongoose.Schema({
    email:String,
    vendor_Id:String,
    vendormenu_Id:String,
    deliveryAddress:String,
    date:String,
    totalAmount:String,
    paymentStatus:Boolean
})

module.exports = mongoose.model.FoodOrder || mongoose.model('FoodOrder',foodorder);