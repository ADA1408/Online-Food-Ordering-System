const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const UserOtp = require('../../DataBase/Models/End User/OtpModel')
const User_Personal = require('../../DataBase/Models/End User/UserProfile')

router.post('/signup', async (request, response) => {
    const { name, email, password, otp } = request.body;
    const data = await UserOtp.findOne({ $and: [{ email: email }, { otp: otp }, { used: false }] })
    if (data) {
        const endUser = await User_Personal.findOne({ email: request.body.email })
        if (endUser) {
            console.log("Email is already exist")
        }
        else {
            bcrypt.hash(password, 10)
                .then((hashedpassword) => {
                    const user = new User_Personal({
                        name: name,
                        email: email,
                        password: hashedpassword,
                    })
                    user.save()
                        .then(async (result) => {
                            const reset = await UserOtp.updateOne({ _id: data._id }, { $set: { used: true } })
                            if (reset) {
                                response.send({
                                    massage: "otp update successfull and User Profile Created Successfully"
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
                                massage: "Error! Creating User Profile",
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