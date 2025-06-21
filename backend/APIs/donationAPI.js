const express=require('express');
const campaignApp=express.Router();
const donation=require("../models/Donation");
campaignApp.use(express.json());

//list all donations
campaignApp.get('/',async(req,res)=>{
    try{
        const allDonations=await donation.find();
        res.send({message:"success",data:allDonations});
    }catch(error){
        res.status(500).send({message:"error",error});
    }
})

//get donation by id

campaignApp.get('/:id',async(req,res)=>{
    try{
        const donationDetails=await donation.findById(req.params.id);
        if(donationDetails){
            res.send({message:"success",data:donationDetails});
        }else{
            res.status(404).send({message:"error",error:"donation not found"});
        }
    }catch(error){
        res.status(500).send({message:"error",error});
    }
})

//create donation

campaignApp.post('/',async(req,res)=>{
    try{
        const newDonation=await donation.create(req.body);
        res.send({message:"success",data:newDonation});
    }catch(error){
        res.status(500).send({message:"error",error});
    }
})

module.exports=campaignApp;