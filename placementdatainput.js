const Subject=require("./models/subject.js");
const connectDB = require("./config/db.js");
const mongoose = require("mongoose");
const PlacementTopic = require("./models/placementtopic.js");


connectDB().then(async ()=>{
    try{

        const data=[
            //main topics 
            // {
            //     name:"Aptitude",
            //     description:"This is the first round in most of the companies",
            //     order:1,
            // },
            // {
            //     name:"DSA",
            //     order:2,
            // },


            //sub topics in dsa and aptitude
            //sub topics in dsa : 

            {
                name:"Arrays",
                order:1,
                parentId:await PlacementTopic.findOne({name:"DSA"}),
            },
            {
                name:"Strings",
                order:2,
                parentId:await PlacementTopic.findOne({name:"DSA"}),
            },
            {
                name:"Hashmapsandsets",
                order:3,
                parentId:await PlacementTopic.findOne({name:"DSA"}),
            },
            {
                name:"Twopointer",
                order:4,
                parentId:await PlacementTopic.findOne({name:"DSA"}),
            },
            {
                name:"Stacks",
                order:5,
                parentId:await PlacementTopic.findOne({name:"DSA"}),
            },

        ];
        const result = await PlacementTopic.insertMany(data);
        console.log("successfully inserted");
        process.exit();


    }catch(err){
        console.log(err);
    }
});