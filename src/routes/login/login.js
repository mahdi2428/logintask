const express = require('express');
const router = express.Router();

const Usersinfo = require('../../model/user');


router.post('/',async(req,res)=>{
    try{
    const finduser = await Usersinfo.findOne({email : req.body.email})
    if(finduser){
        if(finduser.isVerified){
        const compration = finduser.password === req.body.password
        if(compration){
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
    
    }}
)


module.exports = router