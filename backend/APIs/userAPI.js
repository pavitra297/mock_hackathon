const express=require('express');
const userApp=express.Router();

userApp.use(express.json());

userApp.get('/',(req,res)=>{
    res.send("User API");
})

module.exports=userApp;


