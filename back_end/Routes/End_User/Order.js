const express = require('express')
const router = express.Router();

const userorder = require('../../DataBase/Models/FoodOrder')

router.post('/userorder', async (request, response) => {
    const { email, venderid, manuid, address, date, totalamount, paymentstatus } = request.body;
    const data = new userorder({
        email: email,
        vendor_Id: venderid,
        vendormenu_Id: manuid,
        deliveryAddress: address,
        date: date,
        totalAmount: totalamount,
        paymentStatus: paymentstatus
    })
    const saver = await data.save()
    if(saver){
        response.send({
            massage:"Order Placed into DataBase"
        })
    }
    else{
        response.send({
            massage:"Sorry Some Technical Issue Arise"
        })
    }
})

module.exports = router;