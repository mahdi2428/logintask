const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken")
require('dotenv').config()



router.post('/',(req,res)=>{
    const token = req.body.cookiess;
    jwt.verify(token , process.env.SECRET_KEY,(err,decodedtoken)=>{
        if(err){
            res.send(err)
        }else{
            res.json({
                success:true,
                decodedtoken
            })
        }
    })
    
})


module.exports = router