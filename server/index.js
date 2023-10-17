const express = require('express')
const mongoose = require('mongoose')
const app = express()

const bodyParser = require('body-parser');  
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors({ origin: ['http://localhost:3000'] }));

const URI='mongodb+srv://paulrohit791:kBRCX0I5jKJBJIBv@cluster0.ysrklfl.mongodb.net/'

app.get("/",(req,res)=>{
    res.send('hellow') 
})

const authRouter = require('./routes/userRoutes.js')
app.use('/student',authRouter);
const studentRouter = require('./routes/studentRoutes.js')
app.use('/auth',studentRouter);


// student name , student id email, contact , address,gender,

// app.use()

mongoose.connect(URI)
.then(()=>{
    app.listen("4000",()=>{
        console.log("listening");
    })
})


