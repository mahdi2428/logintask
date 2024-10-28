const mongoose = require('mongoose')






const connectDB = async() =>{
    try{    
        await mongoose.connect("mongodb+srv://admin:Amir1379@cluster0.dpduype.mongodb.net/login")
        .then(()=>console.log("database is connected"))
    }catch{
        console.log("DB is not working")
    }
}

module.exports = connectDB