const express=require('express');
const app=express();
var cors = require('cors');
const configdetails=require('./config/config');
const bodyParser=require('body-parser');
const employee=require('./routes/employee');
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(employee)
app.listen(configdetails.server.port,()=>console.log(`Server started on port:${configdetails.server.port}`));


