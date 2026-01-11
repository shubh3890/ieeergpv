const mongoose = require("mongoose");
const registrationSchema = new mongoose.Schema({
    event:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    phone:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true,
        enum:["UIT RGPV","SOIT RGPV"]
    },
    branch:{
        type:String,
        required:true,
        enum:["CSE","IT","ECE","EX","AU","ME","CE","AIML","CSBS","DS"]
    },
    year:{
        type:String,
        required:true,
        enum: ["1st Year", "2nd Year", "3rd Year", "4th Year"],
    }
   
},{timestamps:true})
module.exports = mongoose.model("Register",registrationSchema)