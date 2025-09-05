const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
    branch:{type:mongoose.Schema.Types.ObjectId,ref:"Branch"},
    
});
const User=new mongoose.model("User",userSchema);
module.exports=User;