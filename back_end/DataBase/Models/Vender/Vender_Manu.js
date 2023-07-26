const mongoose = require('mongoose')

const subManu = new mongoose.Schema({
    img : {
        type : String
    },
    name : {
        type : String,
    },
    price : {
        type : String,
    }
})

const manu = new mongoose.Schema({
    vid: {
        type : String,
    },
    manu : [subManu]
})

module.exports = mongoose.model.Manu || mongoose.model('Manu',manu);