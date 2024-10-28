const nodemailer = require('nodemailer');




const sendVerifictionCode = async (client , code) =>{
    const transporter = nodemailer.createTransport({
        host : "smtp.gmail.com",
        port: 587,
        secure : false ,
        auth :{
            user : "amirreza1379829@gmail.com",
            pass: "sojh hsnm aprb xrsu"
        }
    });
    const mailOption ={
        to:client.email,
        subject : `سلام ${client.name} `,
        text :`به سابت ما خوش امدید کد شما برای ورود  : ${code}`
    }

    await transporter.sendMail(mailOption);
}

module.exports = sendVerifictionCode