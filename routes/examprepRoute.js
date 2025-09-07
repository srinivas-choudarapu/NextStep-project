const express = require("express");
const router =express.Router();
const Branch= require("../models/branch.js");
const Branchsub=require("../models/branchsubject.js");
const Resource = require("../models/resourse.js");

router.get('/branch', async(req,res)=>{
    const blist=await Branch.find({});
    res.json(blist);
});

//selection of sem and types of notes(pyqs, notes)
router.get('/:branch/:sem',async(req,res)=>{
    const {branch,sem,type} =req.params;
    const subjects=await Branchsub.find({branch:await Branch.find({branchName:branch}),semester:sem},"subject");
    
    //res.send("sucessfully running ");
    res.json(subjects);
});
router.get('/:branch/:sem/:subid/:type',async(req,res)=>{
    const {subid,type}=req.params;
    const reslink=await Resource.find({subject_id:subid,resourceType:type},'url');
    res.json(reslink);
});



module.exports=router;