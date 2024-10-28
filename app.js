const express = require('express');
const app = express();
const routes = require('./src/routes/index')
const cors = require('cors');



app.use(express.json())
app.use(cors({
    origin : "http://localhost:3000" ,
    credentials : true
}))
app.use('/', routes);



module.exports = app;