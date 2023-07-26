const express = require('express')
const router = express.Router();

const venderManu = require('../../DataBase/Models/Vender/Vender_Manu')

router.post('/addManu', async (request, response) => {
    const { venderid, foodname, price, imgurl } = request.body;
    const find = await venderManu.findOne({ vid: venderid })
    if (find) {
        const manuArray = find.manu;
        const arrayobj = {
            img:imgurl,
            name:foodname,
            price:price
        };
        manuArray.push(arrayobj);
        const updater = await find.save()
        if (updater) {
            response.send({
                massage:"A Dish Added Successfully"
            })
        }
        else{
            response.send({
                massage:"Sorry Some Error Occurs"
            })
        }
    }
    else{
        const data = new venderManu({
            vid:venderid,
            manu:[{
                img:imgurl,
                name:foodname,
                price:price
            }]
        })
        const saver = await data.save()
        if(saver){
            response.send({
                massage:"Manu Creation and Updation Successfully"
            })
        }
        else{
            response.send({
                massage:"Error Occurs to Saving Data into VenderManu DataBase"
            })
        }
    }
})

module.exports = router;