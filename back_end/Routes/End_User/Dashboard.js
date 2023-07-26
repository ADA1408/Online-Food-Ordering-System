const express = require('express');

const User = require('../../DataBase/Models/End User/UserProfile')
const router = express.Router();

router.post('/dashboard', async ( request , respose ) =>{
    const data = await User.findOne({_id:request.body.id})
    if(data){
        respose.send(data)
    }
    else{
        respose.send({
            massage : "Sorry the data is not found in DataBase"
        })
    }
})

module.exports = router;