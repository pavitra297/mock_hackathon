const express=require('express');
const productApp=express.Router();
const productKit=require('../models/Product');
productApp.use(express.json());

//all products
productApp.get('/',async(req,res)=>{
    try{
        const allProducts=await productKit.find();
        res.send({message:"success",data:allProducts});
    }catch(error){
        res.status(500).send({message:"error",error});
    }
})      

//get by id
productApp.get('/:id',async(req,res)=>{
    try{
        const product=await productKit.findById(req.params.id);
        if(product){
            res.send({message:"success",data:product});
        }else{
            res.status(404).send({message:"error",error:"product not found"});
        }
    }catch(error){
        res.status(500).send({message:"error",error});
    }
})

//create product
productApp.post('/',async(req,res)=>{
    try{
       const newProduct= new productKit(req.body);
       await newProduct.save();
       res.send({message:"success",data:newProduct});
    }catch(error){
        res.status(500).send({message:"error",error});
    }
})

//update product details
productApp.put('/:id',async(req,res)=>{
    try{
        const product=await productKit.findOneAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true});
        if(product){
            res.send({message:"success",data:product});
        }else{
            res.status(404).send({message:"error",error:"product not found"});
        }
    }catch(error){
        res.status(500).send({message:"error",error});
    }
})

//delete product 
productApp.delete('/:id',async(req,res)=>{
    try{
        const product=await productKit.findOneAndDelete({_id:req.params.id});
        if(product){
            res.send({message:"success",data:product});
        }else{
            res.status(404).send({message:"error",error:"product not found"});
        }
    }catch(error){
        res.status(500).send({message:"error",error});
    }
})

module.exports=productApp;