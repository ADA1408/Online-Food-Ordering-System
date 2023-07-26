const mongoose = require('mongoose');
require('dotenv').config();

async function Db_connect() {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.Connection_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("MongoDB DataBase Connected Successfull");
        })
        .catch((error) => {
            console.log("Opps! Something went wrong");
            console.error(error);
        })
}

module.exports = Db_connect;