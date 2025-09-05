const express = require("express");

const router = express.Router();

const {wrapAsync}=require("../utils/wrapAsync.js");
const PlacementTopic =require("../models/placementtopic.js");

router.get("/topics",wrapAsync(async (req,res)=>{
    // let topics= await PlacementTopic.find({ parentId: null }).sort({ order: 1 });
    const topics = await PlacementTopic.find({ parentId: null }).sort({ order: 1 });
    res.json(topics); 

}));

//for getting topics of dsa
router.get("/topics/dsa",wrapAsync(async (req,res)=>{
    const subtopics=await PlacementTopic.find({parentId:await PlacementTopic.find({name:"DSA"})}).sort({order:1});
    res.json(subtopics);
}));

module.exports=router;



