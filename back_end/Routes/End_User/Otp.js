const express = require('express');
const router = express.Router();

const UserOtp = require('../../DataBase/Models/End User/OtpModel')
const sendOtp = require('../../Send_email')

router.post('/otp', (request, response) => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log(request.body.email);
    sendOtp(request.body.email,otp)
    .then((result)=>{
       console.log('mail send successfull');
    })
    .catch((error)=>{
        console.log('Promise return failed')
    })
    const user = new UserOtp({
        email: request.body.email,
        otp: otp.toString(),
        used: false
    })
    user.save()
        .then((result) => {
            response.send({
                massage: " Email Send Successfully ",
                result
            })
        })
        .catch((error) => {
            response.send({
                massage: " Error! Unsuccessfull to Send Email ",
                error
            })
        })
})

module.exports = router;