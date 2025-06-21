const express=require('express');
const userApp=express.Router();
const User=require("../models/User");
const bcryptjs = require('bcryptjs');
userApp.use(express.json());
userApp.use(express.urlencoded({ extended: true }));

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

//update user details by id
userApp.put('/update/:id', async (req, res) => {
    try {
        // Add validation for request body
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).send({ message: "error", error: "No data provided for update" });
        }

        // Log what we're trying to update (for debugging)
        console.log('Updating user ID:', req.params.id);
        console.log('Update data:', req.body);

        const user = await User.findOneAndUpdate(
            { _id: req.params.id }, 
            { $set: req.body }, // Use $set operator explicitly
            { 
                new: true, 
                runValidators: true,
                upsert: false // Explicitly set to false
            }
        );
        
        if (user) {
            console.log('Updated user:', user); // Log the result
            res.send({ message: "success", data: user });
        } else {
            res.status(404).send({ message: "error", error: "user not found" });
        }
    } catch (error) {
        console.error('Update error:', error); // Log the full error
        res.status(500).send({ message: "error", error: error.message });
    }
});

//delete user
userApp.delete("/delete/:email",async (req,res)=>{
  try {
    const user=await User.findOneAndDelete({email:req.params.email});
    if(!user){
      return res.status(400).send({message:"error",error:"user not found"});
    }
    res.send({message:"success",payload:user});
  } catch (error) {
    res.status(500).send({message:"error",error});
  }
});



module.exports=userApp;


