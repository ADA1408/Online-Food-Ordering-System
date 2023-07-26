const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const VenderOtp = require('../../DataBase/Models/Vender/OtpModel')
const Vender_Personal = require('../../DataBase/Models/Vender/VenderProfile')

router.post('/signup', async (request, response) => {
    const { fname, lname , email, password, otp} = request.body;
    const data = await VenderOtp.findOne({ $and: [{ email: email }, { otp: otp }, { used: false }] })
    if (data) {
        const venderer = await Vender_Personal.findOne({ email: request.body.email })
        if (venderer) {
            console.log("Email is already exist")
        }
        else {
            bcrypt.hash(password, 10)
                .then((hashedpassword) => {
                    const vender = new Vender_Personal({
                        fname: fname,
                        lname: lname,
                        email: email,
                        password: hashedpassword,
                    })
                    vender.save()
                        .then(async (result) => {
                            const reset = await VenderOtp.updateOne({ _id: data._id }, { $set: { used: true } })
                            if (reset) {
                                response.send({
                                    massage: "opt update successfull and Vender Profile Created Successfull",
                                    id : data._id
                                })
                            }
                            else {
                                response.send({
                                    massage: "otp can not send"
                                })
                            }
                        })
                        .catch((error) => {
                            response.send({
                                massage: "Error! Creating Vender Profile",
                                error
                            })
                        })
                })
                .catch((error) => {
                    response.send({
                        massage: "Hashing of Password is not done",
                        error
                    })
                })

        }
    }
    else{
        response.send({
            massage:"Sorry the otp you enter is already used"
        })
    }
})

module.exports = router;