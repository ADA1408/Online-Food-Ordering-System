const express = require('express');
const router = express.Router();

const VenderProfile = require('../../DataBase/Models/Vender/VenderProfile')

router.post('/profileCreate', async (request, response) => {
    const { id, SName, phone, aadhar, pan, tax, fssai, place, city, pin, state, contry, distric, account_no, cuname, branch, ifsc, opening, closing, openingdays, type_food, image } = request.body;
    const data = await VenderProfile.updateOne({ _id: id }, {
        $set: {
            sname: SName,
            phone: phone,
            aadhar_number: aadhar,
            pan_Details: pan,
            tax: tax,
            fssai_licence: fssai,
            bname: cuname,
            branch: branch,
            account_no: account_no,
            ifsc_code: ifsc,
            type_food: type_food,
            dry_day: openingdays,
            place: place,
            city: city,
            state: state,
            distric: distric,
            pin: pin,
            country: contry,
            opening: opening,
            closing: closing,
            imga:image
        }
    })
    if (data) {
        response.send({
            massage: "data update successfull"
        })
    }
    else {
        response.send({
            massage: "connection Broken try again later"
        })
    }
})

module.exports = router;