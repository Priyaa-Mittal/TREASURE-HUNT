const express=require('express');
const app=express();
const PORT=8000;
const dotenv=require('dotenv');
const cors=require('cors');
dotenv.config();
app.get("/",(req,res)=>{
    res.send("hello World");
})
const mongoDB=require("./db");
mongoDB(process.env.BACKEND_URL);

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type,Accept"
    );
    next();
})
app.use(express.json());
app.use(cors());
app.use('/api',require('./routes/createUser'));

app.listen(PORT,()=>{
    console.log("Server started");
})