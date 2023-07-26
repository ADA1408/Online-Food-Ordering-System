const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

const Blogg = require('../../DataBase/Models/BlogModel')
const User = require('../../DataBase/Models/End User/UserProfile')

router.post('/userblogcreation',async(request,response)=>{
    const date = new Date();
    const data = await User.findOne({email:request.body.email})
    if(data){
        const check = await bcrypt.compare(request.body.password , data.password)
        if(check){
            const holder = new Blogg({
                owner:request.body.owner,
                ownertype:"End-User",
                header:request.body.header,
                content:request.body.content,
                date:date
            })
            const saver = await holder.save()
            if(saver){
                response.send({
                    massage : "Blog is successfully uploaded"
                })
            }
            else{
                response.send({
                    massage : "Sorry for DataBase connection error"
                })
            }
        }
        else{
            response.send({
                massage : "Sorry the Request is not Autherized"
            })
        }
    }
    else{
        response.send({
            massage : "Sorry The request is not identify the specific User "
        })
    }
})

module.exports = router;