const express = require("express");
const router =express.Router();
const Branch= require("../models/branch.js");
const Branchsub=require("../models/branchsubject.js");

router.get('/branch', async(req,res)=>{
    const blist=await Branch.find({});
    res.json(blist);
});

//selection of sem and types of notes(pyqs, notes)
router.get('/:branch/:sem',async(req,res)=>{
    const {branch,sem,type} =req.params;
    const subjects=await Branchsub.find({branch:await Branch.find({branchName:branch}),semester:sem},"subject");
    
    res.send("sucessfully running ");
});




module.exports=router;