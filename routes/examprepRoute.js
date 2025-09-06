const express = require("express");
const router =express.Router();
const Branch= require("../models/branch.js");

router.get('/branch', async(req,res)=>{
    const blist=await Branch.find({});
    res.json(blist);
});





module.exports=router;