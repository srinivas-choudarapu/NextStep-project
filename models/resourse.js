const mongoose=require("mongoose");

const resourceSchema=new mongoose.Schema({
    // subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
    subject:String,
    resourceType: { type: String, enum: ["notes", "previous_paper", "video", "book"] },
    title: String,
    url: String,
    // uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports=mongoose.model("Resource",resourceSchema);