const express = require('express')
const router = express.Router()

const vender = require('../../DataBase/Models/Vender/VenderProfile')
const user = require('../../DataBase/Models/End User/UserProfile')

router.post('/ShopList', async (request, response) => {
    const { email } = request.body;
    const check = await user.findOne({ email:email })
    if (check) {
        const data = await vender.find()
        if (data) {
            response.json(data)
        }
        else {
            response.send({
                massage: 'Internal Server Error'
            });
        }
    }
    else {
        response.send({
            massage: "It is not a authorized request"
        })
    }
})
module.exports = router;