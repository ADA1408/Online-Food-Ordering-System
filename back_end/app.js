const express = require('express');
const cors = require('cors');
const connectDb = require('./DataBase/DBconnect');

const vsignup = require('./Routes/Vender/SignUp')
const vlogin = require('./Routes/Vender/LogIn')
const votp = require('./Routes/Vender/Otp')
const vblogcrt = require('./Routes/Vender/Blog_Upload')
const vdetails = require('./Routes/Vender/Details')
const vmanu = require('./Routes/Vender/AddManu')

const usignup = require('./Routes/End_User/SignUp')
const ulogin = require('./Routes/End_User/LogIn')
const uotp = require('./Routes/End_User/Otp')
const ublogcrt = require('./Routes/End_User/Blog_Upload')
const dashdata = require('./Routes/End_User/Dashboard')
const shoplist = require('./Routes/End_User/ShopList')
const menulist = require('./Routes/End_User/ManuList')
const order = require('./Routes/End_User/Order');

const app = express();
app.use(cors());
app.use(express.json())

connectDb()

app.use('/vender/',vsignup);
app.use('/vender/',vlogin);
app.use('/vender/',votp);
app.use('/vender/',vblogcrt);
app.use('/vender/',vdetails);
app.use('/vender/',vmanu);

app.use('/end_user/',usignup);
app.use('/end_user/',ulogin);
app.use('/end_user/',uotp);
app.use('/end_user/',ublogcrt)
app.use('/end_user/',dashdata)
app.use('/end_user/',shoplist)
app.use('/end_user/',menulist)
app.use('/end_user/',order)


app.get('/',(req,res)=>{
    res.send('Hello Everyone');
})

module.exports=app;