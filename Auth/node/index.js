const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./userRouter');
const morgon = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(morgon('dev'));
app.use(cors());


app.use('/api',userRouter);

app.listen(5000,()=>{
    console.log("localhost connected successfully");
})

mongoose.connect('mongodb://localhost:27017/userAuth',
{ useNewUrlParser: true , useUnifiedTopology: true },()=>{
    console.log("Server connected succesfully");
})