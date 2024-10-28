const express = require('express');
const router = express.Router();
const singup = require('./singup/signup'); 
const login = require('./login/login')
const verifiction = require('./verifiction/verfiction')
const forgotpass = require('./resetpassword/forgotpass')
const resetpass = require('./resetpassword/resetpass/resetpass')




router.use('/register' , singup)
router.use('/login' ,login )
router.use('/verifiction' , verifiction)
router.use('/forgotpass' , forgotpass)
router.use('/resetpass' , resetpass)








module.exports = router;