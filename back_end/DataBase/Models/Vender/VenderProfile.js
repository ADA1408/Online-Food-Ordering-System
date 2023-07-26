const mongoose = require('mongoose');

const user = new mongoose.Schema({
    fname: String,
    lname: String,
    sname: String,
    email: String,
    password: String,
    phone: String,
    place: {
        type: String,
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    disrtic: {
        type: String
    },
    pin: {
        type: Number
    },
    country: {
        type: String
    },
    opening: String,
    closing: String,
    type_food: [],
    dry_day: [],
    aadhar_number: {
        type: String
    },
    fssai_licence: {
        type: String
    },
    pan_Details: {
        type: String
    },
    bname: String,
    branch: String,
    account_no: String,
    ifsc_code: String,
    tax: {
        type: String
    },
    total_amount_paid: {
        type: Number
    },
    imga:{
        type:String
    }
})

module.exports = mongoose.model.Vender || mongoose.model('Vender', user);