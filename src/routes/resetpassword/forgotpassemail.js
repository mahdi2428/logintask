const nodemailer = require('nodemailer')


const resetpassword = (client , token) =>{
    const transporter = nodemailer.createTransport({
        host : "smtp.gmail.com",
        port : 587 ,
        secure : false,
        auth : {
            user : "amirreza1379829@gmail.com",
            pass: "sojh hsnm aprb xrsu"
        }
    })

    const mailOption ={
        to:client.email,
        subject : `سلام ${client.name} `,
        text :`شما این را دریافت می کنید زیرا شما (یا شخص دیگری) درخواست بازنشانی رمز عبور حساب خود را داده اید.
        لطفاً روی پیوند زیر کلیک کنید یا آن را در مرورگر خود قرار دهید تا فرآیند تکمیل شود:\n
        http://localhost:3000/resetpass/${token}\n
        اگر شما این درخواست را نکرده اید، لطفاً این ایمیل را نادیده بگیرید و رمز عبور شما بدون تغییر باقی می ماند.\n`
    }

    transporter.sendMail(mailOption)
}


module.exports = resetpassword