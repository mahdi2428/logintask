const express = require("express")
const router = express.Router()
const Usersinfo = require('../../../model/user');


router.post('/' , async(req,res)=>{
    const finduser = await Usersinfo.findOne({urlToken: req.body.urlToken})
    if(finduser){
        finduser.password = req.body.password 
        finduser.urlToken = null 
        await finduser.save()
        res.json({
            success : true ,
            message : "رمز تان با موفقییت تغییر کرد"
        })
    }else{
        res.json({
            success : false ,
            message : "فقط یک بار میتوانید رمز خود را عوض کنید"
        })
    }
})

module.exports = router