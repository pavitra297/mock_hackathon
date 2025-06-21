const express=require('express');
const donorApp=express.Router();

donorApp.use(express.json());

donorApp.get('/',(req,res)=>{
    res.send("User API");
})

module.exports=donorApp;


