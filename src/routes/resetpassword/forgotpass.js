const express = require("express")
const router = express.Router()
const Usersinfo = require('../../model/user');
const resetpassword = require('./forgotpassemail')
const crypto = require("crypto");

router.post('/' , async(req,res)=>{
    const finduser = await Usersinfo.findOne({email : req.body.email})
    if(finduser){
        if(finduser.isVerified){
            const token = crypto.randomBytes(64).toString('hex')
            resetpassword(finduser , token)
            finduser.urlToken = token
            await finduser.save()
            res.json({
                success : true ,
                message : "ایمیل برای تغییر پسورد فرستاده شد"
            })
        }else{
            res.json({
                success : false ,
                message : "ابتدا ایمیلتان را تایید کنید"
            })
        }
    }else{
        res.json({
            success : false ,
            message : "کاربر پیدا نشد"
        })
    }

})

module.exports = router