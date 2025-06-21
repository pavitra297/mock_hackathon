const express=require('express');
const userApp=express.Router();
const User=require("../models/User");
const bcryptjs = require('bcryptjs');
userApp.use(express.json());

//get all users
userApp.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send({message:"success",data:users});
  } catch (error) {
    res.status(500).send({message:"error",error});
  }
});

//by name
userApp.get("/users/:name", async (req, res) => {
  try {
    const users = await User.find({name:req.params.name});
    if(users.length>0){
      res.send({message:"success",data:users});
    }else{
      res.status(404).send({message:"error",error:"user not found"});
    }
  } catch (error) {
    res.status(500).send({message:"error",error});
  }
});

//create user
userApp.post("/create", async (req, res) => {
  try {
    const user= new User(req.body);
    user.passwordHash = await bcryptjs.hash(user.passwordHash,10);   
    await user.save();
    res.send({message:'success',payload:user});
  } catch (error) {
    res.status(500).send({message:"error",error});
  }
});

//update user details
userApp.put("/update",async (req,res)=>{
  try {
    const user=await User.findOneAndUpdate({email:req.body.email},req.body,{new:true,runValidators:true});
    //console.log("hi");
    if(!user){
      return res.status(400).send({message:"error",error:"user not found"});
    }
    res.send({message:"success",payload:user});
  } catch (error) {
    res.status(500).send({message:"error",error});
  }
});




module.exports=userApp;


