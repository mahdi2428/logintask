const { config } = require("dotenv")
const jwt = require("jsonwebtoken")
require('dotenv').config()


const tokengenerater =(id)=>{
    const token = jwt.sign( {id} , process.env.SECRET_KEY ,{expiresIn : '30day'})
    return token
}


module.exports = tokengenerater