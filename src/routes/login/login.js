const express = require('express');
const router = express.Router();
const tokengenerater = require('../../model/jwt')
const Usersinfo = require('../../model/user');


router.post('/',async(req,res)=>{
    try{
    const finduser = await Usersinfo.findOne({email : req.body.email})
    if(finduser){
        if(finduser.isVerified){
        const compration = finduser.password === req.body.password
        if(compration){
            const token = tokengenerater(finduser.id)
            res.cookie('jwt' , token)
            res.json({
                success : true ,
                finduser
            })
        }else{
            res.json({
                success: false ,
                message : "رمز اشتباه است"
            })
        }
    }else{ 
        res.json({
            success : false ,
            message : "ابتدا ایمیل تان را تایید کنید"
        })
    }
    }else{
        res.json({
        success : false ,
        message : "کاربر پیدا نشد"
    })}
    
    }catch(err){
        console.log(err)
    }}
)


module.exports = router