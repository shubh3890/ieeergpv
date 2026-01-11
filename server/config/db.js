const mongoose = require("mongoose");
const dbConnect =async()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URL);
       console.log("MONGODB Connected");
       
    } catch (error) {
        console.error(error.message);
        
    }
}
module.exports = dbConnect