const express = require('express')
const router = express.Router()

const Usersinfo = require('../../model/user');


router.post('/',async(req,res)=>{
    const finduser = await Usersinfo.findOne({email : req.body.email})
    if(finduser){
        const comperetion = finduser.verifictionCode === Number(req.body.code)
        if(comperetion){
            finduser.isVerified = true
            await finduser.save()
            res.json({
                success : true ,
                message : "ایمیل شما مورد تایید قرار گرفت"
            })
        }else{
            res.json({
                success : false ,
                message : "کد اشتباه است"
            })
        }

    }else{
        res.json({
            success : false ,
            message : "ایمیل اشتباه است"
        })
    } 
})

module.exports = router