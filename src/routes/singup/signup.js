const express = require('express');
const router = express.Router();
const usersinfo = require("../../model/user");
const verification = require('./nodemailer')

const generateVerifictionCode = Number(Math.floor(100000 + Math.random() * 90000))

router.post('/',async(req,res)=>{
    try{
    const code = generateVerifictionCode
    const createUsers = await usersinfo.create({
        name : req.body.name ,
        lastname : req.body.lastname,
        email : req.body.email ,
        password : req.body.password,
        phoneNum : req.body.phoneNum ,
        verifictionCode : code ,
        isVerified : false , 
        urlToken : null
    })
    verification(createUsers , code )
    res.json({
        success : true,
        createUsers
    })
    }catch(err){
        console.log(err)
        res.json({
            success : false,
            message : "اطلاعات خود را به درستی وارد کنید"
        })
    }
})

module.exports = router;
