const express = require("express");

const router = express.Router();

const {wrapAsync}=require("../utils/wrapAsync.js");
const PlacementTopic =require("../models/placementtopic.js");
const PlacementQuestion=require("../models/placementquestion.js");

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

//retrieving the questions of that subtopic like arrays, hashmaps and all other sub topics:
router.get("/topics/dsa/:subtopic",wrapAsync(async(req,res)=>{
    const { subtopic } = req.params;
    const topic = await PlacementTopic.findOne({name:subtopic});
    if(!topic){
        return res.status(404).json({message:"no subtopic"});
    }
    // console.log(topic._id);
    
    const questions= await PlacementQuestion.find({ topicId: topic._id });
    res.json(questions);
}));

module.exports=router;



