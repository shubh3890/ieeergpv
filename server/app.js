const dotenv=require("dotenv");
dotenv.config();
const express = require("express");

const cors = require("cors");

const dbConnect = require("./config/db")
const contactRoute = require("./routes/contactRoute");
const registrationRoute = require("./routes/registrationRoute")
const healthRoute = require("./routes/health")
const app = express();
dbConnect();
app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());
app.use("/api/register",registrationRoute);
app.use("/api/contact",contactRoute);
app.use("/api", healthRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Backend is running on port ${PORT}`);
    
})