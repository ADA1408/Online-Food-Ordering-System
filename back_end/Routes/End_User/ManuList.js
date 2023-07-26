const express = require('express')
const router = express.Router();

const user = require('../../DataBase/Models/End User/UserProfile')
const menu = require('../../DataBase/Models/Vender/Vender_Manu')

router.post('/ManuList', async (request, response) => {
    const { email, venderid } = request.body;
    const check = await user.findOne({ email:email })
    if (check) {
        const data = await menu.findOne({vid:venderid})
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

module.exports = router