const express= require("express");
const app=express();
const mongoose=require("mongoose");
require('dotenv').config()
app.use(express.json());
const cors=require('cors');
app.use(cors());
mongoose.connect(process.env.DB_URL,{useNewUrlParser: true},(err)=>{
if(err)
console.log("error");
else
console.log("success");
});
const user=require('./router/router');
app.use('/user',user);

app.get('/',(req,res)=>{
res.send("WELCOME TO NODE");

})
PORT=process.env.PORT;
app.listen(PORT,()=>console.log(`AT ${PORT} port is running`))