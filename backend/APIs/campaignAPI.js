const express=require('express');
const campaignApp=express.Router();
const campaign=require("../models/Campaign");
campaignApp.use(express.json());

//get all campaign
campaignApp.get('/',async(req,res)=>{
    try{
        const allCampaign=await campaign.find();
        res.send({message:"success",data:allCampaign});
    }catch(error){
        res.status(500).send({message:"error",error});
    }
})


//get details by id
campaignApp.get('/:id',async(req,res)=>{
    try{
        const campaignDetails=await campaign.findById(req.params.id);
        if(campaignDetails){
            res.send({message:"success",data:campaignDetails});
        }else{
            res.status(404).send({message:"error",error:"campaign not found"});
        }
    }catch(error){
        res.status(500).send({message:"error",error});
    }
})
//create campaign
campaignApp.post('/',async(req,res)=>{
    try{
        const newCampaign=new campaign(req.body);
        const savedCampaign=await newCampaign.save();
        res.send({message:"success",data:savedCampaign});
    }catch(error){
        res.status(500).send({message:"error",error});
    }
})

//update campaign
campaignApp.put('/:id',async(req,res)=>{
    try{
        const updatedCampaign=await campaign.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true});
        if(updatedCampaign){
            res.send({message:"success",data:updatedCampaign});
        }else{
            res.status(404).send({message:"error",error:"campaign not found"});
        }
    }catch(error){
        res.status(500).send({message:"error",error});
    }
})

//delete campaign
campaignApp.delete('/:id',async(req,res)=>{
    try{
        const deletedCampaign=await campaign.findOneAndDelete({_id:req.params.id});
        if(deletedCampaign){
            res.send({message:"success",data:deletedCampaign});
        }else{
            res.status(404).send({message:"error",error:"campaign not found"});
        }
    }catch(error){
        res.status(500).send({message:"error",error});
    }
})


module.exports=campaignApp;