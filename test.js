const Subject=require("./models/subject.js");
const connectDB = require("./config/db.js");
const mongoose = require("mongoose");

connectDB();

async function add(subname,subcode) {
    await Subject.create({
        subjectName:subname,
        subjectCode:subcode,
    });
    console.log("Branch added successfully!");
}
add("PP","9FC02");