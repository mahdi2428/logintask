const mongoose = require('mongoose')
const {isEmail} = require('validator')



const information = mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    lastname : {
        type : String ,
        required : true
    },
    phoneNum:{
        type : Number ,
        required : true
    },
    email : {
        type : String ,
        unique : true ,
        required : true,
        validate :{
            validator : isEmail
        }
    },
    password :{
        type : String ,
        require : true ,
        minLenght : 8
    },
    verifictionCode :{
        type : Number ,
    },
    isVerified :{
        type : Boolean,
        defaultValue : false
    },
    urlToken : {
        type : String ,
        defaultValue : null
    }
})

const usersinfo =  mongoose.model('personinfo' , information  )


module.exports = usersinfo