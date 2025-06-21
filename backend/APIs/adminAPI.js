const express=require('express');
const adminApp=express.Router();

adminApp.use(express.json());

adminApp.get('/',(req,res)=>{
    res.send("User API");
})

module.exports=adminApp;


