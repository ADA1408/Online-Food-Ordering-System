const express = require('express');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const router = express.Router();

const user_login = require('../../DataBase/Models/End User/UserProfile')

router.post('/login',async(request,response)=>{
    const data = await user_login.findOne({email:request.body.email})
   if(data){
        const check_pass = await bcrypt.compare(request.body.password , data.password)
        if(check_pass){
            const token = await JWT.sign(
                {
                    userId: data._id,
                    userEmail: data.email,
                  },
                  "RANDOM-TOKEN",
                  { expiresIn: "24h" }
            )
            response.send({
                massage:"Login Successfull",
                token
            })
        }
        else{
            response.send({
                massage:"Password Does not match"
            })
        }
   }
   else{
        response.send({
            massage:"Email Not Found"
        })
   }
})

module.exports = router;