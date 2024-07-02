const express=require('express');
const colors=require('colors');
const moragan=require('morgan');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

// const user=require('./routes/userRoutes')

connectDB();

const app=express();

app.use(express.json());
app.use(moragan('dev'));

app.use("/api/user", require("./routes/userRoutes"));

const port=process.env.PORT || 3080

app.listen(port,()=>{
    console.log(`Server Running in ${process.env.DEV_MODE} Mode on port ${port}`.blue .bold);
})