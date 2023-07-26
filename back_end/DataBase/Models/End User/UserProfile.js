const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    address: [{
        place : {
            type : String,
        },
        city : {
            type :String
        }, 
        state : {
            type : String
        },
        disrtic : {
            type : String 
        },
        pin : {
            type : Number
        },
        country : {
            type : String
        }
    }],
    payment_details : [{
        method : {
            type : String
        }
    }],
    order_history : [{
        item_id : String,
        item_name : String,
        order_date : Date,
        amount : Number,
    }]
})

module.exports = mongoose.model.User || mongoose.model('User',user);